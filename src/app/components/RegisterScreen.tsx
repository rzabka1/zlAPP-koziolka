import {Box, Paper, Typography, TextField, Button, Card, CardActionArea} from "@mui/material";
import { useState } from "react";
import { useAuth } from "../auth/AuthContext";
import GoatHeadIcon from "../icons/goat-head.svg";
import PolishFlag from "../icons/pl.svg";
import BritishFlag from "../icons/gb.svg";
import {Accessibility} from "@mui/icons-material";

type Props = {
  onGoToLogin: () => void;
};

export default function RegisterScreen({ onGoToLogin }: Props) {
  const { login } = useAuth();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, repeatPassword] = useState("");
  const [language, setLanguage] = useState<"pl" | "en">("pl");

  const handleRegister = () => {
    if (!name.trim() || !password.trim()) return;

    login(name.trim());
  };

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        p: 3,
        bgcolor: "primary.main",
      }}
    >
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                mb: 1,
            }}
        >
            <GoatHeadIcon
                style={{
                    width: 80,
                    height: 80,
                }}
            />
        </Box>
        <Typography variant="h4" textAlign="center" fontWeight="bold">
            złAPP Koziołka!
        </Typography>
      <Paper
        elevation={4}
        sx={{
          width: "100%",
          maxWidth: 400,
          px: 4,
          py: 3,
          borderRadius: 1,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="h4" textAlign="center" fontWeight="bold">
          Utwórz konto
        </Typography>

        <TextField
          label="Nazwa użytkownika"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
        />

        <TextField
          label="Hasło"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
        />

        <TextField
          label="Powtórz hasło"
          type="password"
          value={repeatedPassword}
          onChange={(e) => repeatPassword(e.target.value)}
          fullWidth
        />

        <Button variant="contained" fullWidth onClick={handleRegister}>
          Utwórz konto
        </Button>

        <Button variant="text" onClick={onGoToLogin}>
          Powrót do logowania
        </Button>
      </Paper>
        <Box
            sx={{
                display: "flex",
                gap: 2,
                mb: 1,
            }}
        >
            {[
                { code: 'pl' },
                { code: 'en' },
            ].map((lang) => {
                const selected = language === lang.code;

                return (
                    <Card
                        key={lang.code}
                        elevation={0}
                        sx={{
                            flex: 1,
                            borderRadius: 1,
                            overflow: "hidden",
                            border: "3px solid",
                            borderColor: selected ? "primary.contrastText" : "transparent",
                            bgcolor: selected ? "primary.light" : "primary.main",
                            transition: "all .25s ease",
                            transform: selected ? "translateY(-2px)" : "translateY(0)",
                        }}
                    >
                        <CardActionArea
                            onClick={() => setLanguage(lang.code as "pl" | "en")}
                            sx={{
                                py: 2,
                                px: 3,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Box
                                sx={{
                                    width: "100%",
                                    height: 48,
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                {lang.code === 'pl' ? (
                                    <PolishFlag
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                        }}
                                    />
                                ) : (
                                    <BritishFlag
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                        }}
                                    />
                                )}
                            </Box>
                        </CardActionArea>
                    </Card>
                );
            })}
        </Box>
        <Button
            variant="contained"
            sx={{
                flex: 1,
                width: "100%",
                maxHeight: 50,
                bgcolor: "primary.contrastText",
                "&:hover": { bgcolor: "#000000", color: "#ffde33" },
                borderRadius: 1,
                fontWeight: "bold",
                color: "background.default",
                fontSize: "1.1rem",
                display: "flex",
                alignItems: "center",
                gap: 3,
                px: 0.5,
            }}
        >
            <Accessibility sx={{ fontSize: 32 }} />
            Opcje dostępności
        </Button>
    </Box>
  );
}
