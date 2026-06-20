import {useEffect, useState} from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {
	AppBar,
	BottomNavigation,
	BottomNavigationAction,
	Box,
	Chip,
	CssBaseline,
	IconButton,
	Toolbar,
} from "@mui/material";
import {Accessibility, Map, People, QuestionMark, Settings,} from "@mui/icons-material";
import Points from "./icons/points.svg";
import Goat from "./icons/goat.svg";
import GoatHeadIcon from "./icons/goat-head.svg";
import LoginScreen from "./components/LoginScreen";
import RegisterScreen from "./components/RegisterScreen";
import ModeSelectScreen from "./components/ModeSelectScreen";
import MapScreen from "./components/MapScreen";
import HintScreen from "./components/HintScreen";
import GalleryScreen from "./components/GalleryScreen";
import LeaderboardScreen from "./components/LeaderboardScreen";
import SettingsScreen from "./components/SettingsScreen";
import GoatDescriptionScreen from "./components/GoatDescriptionScreen";
import GoatPreviewCard from "./components/GoatPreviewCard";
import PlaceDescriptionScreen from "./components/PlaceDescriptionScreen";
import {useAuth} from "./auth/AuthContext";
import {StatusBar} from "@capacitor/status-bar";
import {Capacitor} from "@capacitor/core";
import {goats} from "./data/goats";

const greenTheme = createTheme({
	palette: {
		primary: {
			main: "#81c784",
			light: "#a5d6a7",
			dark: "#66bb6a",
			contrastText: "#1b5e20",
		},
		secondary: {
			main: "#d34a00",
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
			main: "#e57373",
			light: "#ffbcbc",
			dark: "#d74646",
			contrastText: "#570021",
		},

		secondary: {
			main: "#b20000",
		},

		background: {
			default: "#fff5f5",
			paper: "#ffffff",
		},

		text: {
			primary: "#4a1c1c",
			secondary: "#8b3a3a",
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
					borderTop: "1px solid #f0caca",
				},
			},
		},

		MuiBottomNavigationAction: {
			styleOverrides: {
				root: {
					color: "#e57373",

					"&.Mui-selected": {
						color: "#c62828",
					},
				},
			},
		},
	},
});

export default function App(props: any) {
	const {isAuthenticated} = useAuth();
	type AuthScreen = "login" | "register";
	const [authScreen, setAuthScreen] = useState<AuthScreen>("login");
	const [modeSelected, setModeSelected] = useState(false);
	const [selectedMode, setSelectedMode] = useState<"guide" | "game" | null>(
		null,
	);
	type MapMode = "map" | "hint";
	const [mapMode, setMapMode] = useState<MapMode>("map");
	const [currentTab, setCurrentTab] = useState<
		"map" | "gallery" | "leaderboard" | "settings"
	>("map");
	const [hintIndex, setHintIndex] = useState(0);
	const goToNextGoat = () => {
		setHintIndex((prev) => (prev + 1) % goats.length);
	};
	const goToPreviousGoat = () => {
		setHintIndex((prev) => (prev - 1 + goats.length) % goats.length);
	};
	const [selectedGoat, setSelectedGoat] = useState<Goat | null>(null);
	const [previewGoat, setPreviewGoat] = useState<Goat | null>(null);
	const {points} = useAuth();
	const activeTheme = selectedMode === "game" ? redTheme : greenTheme;

	const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

	useEffect(() => {
		if (Capacitor.isNativePlatform()) {
			StatusBar.hide().catch(console.error);
		}
	}, []);

	useEffect(() => {
		if (selectedMode === "game") {
			setMapMode("hint");
			setHintIndex(0);
		} else {
			setMapMode("map");
		}
	}, [selectedMode]);

	useEffect(() => {
		setPreviewGoat(null);
		setSelectedGoat(null);
	}, [currentTab, selectedMode]);

	if (!isAuthenticated) {
		return (
			<ThemeProvider theme={activeTheme}>
				<CssBaseline/>

				{authScreen === "login" ? (
					<LoginScreen onGoToRegister={() => setAuthScreen("register")}/>
				) : (
					<RegisterScreen onGoToLogin={() => setAuthScreen("login")}/>
				)}
			</ThemeProvider>
		);
	}

	if (!modeSelected) {
		return (
			<ThemeProvider theme={activeTheme}>
				<CssBaseline/>
				<ModeSelectScreen
					onPreviewMode={(mode) => setSelectedMode(mode)}
					onSelectMode={(mode) => {
						setSelectedMode(mode);
						setModeSelected(true);
					}}
				/>
			</ThemeProvider>
		);
	}

	return (
		<div {...props} style={{height: "100%", width: "100%"}}>
			<ThemeProvider theme={activeTheme}>
				<CssBaseline/>
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
						sx={{bgcolor: "primary.main"}}
					>
						<Toolbar
							sx={{justifyContent: "space-between", minHeight: "56px"}}
						>
							<IconButton edge="start" color="inherit">
								<QuestionMark/>
							</IconButton>
							<Chip
								icon={<Points style={{width: "15"}}/>}
								label={`${points}`}
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
								<Accessibility/>
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
						) : selectedPlace ? (
							<PlaceDescriptionScreen
								place={selectedPlace}
								onBack={() => setSelectedPlace(null)}
							/>
						) : (
							<>
								{currentTab === "map" &&
									(mapMode === "map" ? (
										<MapScreen
											onGoatClick={(goat) => {
												setPreviewGoat(goat);
											}}
											onMapClick={() => setPreviewGoat(null)}
											onPlaceClick={(place) => setSelectedPlace(place)}
										/>
									) : (
										<HintScreen
											goatIndex={hintIndex}
											onPrevious={goToPreviousGoat}
											onNext={goToNextGoat}
										/>
									))}

								{currentTab === "gallery" && (
									<GalleryScreen
										onGoatClick={(goat) => {
											setSelectedGoat(goat);
										}}
									/>
								)}
								{currentTab === "leaderboard" && <LeaderboardScreen/>}
								{currentTab === "settings" && <SettingsScreen/>}

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
						<BottomNavigationAction value={"map"} icon={<Map/>}/>
						<BottomNavigationAction
							value={"gallery"}
							icon={<GoatHeadIcon style={{width: "22"}}/>}
						/>
						<BottomNavigationAction value={"leaderboard"} icon={<People/>}/>
						<BottomNavigationAction value={"settings"} icon={<Settings/>}/>
					</BottomNavigation>
				</Box>
			</ThemeProvider>
		</div>
	);
}
