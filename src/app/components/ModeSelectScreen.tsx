import { useState } from 'react';
import {
    Box,
    Typography,
    Button,
    Collapse,
    Card,
    CardActionArea,
} from '@mui/material';
import {
    Explore,
    EmojiEvents,
} from '@mui/icons-material';

type Props = {
    onSelectMode: (mode: 'guide' | 'game') => void;
    onPreviewMode: (mode: 'guide' | 'game') => void;
};

type Mode = 'guide' | 'game' | null;


export default function ModeSelectScreen({
                                             onSelectMode,
                                             onPreviewMode,
                                         }: Props) {
    const [selectedMode, setSelectedMode] = useState<Mode>(null);

    const modes = {
        guide: {
            title: 'Tryb Przewodnika',
            icon: <Explore sx={{ fontSize: 48 }} />,
            description:
                'Zwiedzaj Lublin z mapą i odkrywaj Koziołki oraz inne ciekawe miejsca w swoim tempie. Klikaj punkty, sprawdzaj trasy i poznawaj historie ukryte w miejskiej przestrzeni.',
        },
        game: {
            title: 'Tryb Gry Miejskiej',
            icon: <EmojiEvents sx={{ fontSize: 48 }} />,
            description:
                'Wyrusz na przygodę bez mapy i szukaj Koziołków na podstawie zagadek i wskazówek. Zdobywaj punkty, podejmuj wyzwania i sprawdź, jak dobrze znasz Lublin!',
        },
    };

    return (
        <Box
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                p: 3,
                bgcolor: 'primary.light',
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    fontWeight: 700,
                    textAlign: 'center',
                    mb: 3,
                    color: 'text.primary',
                }}
            >
                Wybierz tryb
            </Typography>

            <Collapse in={selectedMode !== null}>
                <Box
                    sx={{
                        overflow: 'hidden',
                        mb: 3,
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Card
                        elevation={0}
                        sx={{
                            bgcolor: 'background.paper',
                            borderRadius: 1,
                            p: 3,
                            border: '1px solid',
                            borderColor: 'divider',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <Typography
                                variant="body1"
                                color="text.secondary"
                                sx={{
                                    lineHeight: 1.7,
                                    mb: 3,
                                }}
                            >
                                {selectedMode
                                    ? modes[selectedMode].description
                                    : ''}
                            </Typography>
                        </Box>

                        {selectedMode && (
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <Button
                                    variant="contained"
                                    size="large"
                                    onClick={() => onSelectMode(selectedMode)}
                                    sx={{
                                        borderRadius: 999,
                                        px: 4,
                                        py: 1.2,
                                        fontWeight: 700,
                                    }}
                                >
                                    Wybierz
                                </Button>
                            </Box>
                        )}
                    </Card>
                </Box>
            </Collapse>

            <Box
                sx={{
                    display: 'flex',
                    gap: 2,
                }}
            >
                {(['guide', 'game'] as const).map((mode) => {
                    const selected = selectedMode === mode;

                    return (
                        <Card
                            key={mode}
                            elevation={0}
                            sx={{
                                flex: 1,
                                borderRadius: 1,
                                overflow: 'hidden',
                                border: '3px solid',
                                borderColor: selected
                                    ? 'primary.contrastText'
                                    : 'transparent',
                                bgcolor: selected
                                    ? 'primary.main'
                                    : 'background.paper',
                                transition: 'all .25s ease',
                                transform: selected
                                    ? 'translateY(-2px)'
                                    : 'translateY(0)',
                            }}
                        >
                            <CardActionArea
                                onClick={() => {
                                    setSelectedMode(mode);
                                    onPreviewMode(mode);
                                }}
                                sx={{
                                    height: '100%',
                                    p: 3,
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: 2,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            color: selected
                                                ? 'text.primary'
                                                : 'primary.main',
                                        }}
                                    >
                                        {modes[mode].icon}
                                    </Box>

                                    <Typography
                                        variant="h6"
                                        sx={{
                                            textAlign: 'center',
                                            fontWeight: 700,
                                            color: 'text.primary',
                                        }}
                                    >
                                        {modes[mode].title}
                                    </Typography>
                                </Box>
                            </CardActionArea>
                        </Card>
                    );
                })}
            </Box>
        </Box>
    );
}