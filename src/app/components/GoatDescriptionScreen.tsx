import { Box, Typography, IconButton, Button, Paper, LinearProgress, CardMedia } from '@mui/material';
import {ArrowBack, Phone, LocationOn, PlayArrow, Pause, CallSplit, CenterFocusWeak} from '@mui/icons-material';
import { useState, useRef, useEffect } from 'react';
import { Goat } from '../data/goats';
import Points from "../icons/points.svg";

interface Props {
    goat: Goat;
    onBack: () => void;
}

export default function GoatDescriptionScreen({goat, onBack,}: Props) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const audioRef = useRef<HTMLAudioElement>(null);

    const togglePlayback = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }

        setIsPlaying(!isPlaying);
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);

        return `${mins}:${String(secs).padStart(2, '0')}`;
    };

    return (
        <Box
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                bgcolor: 'background.default',
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    p: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <IconButton
                    onClick={onBack}
                    sx={{
                        position: 'absolute',
                        left: 16,
                    }}
                >
                    <ArrowBack />
                </IconButton>

                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}
                >
                    {goat.name}
                </Typography>

                <Box
                    sx={{
                        position: 'absolute',
                        right: 16,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1,
                        mt: 0.5,
                        bgcolor: 'primary.light',
                        borderRadius: 0.4,
                        p: 0.5,
                        color: 'primary.contrastText',
                        fontWeight: 'bold',
                        fontSize: '1rem',
                        height: 28,
                        minWidth: 50,
                    }}
                >
                    <Points style={{ width: 15 }} />
                    <Typography>
                        {goat.points}
                    </Typography>
                </Box>

            </Box>

            <Box sx={{ flex: 1, overflow: 'auto', px: 2, pb: 2 }}>

                <CardMedia
                    component="img"
                    image={goat.photo}
                    alt={goat.name}
                    sx={{
                        borderRadius: 1,
                        mb: 1,
                    }}
                />

                <Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            mb: -2,
                            p: 2,
                        }}
                    >
                        <LocationOn sx={{ color: '#66bb6a', fontSize: 24 }} />
                        <Typography variant="body1" color="text.primary">
                            {goat.address}
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            p: 2,
                        }}
                    >
                        <CallSplit sx={{ color: '#66bb6a', fontSize: 24 }} />
                        <Typography variant="body1" color="text.primary">
                            (dystans)
                        </Typography>
                    </Box>
                </Box>

                <Button
                    variant="contained"
                    startIcon={<CenterFocusWeak />}
                    fullWidth
                    sx={{
                        flex: 1,
                        height: 48,
                        mb: 3,
                        bgcolor: '#66bb6a',
                        '&:hover': { bgcolor: '#4caf50' },
                        borderRadius: 0.5,
                        fontWeight: 'bold',
                        color: '#c54000',
                        fontSize: '1.4rem',
                        display: 'flex',
                        alignItems: 'center',
                        px: 2,
                        '& .MuiButton-startIcon svg': {
                            fontSize: '2rem',
                        },
                    }}
                >
                    Złap!
                </Button>

                <Typography variant="body2" color="text.secondary" sx={{fontSize: '1.1rem'}}>
                    {goat.description}
                </Typography>


            </Box>

            <Paper
                elevation={3}
                sx={{
                    p: 2,
                    borderRadius: '16px 16px 0 0',
                    bgcolor: 'white',
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                    <IconButton
                        onClick={togglePlayback}
                        sx={{
                            bgcolor: '#66bb6a',
                            color: 'white',
                            '&:hover': { bgcolor: '#4caf50' },
                        }}
                    >
                        {isPlaying ? <Pause /> : <PlayArrow />}
                    </IconButton>
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="body2" color="text.primary" fontWeight="medium">
                            {formatTime(currentTime)} / {formatTime(duration)}
                        </Typography>
                    </Box>
                </Box>

                {/* Wavy Progress Bar */}
                <Box sx={{ position: 'relative', height: '6px' }}>
                    <LinearProgress
                        variant="determinate"
                        value={progress}
                        sx={{
                            height: '6px',
                            borderRadius: 1,
                            bgcolor: '#e8f5e9',
                            '& .MuiLinearProgress-bar': {
                                bgcolor: '#66bb6a',
                                borderRadius: 1,
                            },
                        }}
                    />
                </Box>
            </Paper>

            <audio
                ref={audioRef}
                src={goat.audio}
                onLoadedMetadata={() => {
                    if (audioRef.current) {
                        setDuration(audioRef.current.duration);
                    }
                }}
                onTimeUpdate={() => {
                    if (audioRef.current) {
                        const current = audioRef.current.currentTime;

                        setCurrentTime(current);
                        setProgress(
                            (current / audioRef.current.duration) * 100
                        );
                    }
                }}
                onEnded={() => {
                    setIsPlaying(false);
                    setProgress(100);
                }}
            />

        </Box>
    );
}
