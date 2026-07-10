import {useEffect, useState} from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {AppBar, BottomNavigation, BottomNavigationAction, Box, CssBaseline, IconButton, Toolbar,} from "@mui/material";
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
import CatchScreen from "./components/CatchScreen";
import {useAuth} from "./auth/AuthContext";
import {StatusBar} from "@capacitor/status-bar";
import {Capacitor} from "@capacitor/core";
import {goats} from "./data/goats";
import {Place} from "./data/places";

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

const accessibilityTheme = createTheme({
	palette: {
		primary: {
			main: "#000000",
			light: "#000000",
			dark: "#ffdd00",
			contrastText: "#09b5cb",
		},

		secondary: {
			main: "#09b5cb",
		},

		background: {
			default: "#000000",
			paper: "#000000",
		},

		text: {
			primary: "#ffdd00",
			secondary: "#ffdd00",
		},
	},

	shape: {
		borderRadius: 16,
	},

	components: {
		MuiBottomNavigation: {
			styleOverrides: {
				root: {
					backgroundColor: "#000000",
					borderTop: "1px solid #f0caca",
				},
			},
		},

		MuiBottomNavigationAction: {
			styleOverrides: {
				root: {
					color: "#ffdd00",

					"&.Mui-selected": {
						color: "#09b5cb",
					},
				},
			},
		},

		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					color: "#ffdd00",

					"& .MuiOutlinedInput-notchedOutline": {
						borderColor: "#ffdd00",
						borderWidth: 2,
					},

					"&:hover .MuiOutlinedInput-notchedOutline": {
						borderColor: "#09b5cb",
					},

					"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
						borderColor: "#09b5cb",
						borderWidth: 3,
					},
				},
			},
		},

		MuiInputLabel: {
			styleOverrides: {
				root: {
					color: "#ffdd00",

					"&.Mui-focused": {
						color: "#09b5cb",
					},
				},
			},
		},
	}
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
	const [catchGoat, setCatchGoat] = useState<Goat | null>(null);
	const {points, caughtGoats, addPoints, addGoat} = useAuth();

	const [isAccessibilityMode, setIsAccessibilityMode] = useState(false);

	const activeTheme =
		isAccessibilityMode
			? accessibilityTheme
			: selectedMode === "game"
				? redTheme
				: greenTheme;

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
					<LoginScreen
						onGoToRegister={() => setAuthScreen("register")}
						onAccessibilityClick={() =>
							setIsAccessibilityMode((prev) => !prev)
						}
					/>
				) : (
					<RegisterScreen
						onGoToLogin={() => setAuthScreen("login")}
						onAccessibilityClick={() =>
							setIsAccessibilityMode((prev) => !prev)
						}
					/>
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
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									gap: 3,
									px: 1.5,
									py: 0.5,
									borderRadius: 999,
									bgcolor: "primary.light",
									color: "primary.contrastText",
									fontWeight: "bold",
									fontSize: "1rem",
									minHeight: 32,
								}}
							>
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										gap: 0.75,
									}}
								>
									<GoatHeadIcon style={{width: 20, height: 20}}/>
									<span>{caughtGoats} / {goats.length}</span>
								</Box>

								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										gap: 0.5,
									}}
								>
									<Points style={{width: 18, height: 18}}/>
									<span>{points}</span>
								</Box>
							</Box>
							<IconButton
								edge="end"
								color={isAccessibilityMode ? "secondary" : "inherit"}
								aria-label="accessibility"
								onClick={() => setIsAccessibilityMode((prev) => !prev)}
							>
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
						) : catchGoat ? (
							<CatchScreen
								goat={catchGoat}
								onBack={() => setCatchGoat(null)}
								onCaught={(goat) => {
									goat.isCaught = true;
									addPoints(goat.pointsGuide);
									addGoat(1);
									setCatchGoat(null);
									setSelectedGoat(goat);
								}}
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
										onCatch={(goat) => {
											setCatchGoat(goat);
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
