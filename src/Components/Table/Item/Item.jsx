import React, { useState } from "react";
import PropTypes from "prop-types";
//=============================================
import { useDispatch } from "react-redux";
import { removeCaloris } from "../../../Redux/actions/caloriesActions";
import { removeProduct } from "../../../Redux/actions/productActions";
//=============================================
import EditDialogWindow from "../../EditDialogWindow/EditDialogWindow";
import FavoriteCheckBox from "../../FavoriteCheckBox/FavoriteCheckBox";
//=============================================
import { Typography, Button, Grid, Tooltip, Container, Box, Accordion, AccordionDetails, AccordionSummary } from "@mui/material/";
//=============================================

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
//=============================================

const Item = ({ listType, productId, name, portion, amountOfKclIn100g, remarks, date }) => {
	const dispatch = useDispatch();
	const [expanded, setExpanded] = useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};
	const checkListTypeAndDisptach = () => {
		if (listType === "Statistic") {
			return dispatch(removeCaloris(productId));
		} else if (listType === "Products") {
			return dispatch(removeProduct(productId));
		}
	};

	return (
		<>
			<Container
				sx={{ maxWidth: { xs: "360px", sm: "xl", md: "lg" }, padding: { xs: 0 } }}
				// sx={{ display: { xs: "none", sm: "block" } }}
			>
				<Accordion
					expanded={expanded === "panel1"}
					onChange={handleChange("panel1")}
					sx={{
						":hover": {
							boxShadow: 4,
						},
						boxShadow: 2,
					}}>
					<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
						<Grid container alignItems={"center"}>
							<Grid align="left" item xs={2}>
								{listType === "Products" ? (
									<Tooltip title="Dodaj do listy ulubionych" placement="left">
										<div>
											<FavoriteCheckBox productId={productId} listType={listType} />
										</div>
									</Tooltip>
								) : null}
							</Grid>
							<Grid item xs={6}>
								<Typography
									sx={{
										flexShrink: 0,
									}}>
									{name}
								</Typography>
							</Grid>
							<Grid item xs={4}>
								<Typography display="inline">W porcji:</Typography>
								<Typography
									display="inline"
									sx={{
										color: "text.secondary",
									}}>
									{` ${Math.round((portion / 100) * amountOfKclIn100g)} kcl`}
								</Typography>
							</Grid>
						</Grid>
					</AccordionSummary>

					<AccordionDetails
						sx={{
							backgroundColor: "#f2f4f7",
						}}>
						<Grid container justifyContent="center" alignItems="center" xs={12} spacing={2}>
							<Grid item xs={12} sm={6}>
								<Typography align="Center">Porcja:</Typography>
								<Typography
									align="Center"
									sx={{
										color: "text.secondary",
									}}>
									{`${portion} g`}
								</Typography>
							</Grid>
							<Grid item xs={12} sm={6}>
								<Typography align="Center">Kalorii w 100 gramach:</Typography>

								<Typography
									align="Center"
									sx={{
										color: "text.secondary",
									}}>
									{`${amountOfKclIn100g} kcl`}
								</Typography>
							</Grid>
							<Grid item xs={12} sm={6}>
								<Typography align="Center">Uwagi:</Typography>
								<Typography
									align="Center"
									sx={{
										color: "text.secondary",
									}}>
									{remarks}
								</Typography>
							</Grid>
							<Grid item xs={12} sm={6}>
								<Typography align="Center">Data dodania:</Typography>
								<Typography
									align="Center"
									sx={{
										color: "text.secondary",
									}}>
									{date}
								</Typography>
							</Grid>

							<Grid item alignItems="center">
								<Button
									item
									onClick={() => checkListTypeAndDisptach()}
									variant="outlined"
									sx={{
										":hover": {
											color: "red",
											borderColor: "red",
										},
									}}>
									Usyń
								</Button>
							</Grid>

							<Grid item>
								<EditDialogWindow item listType={listType} productId={productId} productName={name} />
							</Grid>
						</Grid>
					</AccordionDetails>
				</Accordion>
			</Container>
			{/* COL-1-========================================================================== */}

			{/* <Grid item xs={2}>
				<Typography align="left">{name}</Typography>
			</Grid>
			<Grid align="center" item xs={1}>
				{listType === "Products" ? (
					<Tooltip title="Dodaj do listy ulubionych" placement="left">
						<div>
							<FavoriteCheckBox
								productId={productId}
								listType={listType}
							/>
						</div>
					</Tooltip>
				) : null}
			</Grid> */}
			{/* COL-2-========================================================================== */}
			{/* <Grid item xs={1}>
				<Typography align="left">{portion}</Typography>
			</Grid> */}
			{/* COL-3-========================================================================== */}

			{/* <Grid item xs={2}>
				<Typography align="center">{amountOfKclIn100g}</Typography>
			</Grid> */}
			{/* COL-4-========================================================================== */}

			{/* <Grid item xs={1}>
				<Typography align="center">
					{Math.round((portion / 100) * amountOfKclIn100g)}
				</Typography>
			</Grid> */}
			{/* COL-5-========================================================================== */}

			{/* <Grid item xs={1}>
				<Typography align="center">{remarks}</Typography>
			</Grid> */}
			{/* COL-6-========================================================================== */}

			{/* <Grid item xs={1}>
				<Typography align="center">{date}</Typography>
			</Grid> */}
			{/* COL-7-========================================================================== */}

			{/* <Grid container spacing={1} justifyContent="center" xs={3}>
				<Grid item>
					<Button onClick={() => checkListTypeAndDisptach()} variant="outlined">
						Usyń
					</Button>
				</Grid>
				<Grid item>
					<EditDialogWindow
						listType={listType}
						productId={productId}
						productName={name}
					/>
				</Grid>
			</Grid> */}

			{/* ========================================================================== */}
		</>
	);
};

Item.propTypes = {
	listType: PropTypes.string,
	productId: PropTypes.number,
	name: PropTypes.string,
	portion: PropTypes.number,
	amountOfKclIn100g: PropTypes.number,
	remarks: PropTypes.string,
	date: PropTypes.string,
};
export default Item;
