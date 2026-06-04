import { Box, Paper, Typography } from '@mui/material';
import { Place, MyLocation } from '@mui/icons-material';

export default function MapScreen() {
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#e8f5e9',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, #c8e6c9 1px, transparent 1px),
            linear-gradient(to bottom, #c8e6c9 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          opacity: 0.3,
        }}
      />

      <Paper
        elevation={3}
        sx={{
          p: 4,
          textAlign: 'center',
          bgcolor: 'white',
          borderRadius: 3,
          zIndex: 1,
        }}
      >
        <Place sx={{ fontSize: 64, color: '#2e7d32', mb: 2 }} />
        <Typography variant="h5" color="text.primary" gutterBottom>
          Widok Mapy
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Włącz lokalizację w telefonie
        </Typography>

        <Box
          sx={{
            mt: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
          }}
        >
          <MyLocation sx={{ fontSize: 20, color: '#66bb6a' }} />
          <Typography variant="caption" color="text.secondary">
            Ładowanie lokalizacji...
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
