import {Box, IconButton, Typography} from "@mui/material";
import {Goat} from "../data/goats";
import {ArrowBack, CenterFocusWeak} from "@mui/icons-material";
import {useEffect} from "react";

type Props = {
	goat: Goat;
	onBack: () => void;
	onCaught: (goat: Goat) => void;
};

export default function CatchScreen({goat, onBack, onCaught}: Props) {

	useEffect(() => {
		const timer = setTimeout(() => {
			onCaught(goat);
		}, 4000);

		return () => clearTimeout(timer);
	}, [goat, onCaught]);

	return (
		<Box sx={{height: "100%", display: "flex", flexDirection: "column"}}>
			<Box
				sx={{
					flex: 1,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					px: 2,
				}}
			>
				<Box
					sx={{
						position: "relative",
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "center",
						gap: 0.5,
						mt: 4,
						mb: 8,
					}}>
					<Box>
						<IconButton
							onClick={onBack}
						>
							<ArrowBack/>
						</IconButton>
					</Box>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							gap: 1.5,
							m: 2,
						}}>
						<CenterFocusWeak
							sx={{
								fontSize: 67,
								color: "secondary.main"
							}}/>

						<Typography
							sx={{
								fontWeight: "bold",
								fontSize: 24
							}}>
							Zeskanuj kod QR z tabliczki!
						</Typography>
					</Box>
				</Box>

				<Box
					sx={{
						width: "100%",
						maxWidth: 500,
						aspectRatio: "1 / 1",
						bgcolor: "black",
						borderRadius: 0,
					}}
				/>
			</Box>
		</Box>
	);
}