import {
  Box,
  CardMedia,
  ImageList,
  ImageListItem,
  Paper,
  Typography,
} from "@mui/material";
import { goats } from "../data/goats";

const imageData: { id: number; color: string }[] = [
  { id: 0, color: "#a5d6a7" },
  { id: 1, color: "#9cd79e" },
  { id: 2, color: "#81c784" },
  { id: 3, color: "#66bb6a" },
  { id: 4, color: "#4caf50" },
  { id: 5, color: "#81c784" },
  { id: 6, color: "#a5d6a7" },
  { id: 7, color: "#66bb6a" },
  { id: 8, color: "#4caf50" },
  { id: 9, color: "#a5d6a7" },
  { id: 10, color: "#81c784" },
  { id: 11, color: "#66bb6a" },
  { id: 12, color: "#4caf50" },
  { id: 13, color: "#81c784" },
  { id: 14, color: "#4caf50" },
  { id: 15, color: "#66bb6a" },
  { id: 16, color: "#a5d6a7" },
  { id: 17, color: "#4caf50" },
  { id: 18, color: "#4caf50" },
  { id: 19, color: "#a5d6a7" },
  { id: 20, color: "#66bb6a" },
  { id: 21, color: "#81c784" },
  { id: 22, color: "#9cd79e" },
  { id: 23, color: "#4caf50" },
  { id: 24, color: "#81c784" },
  { id: 25, color: "#a5d6a7" },
];

export default function GalleryScreen() {
  return (
    <Box
      sx={{
        height: "100%",
        overflow: "auto",
        bgcolor: "background.default",
        p: 2,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          mb: 2,
        }}
      >
        Złapane Koziołki: 14/26
      </Typography>

      <ImageList cols={2} gap={14}>
        {imageData.map((item) => (
          <ImageListItem key={item.id}>
            <Paper
              elevation={3}
              sx={{
                borderRadius: 2,
                overflow: "hidden", // IMPORTANT: clips image + prevents overflow
                aspectRatio: "1",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
                transition: "transform 0.15s ease",
                "&:active": {
                  transform: "scale(0.97)",
                },
              }}
            >
              {/* IMAGE SECTION */}
              <Box
                sx={{
                  flex: 1, // takes all available space above text
                  position: "relative",
                  overflow: "hidden", // ensures clean edges
                }}
              >
                <Box
                  component="img"
                  src={goats[item.id].photo}
                  alt={goats[item.id].name}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", // key: fills area like wallpaper
                    display: "block",
                  }}
                />
              </Box>

              {/* TEXT SECTION */}
              <Box
                sx={{
                  height: "30%",
                  bgcolor: item.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  px: 1,
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 600,
                    color: "#fff",
                    textAlign: "center",
                  }}
                >
                  {goats[item.id].name}
                </Typography>
              </Box>
            </Paper>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
