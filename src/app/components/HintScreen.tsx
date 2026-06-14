import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  IconButton,
} from "@mui/material";
import {
  ArrowBackIos,
  ArrowForwardIos,
  CenterFocusWeak,
} from "@mui/icons-material";
import Points from "../icons/points.svg";
import { goats } from "../data/goats";
import { useState } from "react";

type Props = {
    goatIndex: number;
    onPrevious: () => void;
    onNext: () => void;
};

export default function HintScreen({ goatIndex, onPrevious, onNext }: Props) {
    const [hintUnlocked, setHintUnlocked] = useState(false);
    const goat = goats[goatIndex];
    const cost = hintUnlocked ? 4 : 2;
    const displayedPoints = goat.pointsGame - (hintUnlocked ? 2 : 0);

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        p: 2,
        bgcolor: "primary.light",
        gap: 2,
      }}
    >
      {/* TOP BAR */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <IconButton onClick={onPrevious}>
          <ArrowBackIos />
        </IconButton>

        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
            }}>

            <Typography variant="h5" sx={{ fontWeight: 700, textAlign: "center" }}>
                {goat.name}
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                    bgcolor: "background.default",
                    borderRadius: 0.4,
                    p: 0.75,
                    color: "primary.contrastText",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    height: 28,
                    minWidth: 50,
                }}
            >
                <Points style={{ width: 15 }} />
                <Typography>{displayedPoints}</Typography>
            </Box>

        </Box>

        <IconButton onClick={onNext}>
          <ArrowForwardIos />
        </IconButton>
      </Box>

      {/* IMAGE */}
      <Card
        sx={{
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <CardMedia
          component="img"
          image={goat.photo}
          alt={goat.name}
          sx={{ height: 220, objectFit: "cover" }}
        />
      </Card>

      {/* HINT */}
        <Typography
            variant="body1"
            color="text.primary"
            sx={{
                fontSize: "large",
                overflowY: "auto",
                maxHeight: 250,
            }}
        >
            {goat.hint}
            {hintUnlocked && (
                <Box sx={{ mt: 2, }}>
                    <Typography>
                        PODPOWIEDŹ:
                    </Typography>

                    <Typography sx={{ mt: 1 }}>
                        {goat.additionalHint}
                    </Typography>
                </Box>
            )}
        </Typography>

      {/* SPACER */}
      <Box sx={{ flex: 1 }} />

      {/* BOTTOM CTA */}
      <Button
        variant="outlined"
        fullWidth
        onClick={() => setHintUnlocked(true)}
        sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
          height: 52,
          borderRadius: 2,
          borderColor: "primary.contrastText",
          color: "primary.contrastText",
          fontWeight: 600,
        }}
      >
          {hintUnlocked ? "Pokaż na mapie" : "Podpowiedź"}

          <Box
              sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 0.75,
                  borderRadius: 0.4,
                  p: 0.75,
                  color: "secondary.main",
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  height: 28,
                  minWidth: 50,
              }}
          >
              <Typography fontWeight={"bold"}>–</Typography>
              <Points style={{ width: 18 }} />
              <Typography>{cost}</Typography>
          </Box>
      </Button>
      <Button
        variant="contained"
        fullWidth
        startIcon={<CenterFocusWeak />}
        sx={{
          height: 52,
          borderRadius: 2,
          fontWeight: 800,
          fontSize: "1.2rem",
          bgcolor: "primary.dark",
          "&:hover": { bgcolor: "text.secondary", color: "primary.light" },
        }}
      >
        Złap!
      </Button>
    </Box>
  );
}
