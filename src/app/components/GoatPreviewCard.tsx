import {Box, Button, IconButton, Paper, Typography} from "@mui/material";
import {Goat} from "../data/goats";
import {CallSplit, CenterFocusWeak, Check, Navigation, PlayArrow} from "@mui/icons-material";
import Points from "../icons/points.svg";

interface Props {
	goat: Goat;
	onOpen: () => void;
	onCatch: (goat: Goat) => void;
}

export default function GoatPreviewCard({goat, onOpen, onCatch}: Props) {
	return (<Box
			sx={{
				position: "absolute",
				left: 16,
				right: 16,
				bottom: 16,
				zIndex: 2000,
			}}
		>
			<IconButton
				onClick={(e) => {
					e.stopPropagation();
					// TODO: navigation logic
				}}
				sx={{
					position: "absolute",
					top: -56,
					right: 12,

					width: 48,
					height: 48,

					bgcolor: "primary.contrastText",
					boxShadow: 4,

					color: "background.paper",

					"&:hover": {
						bgcolor: "primary.main",
					},
				}}
			>
				<Navigation/>
			</IconButton>

			<Paper
				elevation={8}
				onClick={onOpen}
				sx={{
					height: "clamp(120px, 25vh, 240px)",
					minHeight: 120,
					maxHeight: 260,

					p: 2,
					borderRadius: 1,
					cursor: "pointer",

					display: "flex",
					flexDirection: "column",
					overflow: "hidden",
				}}
			>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "flex-start",
						mb: 1,
					}}
				>
					<Typography variant="h5">{goat.name}</Typography>

					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							gap: 1,
							mt: 0.5,
							bgcolor: "primary.light",
							borderRadius: 0.4,
							p: 0.75,
							color: "primary.contrastText",
							fontWeight: "bold",
							fontSize: "1rem",
							height: 28,
							minWidth: 60,
						}}
					>
						<Points style={{width: 15}}/>
						<Typography>{goat.pointsGuide}</Typography>
					</Box>
				</Box>

				<Box sx={{flex: 1, overflow: "hidden"}}>
					<Typography variant="body2" color="text.secondary">
						{goat.address}
					</Typography>

					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							gap: 0.5,
							mt: 0.5,
							mb: 2,
						}}
					>
						<CallSplit fontSize="small"/>
						<Typography variant="body2">52m</Typography>
					</Box>
				</Box>

				<Box
					sx={{
						display: "flex",
						gap: 1,
						mt: "auto",
						alignItems: "flex-end",
						flexShrink: 0,
					}}
				>
					<Button
						variant="outlined"
						startIcon={<PlayArrow/>}
						onClick={(e) => {
							e.stopPropagation();
							// TODO: add play logic
						}}
						sx={{
							minWidth: 120,
							height: 32,
							px: 2.5,
							borderRadius: 0.5,
							fontWeight: "bold",
						}}
					>
						Posłuchaj
					</Button>

					{goat.isCaught ? (
						<Box
							sx={{
								flex: 1,
								height: 48,
								bgcolor: "primary.dark",
								color: "white",
								borderRadius: 0.5,
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								gap: 1,
								fontWeight: "bold",
								fontSize: "1.1rem",
							}}
						>
							<Check/>
						</Box>
					) : (
						<Button
							variant="contained"
							startIcon={<CenterFocusWeak/>}
							onClick={(e) => {
								e.stopPropagation();
								onCatch(goat);
							}}
							sx={{
								flex: 1,
								height: 48,
								bgcolor: "primary.dark",
								"&:hover": {
									bgcolor: "text.secondary",
									color: "primary.light",
								},
								borderRadius: 0.5,
								fontWeight: "bold",
								color: "secondary.main",
								fontSize: "1.1rem",
							}}
						>
							Złap!
						</Button>
					)}
				</Box>
			</Paper>
		</Box>
	);
}
