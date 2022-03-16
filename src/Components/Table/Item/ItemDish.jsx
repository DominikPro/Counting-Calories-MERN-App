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

const ItemDish = ({ listType, productId, name, defaultPortion, caloriesIn100, products }) => {
	const dispatch = useDispatch();
	const [expanded, setExpanded] = useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
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
							<Grid>
								<Tooltip title="Dodaj do listy ulubionych" placement="left">
									<div>
										<FavoriteCheckBox productId={productId} listType={listType} />
									</div>
								</Tooltip>
							</Grid>
							<Grid item xs={12} sm={6}>
								<Typography
									sx={{
										flexShrink: 0,
									}}>
									{name}
								</Typography>
							</Grid>
							<Grid item xs={12} sm={4}>
								<Typography display="inline">W porcji:</Typography>
								<Typography
									display="inline"
									sx={{
										color: "text.secondary",
									}}>
									{` ${Math.round((defaultPortion / 100) * caloriesIn100)} kcl`}
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
								<Typography align="Center">Waga dania:</Typography>
								<Typography
									align="Center"
									sx={{
										color: "text.secondary",
									}}>
									{`${defaultPortion} g`}
								</Typography>
							</Grid>
							<Grid item xs={12} sm={6}>
								<Typography align="Center">Kalorii w 100 gramach:</Typography>

								<Typography
									align="Center"
									sx={{
										color: "text.secondary",
									}}>
									{`${caloriesIn100} kcl`}
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Typography align="Center">Składniki:</Typography>
							</Grid>
							<Grid container item xs={12} justifyContent="center" alignItems="center">
								{products.map((product) => {
									return (
										<Grid item xs={6} sm={3} md={2}>
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

							<Grid item alignItems="center">
								<Button
									item
									// onClick={() => checkListTypeAndDisptach()}
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
						</Grid>
					</AccordionDetails>
				</Accordion>
			</Container>
			{/* COL-1-========================================================================== */}
		</>
	);
};

ItemDish.propTypes = {
	// listType: PropTypes.string,
	// productId: PropTypes.number,
	// name: PropTypes.string,
	// defaultPortion: PropTypes.number,
	// caloriesIn100: PropTypes.number,
	// remarks: PropTypes.string,
	// date: PropTypes.string,
};
export default ItemDish;
