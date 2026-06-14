import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Switch,
  Typography,
} from "@mui/material";
import {DeleteForever, Help, Info, Language, Logout, Notifications, Sync,} from "@mui/icons-material";
import {useState} from "react";

export default function SettingsScreen() {
	const [notifications, setNotifications] = useState(true);
	const [darkMode, setDarkMode] = useState(false);

	return (
		<Box
			sx={{
				height: "100%",
				overflow: "auto",
				bgcolor: "background.default",
				p: 2,
			}}
		>
			<Typography variant="h5" color="text.primary" sx={{mb: 2, px: 1}}>
				Ustawienia
			</Typography>

			<Paper elevation={1} sx={{mb: 2, borderRadius: 2, overflow: "hidden"}}>
				<List sx={{py: 0}}>
					<ListItem key="notifications">
						<ListItemIcon>
							<Notifications sx={{color: "primary.dark"}}/>
						</ListItemIcon>
						<ListItemText
							primary="Powiadomienia"
							secondary="Zezwól aplikacji na wysyłanie powiadomień"
						/>
						<Switch
							edge="end"
							checked={notifications}
							onChange={(e) => setNotifications(e.target.checked)}
							sx={{
								"& .MuiSwitch-switchBase.Mui-checked": {
									color: "primary.dark",
								},
								"& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
									backgroundColor: "primary.main",
								},
							}}
						/>
					</ListItem>
					<Divider key="divider-1"/>
					<ListItem key="mode" disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<Sync sx={{color: "primary.dark"}}/>
							</ListItemIcon>
							<ListItemText
								primary="Zmień tryb"
								secondary="To spowoduje reset Twoich postępów i rozpocznie grę od nowa"
							/>
						</ListItemButton>
					</ListItem>
				</List>
			</Paper>

			<Paper elevation={1} sx={{mb: 2, borderRadius: 2, overflow: "hidden"}}>
				<List sx={{py: 0}}>
					<ListItem key="language" disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<Language sx={{color: "primary.dark"}}/>
							</ListItemIcon>
							<ListItemText primary="Język" secondary="Polski"/>
						</ListItemButton>
					</ListItem>
					<Divider key="divider-2"/>
					<ListItem key="help" disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<Help sx={{color: "primary.dark"}}/>
							</ListItemIcon>
							<ListItemText
								primary="Pomoc"
								secondary="Uzyskaj pomoc"
							/>
						</ListItemButton>
					</ListItem>
					<Divider key="divider-3"/>
					<ListItem key="about" disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<Info sx={{color: "primary.dark"}}/>
							</ListItemIcon>
							<ListItemText primary="O aplikacji" secondary="Wersja 1.0.0"/>
						</ListItemButton>
					</ListItem>
				</List>
			</Paper>

			<Paper elevation={1} sx={{borderRadius: 2, overflow: "hidden"}}>
				<List sx={{py: 0}}>
					<ListItem key="logout" disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<Logout sx={{color: "primary.dark"}}/>
							</ListItemIcon>
							<ListItemText primary="Wyloguj"/>
						</ListItemButton>
					</ListItem>
					<Divider key="divider-4"/>
					<ListItem key="delete" disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<DeleteForever sx={{color: "primary.dark"}}/>
							</ListItemIcon>
							<ListItemText
								primary="Usuń konto"
							/>
						</ListItemButton>
					</ListItem>
				</List>
			</Paper>
		</Box>
	);
}