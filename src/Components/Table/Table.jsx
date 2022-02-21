import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
//=============================================
import { v4 as uuidv4 } from "uuid";
//=============================================
import CategoryHeader from "../CategoryHeader/CategoryHeader";
import Item from "./Item/Item";
import Header from "../Header/Header";
//=============================================
import { Grid, Typography, Container, Divider, Box } from "@mui/material/";
//=============================================

const Table = ({ listType, data, col1Title, col2Title, col3Title, col4Title, col5Title, col6Title, col7Title }) => {
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
		if (data.length === "") {
			return <h3>Brak danych</h3>;
		} else {
			return (
				<>
					<Container maxWidth="lg" sx={{ mt: 2 }}>
						<Grid container spacing={1}>
							<Divider />
						</Grid>
						{data.map((item) => {
							return (
								<Grid
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
										key={uuidv4()}
										productId={item.id}
										name={item.name}
										portion={item.defaultPortion}
										amountOfKclIn100g={item.caloriesIn100}
										remarks={item.remarks}
									/>
								</Grid>
							);
						})}
						<Grid container xs={12} alignItems="center" justify="center" direction="column" item>
							{noDataToDisplay}
						</Grid>
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
