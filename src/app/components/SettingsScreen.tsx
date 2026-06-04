import { Box, List, ListItem, ListItemIcon, ListItemText, ListItemButton, Switch, Divider, Paper, Typography } from '@mui/material';
import { Palette, Notifications, Language, Help, Info } from '@mui/icons-material';
import { useState } from 'react';

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Box
      sx={{
        height: '100%',
        overflow: 'auto',
        bgcolor: 'background.default',
        p: 2,
      }}
    >
      <Typography variant="h5" color="text.primary" sx={{ mb: 2, px: 1 }}>
        Ustawienia
      </Typography>

      <Paper elevation={1} sx={{ mb: 2, borderRadius: 2, overflow: 'hidden' }}>
        <List sx={{ py: 0 }}>
          <ListItem key="notifications">
            <ListItemIcon>
              <Notifications sx={{ color: '#66bb6a' }} />
            </ListItemIcon>
            <ListItemText
              primary="Powiadomienia"
              secondary="Zezwól aplikacji na wysyłanie powiadomień"
            />
            <Switch
              edge="end"
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
              sx={{
                '& .MuiSwitch-switchBase.Mui-checked': {
                  color: '#66bb6a',
                },
                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                  backgroundColor: '#81c784',
                },
              }}
            />
          </ListItem>
          <Divider key="divider-1" />
          <ListItem key="darkmode">
            <ListItemIcon>
              <Palette sx={{ color: '#66bb6a' }} />
            </ListItemIcon>
            <ListItemText
              primary="Tryb ciemny"
              secondary="Przełącz na tryb ciemny"
            />
            <Switch
              edge="end"
              checked={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)}
              sx={{
                '& .MuiSwitch-switchBase.Mui-checked': {
                  color: '#66bb6a',
                },
                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                  backgroundColor: '#81c784',
                },
              }}
            />
          </ListItem>
        </List>
      </Paper>

      <Paper elevation={1} sx={{ borderRadius: 2, overflow: 'hidden' }}>
        <List sx={{ py: 0 }}>
          <ListItem key="language" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Language sx={{ color: '#66bb6a' }} />
              </ListItemIcon>
              <ListItemText
                primary="Język"
                secondary="Polski"
              />
            </ListItemButton>
          </ListItem>
          <Divider key="divider-2" />
          <ListItem key="help" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Help sx={{ color: '#66bb6a' }} />
              </ListItemIcon>
              <ListItemText
                primary="Pomoc"
                secondary="Uzyskaj pomoc w aplikacji"
              />
            </ListItemButton>
          </ListItem>
          <Divider key="divider-3" />
          <ListItem key="about" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Info sx={{ color: '#66bb6a' }} />
              </ListItemIcon>
              <ListItemText
                primary="O aplikacji"
                secondary="Wersja 1.0.0"
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
}
