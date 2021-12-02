import React from "react";
//=============================================
import Grid from "@mui/material/Grid";
import CategoryHeader from "../CategoryHeader/CategoryHeader";
import Item from "../Item/Item";

//=============================================

const Table = ({ data, col1Title, col2Title, col3Title, col4Title, col5Title, col6Title }) => {
	return (
		<>
			<Grid container spacing={1}>
				<Grid item xs={3}>
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
				<Grid item xs={2}>
					<CategoryHeader title={col6Title} />
				</Grid>

				{data.map((item) => {
					return (
						<Item
							key={item.name}
							name={item.name}
							portion={item.defaultPortion}
							amountOfKclIn100g={item.caloriesIn100}
							remarks={item.remarks}
						/>
					);
				})}
			</Grid>
		</>
	);
};

export default Table;
