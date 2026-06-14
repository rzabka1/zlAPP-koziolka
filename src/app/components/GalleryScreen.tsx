import {
  Box, Card, CardActionArea,
  CardMedia,
  ImageList,
  ImageListItem,
  Paper,
  Typography,
} from "@mui/material";
import {Goat, goats} from "../data/goats";

type Props = {
  onGoatClick: (goat: Goat) => void;
};

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

export default function GalleryScreen({ onGoatClick }: Props) {
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
              <Card
                  elevation={3}
                  sx={{
                    borderRadius: 2,
                    overflow: "hidden",
                  }}
              >
                <CardActionArea
                    onClick={() => onGoatClick(goats[item.id])}
                    sx={{
                      aspectRatio: "1",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "stretch",
                      userSelect: "none",
                      WebkitTapHighlightColor: "transparent",
                    }}
                >
                  {/* IMAGE SECTION */}
                  <Box
                      sx={{
                        flex: 1,
                        position: "relative",
                        overflow: "hidden",
                      }}
                  >
                    <Box
                        component="img"
                        src={goats[item.id].photo}
                        alt={goats[item.id].name}
                        draggable={false}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                          userSelect: "none",
                          WebkitUserDrag: "none",
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
                          color: "background.paper",
                          textAlign: "center",
                        }}
                    >
                      {goats[item.id].name}
                    </Typography>
                  </Box>
                </CardActionArea>
              </Card>
            </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
