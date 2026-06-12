// HintScreen.tsx
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

type Props = {
  goat: {
    name: string;
    photo: string;
    hint: string;
  };
  onPrevious: () => void;
  onNext: () => void;
};

export default function HintScreen({ goat, onPrevious, onNext }: Props) {
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

        <Typography variant="h5" sx={{ fontWeight: 700, textAlign: "center" }}>
          {goat.name}
        </Typography>

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
      </Typography>

      {/* SPACER */}
      <Box sx={{ flex: 1 }} />

      {/* BOTTOM CTA */}
      <Button
        variant="outlined"
        fullWidth
        sx={{
          borderRadius: 2,
          borderColor: "primary.contrastText",
          color: "primary.contrastText",
          fontWeight: 600,
        }}
      >
        Podpowiedź
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
