import { useEffect, useRef } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import L, { DivIcon } from "leaflet";
import { Geolocation } from "@capacitor/geolocation";
// @ts-ignore
import "leaflet/dist/leaflet.css";
import { Box } from "@mui/material";
import { RadioButtonChecked } from "@mui/icons-material";
import Flag from "../icons/flag.svg";
import { goats, Goat } from "../data/goats";

interface Props {
  onGoatClick: (goat: Goat) => void;
  onMapClick: () => void;
}

export default function MapScreen({
  onGoatClick,
  onMapClick,
}: {
  onGoatClick?: (goat: Goat) => void;
  onMapClick?: () => void;
}) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Lublin coordinates
    const lublinPosition: [number, number] = [51.24769, 22.568603];

    // Initialize map
    const map = L.map(mapRef.current, {
      minZoom: 12,
      maxBounds: [
        [51.1, 22.3],
        [51.35, 22.75],
      ],
    }).setView(lublinPosition, 19);
    mapInstanceRef.current = map;

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    map.on("click", () => {
      onMapClick();
    });

    // Request location
    const initLocation = async () => {
      try {
        let perm = await Geolocation.checkPermissions();
        if (perm.location !== "granted") {
          perm = await Geolocation.requestPermissions();
        }

        if (perm.location === "granted") {
          const pos = await Geolocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0,
          });

          const latlng = {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          };

          const userLocationIcon = L.divIcon({
            html: renderToStaticMarkup(
              <RadioButtonChecked style={{ color: "#4285F4", fontSize: 32 }} />,
            ),
            className: "",
            iconSize: [32, 32],
            iconAnchor: [16, 16],
          });

          L.marker(latlng, { icon: userLocationIcon }).addTo(map);

          L.circle(latlng, {
            radius: pos.coords.accuracy,
            color: "#4285F4",
            fillColor: "#4285F4",
            fillOpacity: 0.15,
          }).addTo(map);

          map.setView(latlng, 17);
        } else {
          console.error("User denied location permission");
        }
      } catch (err) {
        console.error("Geolocation failed:", err);
      }
    };
    initLocation();

    // Add marker
    const customIcon = new L.DivIcon({
      html: renderToStaticMarkup(<Flag />),
      className: "",
      iconSize: [37, 61],
      iconAnchor: [0, 61],
      popupAnchor: [18, -67],
      shadowSize: [61, 61],
    });

    goats.forEach((goat) => {
      L.marker(goat.position, { icon: customIcon })
        .addTo(map)
        .on("click", () => {
          onGoatClick?.(goat);
        });
    });

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <Box
      ref={mapRef}
      sx={{
        height: "100%",
        width: "100%",
        position: "relative",
      }}
    />
  );
}
