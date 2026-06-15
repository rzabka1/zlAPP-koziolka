import {useState} from "react";
import {
    Avatar,
    Box,
    Button,
    Chip,
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Paper,
    Tab,
    Tabs,
    Typography,
} from "@mui/material";
import {EmojiEvents, GroupAdd, Leaderboard} from "@mui/icons-material";
import Points from "../icons/points.svg";
import {useAuth} from "../auth/AuthContext";

const mockFriends = [
	{id: 1, name: "kacper-bednarczuk", points: 22, rank: 1, avatar: "KB"},
	{id: 2, name: "juleXbizuteria", points: 16, rank: 2, avatar: "JB"},
	// {id: 3, name: "ZbychuGaming", points: 21, rank: 3, avatar: "ZG"},
	{id: 3, name: "JuliaT", points: 10, rank: 3, avatar: "JT"},
	{id: 4, name: "jan.pawel", points: 8, rank: 4, avatar: "JP"},
	{id: 5, name: "szczuras", points: 2, rank: 5, avatar: "SZ"},
];

const mockLeaderboard = [
	{id: 1, name: "GOAT", points: 52, rank: 1, avatar: "GO"},
	{id: 2, name: "PanMirek", points: 48, rank: 2, avatar: "PM"},
	{id: 3, name: "Agnieszka79", points: 45, rank: 3, avatar: "AG"},
	{id: 4, name: "jaroPL", points: 41, rank: 4, avatar: "PL"},
	{id: 5, name: "Kowalscy", points: 38, rank: 5, avatar: "KO"},
	{id: 6, name: "maciejunio", points: 36, rank: 6, avatar: "MA"},
];

export default function LeaderboardScreen() {
	const [currentTab, setCurrentTab] = useState(0);
	const {userName, points} = useAuth();
	const userRank = 47;

	return (
		<Box
			sx={{
				height: "100%",
				display: "flex",
				flexDirection: "column",
				bgcolor: "background.default",
			}}
		>
			{/* User Profile Section */}
			<Paper
				elevation={2}
				sx={{
					p: 3,
					m: 2,
					borderRadius: 3,
					bgcolor: "white",
					display: "flex",
					alignItems: "center",
					gap: 2,
				}}
			>
				<Avatar
					sx={{
						width: 64,
						height: 64,
						bgcolor: "#828282",
						fontSize: "1.5rem",
						fontWeight: "bold",
					}}
				></Avatar>
				<Box sx={{flex: 1}}>
					<Typography variant="h6" color="text.primary">
						{userName}
					</Typography>
					<Typography variant="subtitle2" color="text.secondary">
						Kod: 67692137
					</Typography>
					<Box sx={{display: "flex", gap: 2, mt: 1, alignItems: "center"}}>
						<Chip
							icon={<Points style={{width: "12"}}/>}
							label={`${points}`}
							size="small"
							sx={{bgcolor: "#fff3e0", color: "#e65100", fontWeight: "bold"}}
						/>
						<Chip
							icon={<Leaderboard sx={{color: "#ffa726 !important"}}/>}
							label={`${userRank}`}
							size="small"
							sx={{
								bgcolor: "background.paper",
								color: "#00a9e6",
								fontWeight: "bold",
							}}
						/>
					</Box>
				</Box>
			</Paper>

			{/* Tabs */}
			<Box sx={{borderBottom: 1, borderColor: "divider", px: 2}}>
				<Tabs
					value={currentTab}
					onChange={(e, newValue) => setCurrentTab(newValue)}
					sx={{
						"& .MuiTab-root": {
							color: "#primary.main",
							fontWeight: "bold",
						},
						"& .Mui-selected": {
							color: "#primary.contrastText",
						},
					}}
				>
					<Tab label="Znajomi"/>
					<Tab label="Leaderboard"/>
				</Tabs>
			</Box>

			{/* Tab Content */}
			<Box sx={{flex: 1, overflow: "auto", p: 2}}>
				{currentTab === 0 ? (
					<Box>
						<Button
							variant="contained"
							startIcon={<GroupAdd/>}
							fullWidth
							sx={{
								mb: 2,
								bgcolor: "#primary.dark",
								"&:hover": {bgcolor: "text.secondary"},
								borderRadius: 2,
								py: 1.5,
								fontWeight: "bold",
							}}
						>
							Dodaj znajomego
						</Button>
						<Paper elevation={1} sx={{borderRadius: 2, overflow: "hidden"}}>
							<List sx={{py: 0}}>
								{mockFriends.map((user, index) => (
									<Box key={user.id}>
										{index > 0 && <Divider/>}
										<ListItem
											sx={{
												py: 1.5,
												bgcolor:
													user.name === userName
														? "#cfedff"
														: user.rank <= 3
															? "transparent"
															: "background.default",
											}}
										>
											<Box
												sx={{
													minWidth: 40,
													display: "flex",
													alignItems: "center",
													justifyContent: "center",
												}}
											>
												<Typography
													variant="h6"
													sx={{
														fontWeight: "bold",
														color:
															user.rank === 1
																? "#ffa726"
																: user.rank === 2
																	? "#bdbdbd"
																	: user.rank === 3
																		? "#a1887f"
																		: "#primary.main",
													}}
												>
													{user.rank}
												</Typography>
											</Box>
											<ListItemAvatar>
												<Avatar
													sx={{
														bgcolor: "#828282",
														fontWeight: "bold",
													}}
												>
												</Avatar>
											</ListItemAvatar>
											<ListItemText
												primary={user.name}
												secondary={`${user.points} punktów`}
												primaryTypographyProps={{fontWeight: "medium"}}
											/>
											{user.rank <= 3 && (
												<EmojiEvents
													sx={{
														color:
															user.rank === 1
																? "#ffa726"
																: user.rank === 2
																	? "#bdbdbd"
																	: "#a1887f",
														fontSize: 24,
													}}
												/>
											)}
										</ListItem>
									</Box>
								))}
							</List>
						</Paper>
					</Box>
				) : (
					<Paper elevation={1} sx={{borderRadius: 2, overflow: "hidden"}}>
						<List sx={{py: 0}}>
							{mockLeaderboard.map((user, index) => (
								<Box key={user.id}>
									{index > 0 && <Divider/>}
									<ListItem
										sx={{
											py: 1.5,
											bgcolor:
												user.name === userName
													? "#cfedff"
													: user.rank <= 3
														? "transparent"
														: "background.default",
										}}
									>
										<Box
											sx={{
												minWidth: 40,
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
											}}
										>
											<Typography
												variant="h6"
												sx={{
													fontWeight: "bold",
													color:
														user.rank === 1
															? "#ffa726"
															: user.rank === 2
																? "#bdbdbd"
																: user.rank === 3
																	? "#a1887f"
																	: "#primary.main",
												}}
											>
												{user.rank}
											</Typography>
										</Box>
										<ListItemAvatar>
											<Avatar
												sx={{
													bgcolor: "#828282",
													fontWeight: "bold",
												}}
											>
											</Avatar>
										</ListItemAvatar>
										<ListItemText
											primary={user.name}
											secondary={`${user.points} punktów`}
											primaryTypographyProps={{fontWeight: "medium"}}
										/>
										{user.rank <= 3 && (
											<EmojiEvents
												sx={{
													color:
														user.rank === 1
															? "#ffa726"
															: user.rank === 2
																? "#bdbdbd"
																: "#a1887f",
													fontSize: 24,
												}}
											/>
										)}
									</ListItem>
								</Box>
							))}
						</List>
					</Paper>
				)}
			</Box>
		</Box>
	);
}
