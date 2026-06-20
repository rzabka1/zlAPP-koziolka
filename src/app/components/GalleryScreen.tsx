import {Box, Card, CardActionArea, ImageList, ImageListItem, Typography,} from "@mui/material";
import {Lock} from "@mui/icons-material";
import {Goat, goats} from "../data/goats";

type Props = {
	onGoatClick: (goat: Goat) => void;
};

const imageData: { id: number }[] = [
	{id: 0},
	{id: 1},
	{id: 2},
	{id: 3},
	{id: 4},
	{id: 5},
	{id: 6},
	{id: 7},
	{id: 8},
	{id: 9},
	{id: 10},
	{id: 11},
	{id: 12},
	{id: 13},
	{id: 14},
	{id: 15},
	{id: 16},
	{id: 17},
	{id: 18},
	{id: 19},
	{id: 20},
	{id: 21},
	{id: 22},
	{id: 23},
	{id: 24},
	{id: 25},
];

export default function GalleryScreen({onGoatClick}: Props) {
	return (
		<Box
			sx={{
				height: "100%",
				overflow: "auto",
				bgcolor: "background.default",
				p: 2,
			}}
		>
			<Typography
				variant="h6"
				sx={{
					fontWeight: "bold",
					textAlign: "center",
					mb: 2,
				}}
			>
				Złapane Koziołki: 5/26
			</Typography>

			<ImageList cols={2} gap={14}>
				{imageData.map((item) => {
					const goat = goats[item.id];

					return (
						<ImageListItem key={item.id}>
							<Card
								elevation={3}
								sx={{
									borderRadius: 2,
									overflow: "hidden",
								}}
							>
								{goat.isCaught ? (
									<CardActionArea
										onClick={() => onGoatClick(goat)}
										sx={{
											aspectRatio: "1",
											display: "flex",
											flexDirection: "column",
											alignItems: "stretch",
											userSelect: "none",
											WebkitTapHighlightColor: "transparent",
										}}
									>
										{/* IMAGE */}
										<Box
											sx={{
												flex: 1,
												position: "relative",
												overflow: "hidden",
											}}
										>
											<Box
												component="img"
												src={goat.photo}
												alt={goat.name}
												draggable={false}
												sx={{
													width: "100%",
													height: "100%",
													objectFit: "cover",
													display: "block",
													userSelect: "none",
													WebkitUserDrag: "none",
												}}
											/>
										</Box>

										{/* NAME */}
										<Box
											sx={{
												height: "30%",
												bgcolor: "primary.dark",
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												px: 1,
											}}
										>
											<Typography
												variant="body2"
												sx={{
													fontWeight: 600,
													color: "background.paper",
													textAlign: "center",
												}}
											>
												{goat.name}
											</Typography>
										</Box>
									</CardActionArea>
								) : (
									<Box
										sx={{
											aspectRatio: "1",
											bgcolor: "grey.400",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
										}}
									>
										<Lock
											sx={{
												fontSize: 48,
												color: "grey.700",
											}}
										/>
									</Box>
								)}
							</Card>
						</ImageListItem>
					);
				})}
			</ImageList>
		</Box>
	);
}
