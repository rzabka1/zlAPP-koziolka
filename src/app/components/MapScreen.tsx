import {useEffect, useRef} from "react";
import {renderToStaticMarkup} from "react-dom/server";
import L from "leaflet";
import {Geolocation} from "@capacitor/geolocation";
// @ts-ignore
import "leaflet/dist/leaflet.css";
import {Box} from "@mui/material";
import {RadioButtonChecked} from "@mui/icons-material";
import Flag from "../icons/flag.svg";
import FlagSelected from "../icons/flag-selected.svg"
import FlagCheckedSelected from "../icons/flag-checked-selected.svg";
import FlagChecked from "../icons/flag-checked.svg"
import FlagStar from "../icons/flag-star.svg"
import {Goat, goats} from "../data/goats";
import {Place, places} from "../data/places";

interface Props {
	onGoatClick: (goat: Goat) => void;
	onMapClick: () => void;
	onPlaceClick: (place: Place) => void;
}

export default function MapScreen({
	                                  onGoatClick,
	                                  onMapClick,
	                                  onPlaceClick,
                                  }: {
	onGoatClick?: (goat: Goat) => void;
	onPlaceClick?: (place: Place) => void;
	onMapClick?: () => void;
}) {
	const mapRef = useRef<HTMLDivElement>(null);
	const mapInstanceRef = useRef<L.Map | null>(null);
	const selectedMarkerRef = useRef<L.Marker | null>(null);

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

			const previousMarker = selectedMarkerRef.current;
			if (!previousMarker) return;

			const previousGoat = (previousMarker.options as any).goat as Goat;

			previousMarker.setIcon(
				previousGoat.isCaught ? flagCheckedIcon : flagIcon
			);

			requestAnimationFrame(() => {
				shrinkMarker(previousMarker);
			});

			selectedMarkerRef.current = null;
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
							<RadioButtonChecked style={{color: "#4285F4", fontSize: 32}}/>,
						),
						className: "",
						iconSize: [32, 32],
						iconAnchor: [16, 16],
					});

					L.marker(latlng, {icon: userLocationIcon}).addTo(map);

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
		const flagIcon = new L.DivIcon({
			html: renderToStaticMarkup(
				<div className="flag-content">
					<Flag/>
				</div>
			),
			className: "",
			iconSize: [37, 61],
			iconAnchor: [0, 61],
			popupAnchor: [18, -67],
			shadowSize: [61, 61],
		});

		const flagSelected = new L.DivIcon({
			html: renderToStaticMarkup(
				<div className="flag-content">
					<FlagSelected/>
				</div>
			),
			className: "",
			iconSize: [87, 141],
			iconAnchor: [16, 110],
			popupAnchor: [18, -67],
			shadowSize: [61, 61],
		});

		const flagCheckedIcon = new L.DivIcon({
			html: renderToStaticMarkup(
				<div className="flag-content">
					<FlagChecked/>
				</div>
			),
			className: "",
			iconSize: [37, 61],
			iconAnchor: [0, 61],
			popupAnchor: [18, -67],
			shadowSize: [61, 61],
		});

		const flagCheckedSelected = new L.DivIcon({
			html: renderToStaticMarkup(
				<div className="flag-content">
					<FlagCheckedSelected/>
				</div>
			),
			className: "",
			iconSize: [87, 141],
			iconAnchor: [16, 110],
			popupAnchor: [18, -67],
			shadowSize: [61, 61],
		});

		const flagStarIcon = new L.DivIcon({
			html: renderToStaticMarkup(
				<div className="flag-content">
					<FlagStar/>
				</div>
			),
			className: "",
			iconSize: [37, 61],
			iconAnchor: [0, 61],
			popupAnchor: [18, -67],
			shadowSize: [61, 61],
		});

		function bounceMarker(marker: L.Marker) {
			const wrapper = marker.getElement()?.querySelector(".flag-content") as HTMLElement;

			if (!wrapper) return;

			wrapper.animate(
				[
					{transform: "translateY(0) scale(1)"},
					{transform: "translateY(-10px) scale(1.18)", offset: 0.35},
					{transform: "translateY(0) scale(0.96)", offset: 0.7},
					{transform: "translateY(0) scale(1)"},
				],
				{
					duration: 1220,
					easing: "cubic-bezier(.2, 1.6, .3, 1)",
				}
			);
		}

		function shrinkMarker(marker: L.Marker) {
			const wrapper = marker.getElement()?.querySelector(".flag-content") as HTMLElement;

			if (!wrapper) return;

			wrapper.animate(
				[
					{transform: "scale(1.15)"},
					{transform: "scale(1)"}
				],
				{
					duration: 620,
					easing: "cubic-bezier(.2, .9, .2, 1)"
				}
			);
		}

		goats.forEach((goat) => {
			const normalIcon = goat.isCaught
				? flagCheckedIcon
				: flagIcon;

			const marker = L.marker(goat.position, {icon: normalIcon}).addTo(map);

			(marker.options as any).goat = goat;

			marker.on("click", () => {
				if (
					selectedMarkerRef.current &&
					selectedMarkerRef.current !== marker
				) {
					const previousMarker = selectedMarkerRef.current;
					const previousGoat = (previousMarker.options as any).goat as Goat;

					previousMarker.setIcon(
						previousGoat.isCaught ? flagCheckedIcon : flagIcon
					);

					map.flyTo(marker.getLatLng(), map.getZoom(), {
						duration: 0.2,
					});

					requestAnimationFrame(() => {
						shrinkMarker(previousMarker);
					});
				}

				const currentGoat = goat;

				const selectedIcon = currentGoat.isCaught
					? flagCheckedSelected
					: flagSelected;

				marker.setIcon(selectedIcon);

				requestAnimationFrame(() => {
					bounceMarker(marker);
				});

				selectedMarkerRef.current = marker;

				onGoatClick?.(goat);
			});
		});

		places.forEach((place) => {
			const marker = L.marker(place.position, {
				icon: flagStarIcon,
			}).addTo(map);

			(marker.options as any).place = place;

			marker.on("click", () => {
				onPlaceClick?.(place);
			});
		});

		// // Muzeum Narodowe Zamek
		// L.marker(
		// 	[51.250425116739784, 22.572426324244525],
		// 	{icon: flagStarIcon}
		// ).addTo(map);
		//
		// // Muzeum Czechowicza
		// L.marker(
		// 	[51.24784881973207, 22.56908346154913],
		// 	{icon: flagStarIcon}
		// ).addTo(map);
		//
		// // Wieża Trynitarska
		// L.marker(
		// 	[51.24707998172064, 22.568065390261616],
		// 	{icon: flagStarIcon}
		// ).addTo(map);
		//
		// // Muzeum Historii Miasta Lublina (Brama Krakowska)
		// L.marker(
		// 	[51.24742607529606, 22.56658376518769],
		// 	{icon: flagStarIcon}
		// ).addTo(map);


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
