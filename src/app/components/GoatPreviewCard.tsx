import { Paper, Typography, Box, } from '@mui/material';
import { Goat } from '../data/goats';

interface Props {
    goat: Goat;
    onOpen: () => void;
}

export default function GoatPreviewCard({ goat, onOpen, }: Props) {
    return (
        <Paper
            elevation={8}
            onClick={onOpen}
            sx={{
                position: 'absolute',
                left: 16,
                right: 16,
                bottom: 16,
                height: '18%',
                minHeight: 120,

                p: 2,

                borderRadius: 2,

                cursor: 'pointer',

                zIndex: 2000,

                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}
        >
            <Typography variant="h6">
                {goat.name}
            </Typography>

            <Typography
                variant="body2"
                color="text.secondary"
            >
                (adres, dystans, punkty, przycisk "Złap!")
            </Typography>
        </Paper>
    );
}