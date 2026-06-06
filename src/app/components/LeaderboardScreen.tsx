import { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Button,
  Divider,
  Chip,
} from "@mui/material";
import { EmojiEvents, Leaderboard, Chat } from "@mui/icons-material";
import Points from "../icons/points.svg";

const mockFriends = [
  { id: 1, name: "Imię Nazwisko", points: 28, avatar: "XX" },
  { id: 2, name: "Imię Nazwisko", points: 26, avatar: "XX" },
  { id: 3, name: "Imię Nazwisko", points: 21, avatar: "XX" },
  { id: 4, name: "Imię Nazwisko", points: 18, avatar: "XX" },
  { id: 5, name: "Imię Nazwisko", points: 14, avatar: "XX" },
];

const mockLeaderboard = [
  { id: 1, name: "Imię Nazwisko", points: 52, rank: 1, avatar: "XX" },
  { id: 2, name: "Imię Nazwisko", points: 48, rank: 2, avatar: "XX" },
  { id: 3, name: "Imię Nazwisko", points: 45, rank: 3, avatar: "XX" },
  { id: 4, name: "Imię Nazwisko", points: 41, rank: 4, avatar: "XX" },
  { id: 5, name: "Imię Nazwisko", points: 38, rank: 5, avatar: "XX" },
  { id: 6, name: "Imię Nazwisko", points: 36, rank: 6, avatar: "XX" },
];

export default function LeaderboardScreen() {
  const [currentTab, setCurrentTab] = useState(0);
  const userPoints = 20;
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
            bgcolor: "#primary.dark",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        ></Avatar>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" color="text.primary">
            Twój Profil
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mt: 1, alignItems: "center" }}>
            <Chip
              icon={<Points style={{ width: "12" }} />}
              label={`${userPoints}`}
              size="small"
              sx={{ bgcolor: "#fff3e0", color: "#e65100", fontWeight: "bold" }}
            />
            <Chip
              icon={<Leaderboard sx={{ color: "#ffa726 !important" }} />}
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
      <Box sx={{ borderBottom: 1, borderColor: "divider", px: 2 }}>
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
          <Tab label="Znajomi" />
          <Tab label="Leaderboard" />
        </Tabs>
      </Box>

      {/* Tab Content */}
      <Box sx={{ flex: 1, overflow: "auto", p: 2 }}>
        {currentTab === 0 ? (
          <Box>
            <Button
              variant="contained"
              startIcon={<Chat />}
              fullWidth
              sx={{
                mb: 2,
                bgcolor: "#primary.dark",
                "&:hover": { bgcolor: "text.secondary" },
                borderRadius: 2,
                py: 1.5,
                fontWeight: "bold",
              }}
            >
              Czat
            </Button>
            <Paper elevation={1} sx={{ borderRadius: 2, overflow: "hidden" }}>
              <List sx={{ py: 0 }}>
                {mockLeaderboard.map((user, index) => (
                  <Box key={user.id}>
                    {index > 0 && <Divider />}
                    <ListItem
                      sx={{
                        py: 1.5,
                        bgcolor:
                          user.rank <= 3 ? "background.default" : "transparent",
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
                            bgcolor:
                              user.rank <= 3
                                ? "#primary.dark"
                                : "primary.light",
                            fontWeight: "bold",
                          }}
                        >
                          {user.avatar}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={user.name}
                        secondary={`${user.points} punktów`}
                        primaryTypographyProps={{ fontWeight: "medium" }}
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
          <Paper elevation={1} sx={{ borderRadius: 2, overflow: "hidden" }}>
            <List sx={{ py: 0 }}>
              {mockLeaderboard.map((user, index) => (
                <Box key={user.id}>
                  {index > 0 && <Divider />}
                  <ListItem
                    sx={{
                      py: 1.5,
                      bgcolor:
                        user.rank <= 3 ? "#background.default" : "transparent",
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
                          bgcolor:
                            user.rank <= 3 ? "#primary.dark" : "#primary.light",
                          fontWeight: "bold",
                        }}
                      >
                        {user.avatar}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={user.name}
                      secondary={`${user.points} punktów`}
                      primaryTypographyProps={{ fontWeight: "medium" }}
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
