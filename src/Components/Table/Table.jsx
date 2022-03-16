import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
//=============================================
import { v4 as uuidv4 } from "uuid";
//=============================================
import Item from "./Item/Item";
import Header from "../Header/Header";
//=============================================
import { Grid, Typography, Container, Divider } from "@mui/material/";
//=============================================

const Table = ({ listType, data }) => {
	const [noDataToDisplay, setNoDataToDisplay] = useState();

	useEffect(() => {
		if (data.length === 0) {
			return setNoDataToDisplay(<Header title="Wybierz datę" variant="h4" size={20} align="center" />);
		} else if (data.length === 0 && listType === "Products") {
			return setNoDataToDisplay(
				<Typography mt={5} variant="h4">
					Brak produktów
				</Typography>
			);
		} else if (data.length > 0) {
			setNoDataToDisplay();
		}
	}, [data, listType]);

	// eslint-disable-next-line no-lone-blocks
	{
		//==================================================
		//Componet is used in ProductDishList and Statistic
		//==================================================

		if (data) {
			return (
				<>
					<Container sx={{ mt: 2 }}>
						<Grid container spacing={1}>
							<Divider />
						</Grid>
						{data.map((item) => {
							return (
								<Grid
									key={uuidv4()}
									direction="row"
									container
									spacing={1}
									alignItems="center"
									sx={{
										marginTop: 1,
									}}>
									<Item
										listType={item.listType}
										date={item.date}
										productId={item.id}
										name={item.name}
										portion={item.defaultPortion}
										amountOfKclIn100g={item.caloriesIn100}
										dishProducts={item.products}
										remarks={item.remarks}
									/>
								</Grid>
							);
						})}
					</Container>
				</>
			);
		}
	}
};

Table.propTypes = {
	data: PropTypes.array,
};

export default Table;
