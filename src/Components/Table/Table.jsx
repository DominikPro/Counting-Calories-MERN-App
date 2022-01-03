import React from "react";
//=============================================
import { Grid } from "@mui/material/";
import CategoryHeader from "../CategoryHeader/CategoryHeader";
import Item from "../Item/Item";
import CalorieCounter from "../CalorieCounter/CalorieCounter";
//=============================================

const Table = ({ data, col1Title, col2Title, col3Title, col4Title, col5Title, col6Title, col7Title }) => {
	// eslint-disable-next-line no-lone-blocks
	{
		console.log(data);
		if (data === "") {
			return <h3>Brak danych</h3>;
		} else {
			return (
				<>
					<Grid container spacing={1}>
						<CalorieCounter dataToCount={data} />
						<Grid item xs={2}>
							<CategoryHeader title={col1Title} />
						</Grid>
						<Grid item xs={2}>
							<CategoryHeader title={col2Title} />
						</Grid>
						<Grid item xs={2}>
							<CategoryHeader title={col3Title} />
						</Grid>
						<Grid item xs={1}>
							<CategoryHeader title={col4Title} />
						</Grid>
						<Grid item xs={2}>
							<CategoryHeader title={col5Title} />
						</Grid>
						<Grid item xs={1}>
							<CategoryHeader title={col6Title} />
						</Grid>
						<Grid item xs={2}>
							<CategoryHeader title={col7Title} />
						</Grid>

						{data.map((item) => {
							// console.log(data);
							return (
								<Item
									listType={item.listType}
									date={item.date}
									key={item.id}
									productId={item.id}
									name={item.name}
									portion={item.defaultPortion}
									amountOfKclIn100g={
										item.caloriesIn100
									}
									remarks={item.remarks}
								/>
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
							{data.length === 0 && <h2>Wybierz date</h2>}
						</Grid>
					</Grid>
				</>
			);
		}
	}
};

export default Table;
