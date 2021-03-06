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
import { Typography, Button, Grid, Tooltip, Container, Accordion, AccordionDetails, AccordionSummary } from "@mui/material/";
//=============================================

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
//=============================================

const Item = ({ listType, productId, name, portion, amountOfKclIn100g, remarks, date, dishProducts }) => {
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

	const displayIngredients = () => {
		if (dishProducts === undefined) {
			return null;
		} else {
			return (
				<>
					<Grid item xs={12}>
						<Typography align="Center">Skład dania:</Typography>
					</Grid>
					<Grid container item xs={12} justifyContent="center" alignItems="center">
						{dishProducts.map((product) => {
							return (
								<Grid item xs={6} sm={2} md={1} key={product.defaultPortion + product.name}>
									<Typography align="Center">{product.name}</Typography>

									<Typography
										align="Center"
										sx={{
											color: "text.secondary",
										}}>
										{`${product.defaultPortion} g`}
									</Typography>
								</Grid>
							);
						})}
					</Grid>
				</>
			);
		}
	};

	return (
		<>
			<Container sx={{ maxWidth: { xs: "360px", sm: "xl", md: "lg" }, padding: { xs: 0 } }}>
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
								<Tooltip title="Dodaj do listy ulubionych" placement="left">
									<div>
										<FavoriteCheckBox productId={productId} listType={listType} />
									</div>
								</Tooltip>
							</Grid>
							<Grid item xs={6}>
								<Typography sx={{ flexShrink: 0 }}>{name}</Typography>
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
							{displayIngredients()}

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
