import { Box, Button, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Goat } from '../data/goats';

interface Props {
    goat: Goat;
    onBack: () => void;
}

export default function GoatDescriptionScreen({goat, onBack,}: Props) {
    return (
        <Box
            sx={{
                height: '100%',
                overflow: 'auto',
                bgcolor: 'background.default',
                p: 2,
            }}
        >
            <Button
                startIcon={<ArrowBackIcon />}
                onClick={onBack}
                sx={{ mb: 2 }}
            >
                Powrót
            </Button>

            <Typography
                variant="h4"
                color="text.primary"
                sx={{ mb: 2 }}
            >
                {goat.name}
            </Typography>

            <Typography
                variant="body1"
                color="text.secondary"
            >
                {goat.description}
            </Typography>
        </Box>
    );
}