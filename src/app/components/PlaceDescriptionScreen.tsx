import {Box, CardMedia, IconButton, LinearProgress, Paper, Typography,} from "@mui/material";
import {ArrowBack, CallSplit, LocationOn, Pause, PlayArrow,} from "@mui/icons-material";
import {useRef, useState} from "react";
import {Place} from "../data/places";

interface Props {
	place: Place;
	onBack: () => void;
}

export default function PlaceDescriptionScreen({place, onBack}: Props) {
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

		return `${mins}:${String(secs).padStart(2, "0")}`;
	};

	return (
		<Box
			sx={{
				height: "100%",
				display: "flex",
				flexDirection: "column",
				bgcolor: "background.default",
			}}
		>
			<Box
				sx={{
					position: "relative",
					p: 2,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<IconButton
					onClick={onBack}
					sx={{
						position: "absolute",
						left: 16,
					}}
				>
					<ArrowBack/>
				</IconButton>

				<Typography
					variant="h5"
					sx={{
						fontWeight: "bold",
						textAlign: "center",
					}}
				>
					{place.name}
				</Typography>

			</Box>

			<Box sx={{flex: 1, overflow: "auto", px: 2, pb: 2}}>
				<CardMedia
					component="img"
					image={place.photo}
					alt={place.name}
					sx={{
						borderRadius: 1,
						mb: 1,
					}}
				/>

				<Box>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							gap: 2,
							mb: -2,
							p: 2,
						}}
					>
						<LocationOn sx={{color: "palette.primary.dark", fontSize: 24}}/>
						<Typography variant="body1" color="text.primary">
							{place.address}
						</Typography>
					</Box>

					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							gap: 2,
							p: 2,
						}}
					>
						<CallSplit sx={{color: "palette.primary.dark", fontSize: 24}}/>
						<Typography variant="body1" color="text.primary">
							52m
						</Typography>
					</Box>
				</Box>

				<Typography
					variant="body2"
					color="text.secondary"
					sx={{fontSize: "1.1rem"}}
				>
					{place.description}
				</Typography>
			</Box>

			<Paper
				elevation={3}
				sx={{
					p: 2,
					borderRadius: "16px 16px 0 0",
					bgcolor: "white",
				}}
			>
				<Box sx={{display: "flex", alignItems: "center", gap: 2, mb: 1}}>
					<IconButton
						onClick={togglePlayback}
						sx={{
							bgcolor: "text.primary",
							color: "white",
							"&:hover": {bgcolor: "text.secondary"},
						}}
					>
						{isPlaying ? <Pause/> : <PlayArrow/>}
					</IconButton>
					<Box sx={{flex: 1}}>
						<Typography
							variant="body2"
							color="text.primary"
							fontWeight="medium"
						>
							{formatTime(currentTime)} / {formatTime(duration)}
						</Typography>
					</Box>
				</Box>

				{/* Wavy Progress Bar */}
				<Box sx={{position: "relative", height: "6px"}}>
					<LinearProgress
						variant="determinate"
						value={progress}
						sx={{
							height: "6px",
							borderRadius: 1,
							bgcolor: "background.default",
							"& .MuiLinearProgress-bar": {
								bgcolor: "palette.primary.dark",
								borderRadius: 1,
							},
						}}
					/>
				</Box>
			</Paper>

			<audio
				ref={audioRef}
				src={place.audio}
				onLoadedMetadata={() => {
					if (audioRef.current) {
						setDuration(audioRef.current.duration);
					}
				}}
				onTimeUpdate={() => {
					if (audioRef.current) {
						const current = audioRef.current.currentTime;

						setCurrentTime(current);
						setProgress((current / audioRef.current.duration) * 100);
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
