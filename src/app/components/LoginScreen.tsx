import { Box, Paper, Typography, TextField, Button, Link } from "@mui/material";
import GoatHeadIcon from "../icons/goat-head.svg";
import { useAuth } from "../auth/AuthContext";
import { useState } from "react";

type Props = {
  onGoToRegister: () => void;
};

export default function LoginScreen({ onGoToRegister }: Props) {
  const { login } = useAuth();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

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
          gap: 3,
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
              width: 100,
              height: 100,
            }}
          />
        </Box>
        <Typography variant="h5" textAlign="center" fontWeight="bold">
          złAPP Koziołka!
        </Typography>

        <Typography
          variant="body2"
          textAlign="center"
          color="text.secondary"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 0.5,
          }}
        >
          Zaloguj się lub
          <Link
            component="button"
            variant="inherit"
            onClick={onGoToRegister}
            underline="always"
          >
            utwórz konto
          </Link>
        </Typography>

        <TextField
          label="Nazwa użytkownika"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          label="Hasło"
          type="password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          variant="contained"
          size="large"
          fullWidth
          sx={{
            mt: 1,
            height: 48,
            fontWeight: "bold",
          }}
          onClick={() => {
            if (name.trim()) {
              login(name.trim());
            }
          }}
        >
          Zaloguj się
        </Button>
      </Paper>
    </Box>
  );
}
