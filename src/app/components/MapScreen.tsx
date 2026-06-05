import { useEffect, useRef } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import L, {DivIcon} from 'leaflet';
// @ts-ignore
import 'leaflet/dist/leaflet.css';
import { Box } from '@mui/material';
import { RadioButtonChecked } from "@mui/icons-material";
import Flag from '../icons/flag.svg'
import {goats, Goat} from "../data/goats";

interface Props {
    onGoatClick: (goat: Goat) => void;
    onMapClick: () => void;
}

export default function MapScreen({onGoatClick, onMapClick}: {onGoatClick?: (goat:Goat) => void; onMapClick?: () => void;}) {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstanceRef = useRef<L.Map | null>(null);

    useEffect(() => {
        if (!mapRef.current || mapInstanceRef.current) return;

        // Lublin coordinates
        const lublinPosition: [number, number] = [51.247690, 22.568603];

        // Initialize map
        const map = L.map(mapRef.current).setView(lublinPosition, 19);
        mapInstanceRef.current = map;

        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        // Find user's location
        const onLocationFound = (e: L.LocationEvent) => {
            const radius = e.accuracy;

            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log('Latitude:', position.coords.latitude);
                    console.log('Longitude:', position.coords.longitude);
                },
                (error) => {
                    console.error('Geolocation error:', error);
                },
                {
                    enableHighAccuracy: true,
                }
            );

            L.marker(e.latlng)
                .addTo(map)
                .bindPopup(
                    `You are within ${Math.round(radius)} meters from this point`
                )
                .openPopup();

            L.circle(e.latlng, {
                radius,
                color: '#4285F4',
                fillColor: '#4285F4',
                fillOpacity: 0.15,
            }).addTo(map);

            // Optional: center map on user
            map.setView(e.latlng, 17);
        };

        const onLocationError = (e: L.ErrorEvent) => {
            console.error('Location error:', e.message);
        };

        map.on('locationfound', onLocationFound);
        map.on('locationerror', onLocationError);

        map.on('click', () => {
            onMapClick();
        });

        // Request location
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const latlng = {
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude,
                };

                const userLocationIcon = L.divIcon({
                    html: renderToStaticMarkup(
                        <RadioButtonChecked style={{ color: '#4285F4', fontSize: 32 }} />
                    ),
                    className: '',
                    iconSize: [32, 32],
                    iconAnchor: [16, 16],
                });

                L.marker(latlng, {icon: userLocationIcon})
                    .addTo(map)

                L.circle(latlng, {
                    radius: pos.coords.accuracy,
                    color: '#4285F4',
                    fillColor: '#4285F4',
                    fillOpacity: 0.15,
                }).addTo(map);

                map.setView(latlng, 17);
            },
            (err) => {
                console.error("Geolocation failed:", err);
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0,
            }
        );

        // Add marker
        const customIcon = new L.DivIcon({
            html: renderToStaticMarkup(
                <Flag />
            ),
            className: '',
            iconSize: [37, 61],
            iconAnchor: [0, 61],
            popupAnchor: [18, -67],
            shadowSize: [61, 61],
        });

        goats.forEach((goat) => {
            L.marker(goat.position, { icon: customIcon })
                .addTo(map)
                .on('click', () => {
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
                height: '100%',
                width: '100%',
                position: 'relative',
            }}
        />
    );
}