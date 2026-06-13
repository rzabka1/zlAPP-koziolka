import {
    Box,
    Paper,
    Typography,
    TextField,
    Button,
    Link,
    Card,
    CardActionArea,
    IconButton,
} from "@mui/material";
import GoatHeadIcon from "../icons/goat-head.svg";
import PolishFlag from '../icons/pl.svg';
import BritishFlag from '../icons/gb.svg';
import { useAuth } from "../auth/AuthContext";
import { useState } from "react";
import {Accessibility, CenterFocusWeak} from "@mui/icons-material";

type Props = {
  onGoToRegister: () => void;
};

export default function LoginScreen({ onGoToRegister }: Props) {
  const { login } = useAuth();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [language, setLanguage] = useState<"pl" | "en">("pl");

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
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
          p: 4,
          borderRadius: 1,
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >

        <Typography
          variant="body1"
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
                          height: 64,
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
