import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BottomNavigation, BottomNavigationAction, AppBar, Toolbar, IconButton, Chip, Box, CssBaseline } from '@mui/material';
import { Map, Stars, People, Settings, Sync, Accessibility } from '@mui/icons-material';
import Points from './icons/points.svg';
import MapScreen from './components/MapScreen';
import GalleryScreen from './components/GalleryScreen';
import LeaderboardScreen from './components/LeaderboardScreen';
import SettingsScreen from './components/SettingsScreen';

const theme = createTheme({
    palette: {
        primary: {
            main: '#81c784',
            light: '#a5d6a7',
            dark: '#66bb6a',
            contrastText: '#1b5e20',
        },
        background: {
            default: '#f1f8f4',
            paper: '#ffffff',
        },
        text: {
            primary: '#1b5e20',
            secondary: '#4caf50',
        },
    },
    shape: {
        borderRadius: 16,
    },
    components: {
        MuiBottomNavigation: {
            styleOverrides: {
                root: {
                    backgroundColor: '#ffffff',
                    borderTop: '1px solid #c8e6c9',
                },
            },
        },
        MuiBottomNavigationAction: {
            styleOverrides: {
                root: {
                    color: '#81c784',
                    '&.Mui-selected': {
                        color: '#2e7d32',
                    },
                },
            },
        },
    },
});

export default function App(props: any) {
    const [currentTab, setCurrentTab] = useState(0);
    const [counter, setCounter] = useState(20);

    const screens = [
        <MapScreen key="map" />,
        <GalleryScreen key="gallery" />,
        <LeaderboardScreen key="empty" />,
        <SettingsScreen key="settings" />,
    ];

    return (
        <div {...props} style={{ height: '100%', width: '100%' }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Box
                    sx={{
                        height: '100vh',
                        display: 'flex',
                        flexDirection: 'column',
                        bgcolor: 'background.default',
                        maxWidth: '100vw',
                        overflow: 'hidden',
                    }}
                >
                    <AppBar position="static" elevation={0} sx={{ bgcolor: 'primary.main' }}>
                        <Toolbar sx={{ justifyContent: 'space-between', minHeight: '56px' }}>
                            <IconButton edge="start" color="inherit" aria-label="sync">
                                <Sync />
                            </IconButton>
                            <Chip
                                icon={<Points style={{width: '15'}} />}
                                label={counter}
                                sx={{
                                    bgcolor: 'primary.light',
                                    color: 'primary.contrastText',
                                    fontWeight: 'bold',
                                    fontSize: '1rem',
                                    height: '32px',
                                    minWidth: '70px',
                                }}
                            />
                            <IconButton edge="end" color="inherit" aria-label="accessibility">
                                <Accessibility />
                            </IconButton>
                        </Toolbar>
                    </AppBar>

                    <Box
                        sx={{
                            flex: 1,
                            overflow: 'auto',
                            position: 'relative',
                        }}
                    >
                        {screens[currentTab]}
                    </Box>

                    <BottomNavigation
                        value={currentTab}
                        onChange={(event, newValue) => {
                            setCurrentTab(newValue);
                        }}
                        showLabels={false}
                        sx={{
                            position: 'sticky',
                            bottom: 0,
                            width: '100%',
                            boxShadow: '0 -2px 8px rgba(0,0,0,0.1)',
                        }}
                    >
                        <BottomNavigationAction icon={<Map />} />
                        <BottomNavigationAction icon={<Stars />} />
                        <BottomNavigationAction icon={<People />} />
                        <BottomNavigationAction icon={<Settings />} />
                    </BottomNavigation>
                </Box>
            </ThemeProvider>
        </div>
    );
}