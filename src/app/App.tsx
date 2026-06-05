import { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  BottomNavigation,
  BottomNavigationAction,
  AppBar,
  Toolbar,
  IconButton,
  Chip,
  Box,
  CssBaseline,
} from "@mui/material";
import {
  Map,
  People,
  Settings,
  Sync,
  Accessibility,
} from "@mui/icons-material";
import Points from "./icons/points.svg";
import Goat from "./icons/goat.svg";
import MapScreen from "./components/MapScreen";
import GalleryScreen from "./components/GalleryScreen";
import LeaderboardScreen from "./components/LeaderboardScreen";
import SettingsScreen from "./components/SettingsScreen";
import GoatDescriptionScreen from "./components/GoatDescriptionScreen";
import GoatPreviewCard from "./components/GoatPreviewCard";
import { StatusBar } from "@capacitor/status-bar";
import { Capacitor } from "@capacitor/core";

const greenTheme = createTheme({
  palette: {
    primary: {
      main: "#81c784",
      light: "#a5d6a7",
      dark: "#66bb6a",
      contrastText: "#1b5e20",
    },
    background: {
      default: "#f1f8f4",
      paper: "#ffffff",
    },
    text: {
      primary: "#1b5e20",
      secondary: "#4caf50",
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          borderTop: "1px solid #c8e6c9",
        },
      },
    },

    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          color: "#81c784",

          "& svg": {
            color: "inherit",
            fill: "currentColor",
            // stroke: 'currentColor',
          },

          "&.Mui-selected": {
            color: "#2e7d32",
          },
        },
      },
    },
  },
});

const redTheme = createTheme({
  palette: {
    primary: {
      main: "#c78181",
      light: "#d6a5a5",
      dark: "#bb6666",
      contrastText: "#5e1b1b",
    },
    background: {
      default: "#f1f8f4",
      paper: "#ffffff",
    },
    text: {
      primary: "#5e1b1b",
      secondary: "#af4c4c",
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          borderTop: "1px solid #c8e6c9",
        },
      },
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          color: "#c78181",
          "&.Mui-selected": {
            color: "#7d2e2e",
          },
        },
      },
    },
  },
});

export default function App(props: any) {
  const [currentTab, setCurrentTab] = useState<
    "map" | "gallery" | "leaderboard" | "settings"
  >("map");
  const [selectedGoat, setSelectedGoat] = useState<Goat | null>(null);
  const [previewGoat, setPreviewGoat] = useState<Goat | null>(null);
  const [counter, setCounter] = useState(20);

  useEffect(() => {
    if (Capacitor.isNativePlatform()) {
      StatusBar.hide().catch(console.error);
    }
  }, []);

  return (
    <div {...props} style={{ height: "100%", width: "100%" }}>
      <ThemeProvider theme={greenTheme}>
        <CssBaseline />
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            bgcolor: "background.default",
            maxWidth: "100vw",
            overflow: "hidden",
          }}
        >
          <AppBar
            position="static"
            elevation={0}
            sx={{ bgcolor: "primary.main" }}
          >
            <Toolbar
              sx={{ justifyContent: "space-between", minHeight: "56px" }}
            >
              <IconButton edge="start" color="inherit" aria-label="sync">
                <Sync />
              </IconButton>
              <Chip
                icon={<Points style={{ width: "15" }} />}
                label={counter}
                sx={{
                  bgcolor: "primary.light",
                  color: "primary.contrastText",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  height: "32px",
                  minWidth: "70px",
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
              overflow: "auto",
              position: "relative",
            }}
          >
            {selectedGoat ? (
              <GoatDescriptionScreen
                goat={selectedGoat}
                onBack={() => setSelectedGoat(null)}
              />
            ) : (
              <>
                {currentTab === "map" && (
                  <MapScreen
                    onGoatClick={(goat) => {
                      setPreviewGoat(goat);
                    }}
                    onMapClick={() => setPreviewGoat(null)}
                  />
                )}

                {currentTab === "gallery" && <GalleryScreen />}
                {currentTab === "leaderboard" && <LeaderboardScreen />}
                {currentTab === "settings" && <SettingsScreen />}

                {previewGoat && (
                  <GoatPreviewCard
                    goat={previewGoat}
                    onOpen={() => {
                      setSelectedGoat(previewGoat);
                      setPreviewGoat(null);
                    }}
                  />
                )}
              </>
            )}
          </Box>

          <BottomNavigation
            value={currentTab}
            onChange={(event, newValue) => {
              setCurrentTab(newValue);
              setPreviewGoat(null);
              setSelectedGoat(null);
            }}
            showLabels={false}
            sx={{
              position: "sticky",
              bottom: 0,
              width: "100%",
              boxShadow: "0 -2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <BottomNavigationAction value={"map"} icon={<Map />} />
            <BottomNavigationAction
              value={"gallery"}
              icon={<Goat style={{ width: "24" }} />}
            />
            <BottomNavigationAction value={"leaderboard"} icon={<People />} />
            <BottomNavigationAction value={"settings"} icon={<Settings />} />
          </BottomNavigation>
        </Box>
      </ThemeProvider>
    </div>
  );
}
