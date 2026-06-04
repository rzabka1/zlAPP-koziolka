import { Box, ImageList, ImageListItem, Paper } from '@mui/material';

const imageData = [
  { id: 1, color: '#a5d6a7' },
  { id: 2, color: '#81c784' },
  { id: 3, color: '#66bb6a' },
  { id: 4, color: '#4caf50' },
  { id: 5, color: '#81c784' },
  { id: 6, color: '#a5d6a7' },
  { id: 7, color: '#66bb6a' },
  { id: 8, color: '#4caf50' },
  { id: 9, color: '#a5d6a7' },
  { id: 10, color: '#81c784' },
  { id: 11, color: '#66bb6a' },
  { id: 12, color: '#4caf50' },
];

export default function GalleryScreen() {
  return (
    <Box
      sx={{
        height: '100%',
        overflow: 'auto',
        bgcolor: 'background.default',
        p: 5,
      }}
    >
      <ImageList cols={2} gap={24}>
        {imageData.map((item) => (
          <ImageListItem key={item.id}>
            <Paper
              elevation={2}
              sx={{
                width: '100%',
                aspectRatio: '1',
                bgcolor: item.color,
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '2rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                WebkitTapHighlightColor: 'transparent',
                transition: 'transform 0.2s',
                '&:active': {
                  transform: 'scale(1.01)',
                  boxShadow: 4,
                },
              }}
            >
              {item.id}
            </Paper>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
