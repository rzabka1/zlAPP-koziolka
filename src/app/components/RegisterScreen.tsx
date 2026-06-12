import { Box, Paper, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";
import { useAuth } from "../auth/AuthContext";

type Props = {
  onGoToLogin: () => void;
};

export default function RegisterScreen({ onGoToLogin }: Props) {
  const { login } = useAuth();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, repeatPassword] = useState("");

  const handleRegister = () => {
    if (!name.trim() || !password.trim()) return;

    // no backend → just "log in" immediately
    login(name.trim());
  };

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 3,
        bgcolor: "primary.main",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: "100%",
          maxWidth: 400,
          p: 4,
          borderRadius: 1,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="h5" textAlign="center" fontWeight="bold">
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
    </Box>
  );
}
