import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
//=============================================
import { v4 as uuidv4 } from "uuid";
//=============================================
import CategoryHeader from "../CategoryHeader/CategoryHeader";
import Item from "./Item/Item";
import Header from "../Header/Header";
//=============================================
import { Grid, Typography, Container } from "@mui/material/";
//=============================================

const Table = ({ listType, data, col1Title, col2Title, col3Title, col4Title, col5Title, col6Title, col7Title }) => {
	const [noDataToDisplay, setNoDataToDisplay] = useState();

	useEffect(() => {
		if (data.length === 0) {
			return setNoDataToDisplay(
				<Header title="Wybierz datę" variant="h4" size={20} align="center" />
			);
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
					<Container maxWidth="lg">
						<Grid container spacing={1}>
							<Grid item xs={3}>
								<CategoryHeader title={col1Title} />
							</Grid>
							<Grid item xs={1}>
								<CategoryHeader title={col2Title} />
							</Grid>
							<Grid item xs={2}>
								<CategoryHeader title={col3Title} />
							</Grid>
							<Grid item xs={1}>
								<CategoryHeader title={col4Title} />
							</Grid>
							<Grid item xs={1}>
								<CategoryHeader title={col5Title} />
							</Grid>
							<Grid item xs={1}>
								<CategoryHeader title={col6Title} />
							</Grid>
							<Grid item xs={3}>
								<CategoryHeader title={col7Title} />
							</Grid>
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
									}}
								>
									<Item
										listType={
											item.listType
										}
										date={item.date}
										key={uuidv4()}
										productId={item.id}
										name={item.name}
										portion={
											item.defaultPortion
										}
										amountOfKclIn100g={
											item.caloriesIn100
										}
										remarks={
											item.remarks
										}
									/>
								</Grid>
							);
						})}
						<Grid
							container
							xs={12}
							alignItems="center"
							justify="center"
							direction="column"
							item
						>
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
	listType: PropTypes.string,
	col1Title: PropTypes.string,
	col2Title: PropTypes.string,
	col3Title: PropTypes.string,
	col4Title: PropTypes.string,
	col5Title: PropTypes.string,
	col6Title: PropTypes.string,
	col7Title: PropTypes.string,
};

export default Table;
