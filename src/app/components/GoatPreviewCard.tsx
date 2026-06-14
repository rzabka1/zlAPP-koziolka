import { Paper, Typography, Box, Button, Chip } from "@mui/material";
import { Goat } from "../data/goats";
import { CenterFocusWeak, CallSplit, PlayArrow } from "@mui/icons-material";
import Points from "../icons/points.svg";

interface Props {
  goat: Goat;
  onOpen: () => void;
}

export default function GoatPreviewCard({ goat, onOpen }: Props) {
  return (
    <Paper
      elevation={8}
      onClick={onOpen}
      sx={{
        position: "absolute",
        left: 16,
        right: 16,
        bottom: 16,

        height: "clamp(120px, 25vh, 240px)",
        minHeight: 120,
        maxHeight: 260,

        p: 2,
        borderRadius: 1,
        cursor: "pointer",
        zIndex: 2000,

        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          mb: 1,
        }}
      >
        <Typography variant="h5">{goat.name}</Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            mt: 0.5,
            bgcolor: "primary.light",
            borderRadius: 0.4,
            p: 0.75,
            color: "primary.contrastText",
            fontWeight: "bold",
            fontSize: "1rem",
            height: 28,
            minWidth: 60,
          }}
        >
          <Points style={{ width: 15 }} />
          <Typography>{goat.pointsGuide}</Typography>
        </Box>
      </Box>

      <Box sx={{ flex: 1, overflow: "hidden" }}>
        <Typography variant="body2" color="text.secondary">
          {goat.address}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            mt: 0.5,
            mb: 2,
          }}
        >
          <CallSplit fontSize="small" />
          <Typography variant="body2">(dystans)</Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 1,
          mt: "auto",
          alignItems: "flex-end",
          flexShrink: 0,
        }}
      >
        <Button
          variant="outlined"
          startIcon={<PlayArrow />}
          onClick={(e) => {
            e.stopPropagation();
            // TODO: add play logic
          }}
          sx={{
            minWidth: 120,
            height: 32,
            px: 2.5,
            borderRadius: 0.5,
            fontWeight: "bold",
          }}
        >
          Posłuchaj
        </Button>

        <Button
          variant="contained"
          startIcon={<CenterFocusWeak />}
          onClick={(e) => {
            e.stopPropagation();
            // TODO: add catch logic
          }}
          sx={{
            flex: 1,
            height: 48,
            bgcolor: "palette.primary.dark",
            "&:hover": { bgcolor: "text.secondary", color: "primary.light" },
            borderRadius: 0.5,
            fontWeight: "bold",
            color: "secondary.main",
            fontSize: "1.1rem",
            display: "flex",
            alignItems: "center",
            px: 2,
          }}
        >
          Złap!
        </Button>
      </Box>
    </Paper>
  );
}
