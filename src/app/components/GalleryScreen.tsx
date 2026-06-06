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
  { id: 0, color: "primary.main" },
  { id: 1, color: "primary.light" },
  { id: 2, color: "primary.dark" },
  { id: 3, color: "primary.main" },
  { id: 4, color: "primary.light" },
  { id: 5, color: "text.secondary" },
  { id: 6, color: "primary.main" },
  { id: 7, color: "primary.light" },
  { id: 8, color: "primary.dark" },
  { id: 9, color: "primary.main" },
  { id: 10, color: "primary.light" },
  { id: 11, color: "text.secondary" },
  { id: 12, color: "primary.main" },
  { id: 13, color: "primary.light" },
  { id: 14, color: "primary.dark" },
  { id: 15, color: "primary.main" },
  { id: 16, color: "primary.light" },
  { id: 17, color: "text.secondary" },
  { id: 18, color: "primary.main" },
  { id: 19, color: "primary.light" },
  { id: 20, color: "primary.dark" },
  { id: 21, color: "primary.main" },
  { id: 22, color: "primary.light" },
  { id: 23, color: "text.secondary" },
  { id: 24, color: "primary.main" },
  { id: 25, color: "primary.light" },
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
                    color: "#background.paper",
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
