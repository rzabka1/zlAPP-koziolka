import { useEffect, useRef } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import L, {DivIcon} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Box } from '@mui/material';
import { RadioButtonChecked } from "@mui/icons-material";
import Flag from '../icons/flag.svg'

export default function MapScreen() {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstanceRef = useRef<L.Map | null>(null);

    useEffect(() => {
        if (!mapRef.current || mapInstanceRef.current) return;

        // Lublin coordinates
        const lublinPosition: [number, number] = [51.247690, 22.568603];

        // Goat coordinates
        const wiktoriaPosition: [number, number] = [51.24622587050444, 22.561564768080864];
        const kryspinPosition: [number, number] = [51.24656247477901, 22.56818896613974];
        const felicjaPosition: [number, number] = [51.247171168736564, 22.567942064207706];
        const tereskaPosition: [number, number] = [51.247950906268244, 22.568976048429878];
        const mikolajPosition: [number, number] = [51.2480950579797, 22.569495436535462];
        const leslawPosition: [number, number] = [51.248933089417044, 22.569398748787037];
        const jedrekPosition: [number, number] = [51.250664338462954, 22.571246005022633];
        const esterkaPosition: [number, number] = [51.24977440036177, 22.568681539528534];
        const czesioPosition: [number, number] = [51.249763444579536, 22.567697847998076];
        const jadziaPosition: [number, number] = [51.249199421303686, 22.56774980750171];
        const lutekPosition: [number, number] = [51.247320718707, 22.566295015395315];
        const lukaszPosition: [number, number] = [51.24723917850644, 22.569216369814974];
        const swiatlowidPosition: [number, number] = [51.248653164687454, 22.56858724564385];
        const kazikPosition: [number, number] = [51.247613785140246, 22.566571254497937];
        const onufryPosition: [number, number] = [51.24758231411283, 22.565496626090102];
        const janPosition: [number, number] = [51.24743474857693, 22.56521862696508];
        const maciejPosition: [number, number] = [51.24944018727795, 22.562601181576802];
        const stasPosition: [number, number] = [51.250230891469236, 22.56338742695936];
        const mariannaPosition: [number, number] = [51.25063524425781, 22.563217704301582];
        const lucekPosition: [number, number] = [51.24749626197396, 22.549538118541182];
        const stachPosition: [number, number] = [51.235551969751974, 22.547923716653358];
        const janekJurekPosition: [number, number] = [51.25053793333502, 22.53459778156494];
        const vetekPosition: [number, number] = [51.22578884940558, 22.523430194551537];
        const tomekPosition: [number, number] = [51.25936728188868, 22.56815567611335];
        const marianPosition: [number, number] = [51.24788685631064, 22.567136018996315];
        const wladekPosition: [number, number] = [51.24674179010686, 22.565050213451997];

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

        L.marker(wiktoriaPosition, { icon: customIcon })
            .addTo(map)
            .bindPopup('Kózka Wiktoria');

        L.marker(kryspinPosition, { icon: customIcon })
            .addTo(map)
            .bindPopup('Koziołek Kryspin');

        L.marker(felicjaPosition, { icon: customIcon })
            .addTo(map)
            .bindPopup('Kózka Felicja');

        L.marker(tereskaPosition, { icon: customIcon })
            .addTo(map)
            .bindPopup('Kózka Tereska');

        L.marker(mikolajPosition, { icon: customIcon })
            .addTo(map)
            .bindPopup('Koziołek Mikołaj');

        L.marker(leslawPosition, { icon: customIcon })
            .addTo(map)
            .bindPopup('Koziołek Lesław');

        L.marker(jedrekPosition, { icon: customIcon })
            .addTo(map)
            .bindPopup('Koziołek Jędrek');

        L.marker(esterkaPosition, { icon: customIcon })
            .addTo(map)
            .bindPopup('Kózka Esterka');

        L.marker(czesioPosition, { icon: customIcon })
            .addTo(map)
            .bindPopup('Koziołek Czesio');

        L.marker(jadziaPosition, { icon: customIcon })
            .addTo(map)
            .bindPopup('Kózka Jadzia');

        L.marker(lutekPosition, { icon: customIcon })
            .addTo(map)
            .bindPopup('Koziołek Lutek');

        L.marker(lukaszPosition, { icon: customIcon })
            .addTo(map)
            .bindPopup('Koziołek Łukasz');

        L.marker(swiatlowidPosition, { icon: customIcon })
            .addTo(map)
            .bindPopup('Koziołek Światłowid');

        L.marker(kazikPosition, { icon: customIcon })
            .addTo(map)
            .bindPopup('Koziołek Kazik');

        L.marker(onufryPosition, { icon: customIcon })
            .addTo(map)
            .bindPopup('Koziołek Onufry');

        L.marker(janPosition, { icon: customIcon })
            .addTo(map)
            .bindPopup('Koziołek Jan');

        L.marker(maciejPosition, { icon: customIcon })
            .addTo(map)
            .bindPopup('Koziołek Maciej');

        L.marker(stasPosition, { icon: customIcon })
            .addTo(map)
            .bindPopup('Koziołek Staś');

        L.marker(mariannaPosition, { icon: customIcon })
            .addTo(map)
            .bindPopup('Kózka Marianna');

        L.marker(lucekPosition, { icon: customIcon })
            .addTo(map)
            .bindPopup('Koziołek LuCeK');

        L.marker(stachPosition, { icon: customIcon })
            .addTo(map)
            .bindPopup('Koziołek Stach');

        L.marker(janekJurekPosition, { icon: customIcon })
            .addTo(map)
            .bindPopup('Koziołki Janek i Jurek');

        L.marker(vetekPosition, { icon: customIcon })
            .addTo(map)
            .bindPopup('Koziołek Vetek');

        L.marker(tomekPosition, { icon: customIcon })
            .addTo(map)
            .bindPopup('Koziołek Tomek');

        L.marker(marianPosition, { icon: customIcon })
            .addTo(map)
            .bindPopup('Koziołek Marian');

        L.marker(wladekPosition, { icon: customIcon })
            .addTo(map)
            .bindPopup('Koziołek Władek');



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
