import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Header from "../Components/Header/Header";
import CategoryHeader from "../Components/CategoryHeader/CategoryHeader";
//=============================================
import Item from "../Components/Item";

const data = [
	{ name: "Cupcake", portion: 500, amountOfKclIn100g: 10, remarks: "Uwagi do produktu" },
	{ name: "cola", portion: 500, amountOfKclIn100g: 10, remarks: "Uwagi do produktu" },
	{ name: "Kanapka z pomidorem", portion: 350, amountOfKclIn100g: 25, remarks: "Uwagi do produktu" },
	{ name: "Woda", portion: 500, amountOfKclIn100g: 1, remarks: "Uwagi do produktu" },
];

const Statistic = () => {
	return (
		<>
			<Container maxWidth="lg">
				<Header title="Statystyki" size={20} />
				<Grid container spacing={1}>
					<Grid item xs={4}>
						<CategoryHeader title="Nazwa" />
					</Grid>
					<Grid item xs={1}>
						<CategoryHeader title="Porcja" />
					</Grid>
					<Grid item xs={2}>
						<CategoryHeader title="Kcl w 110 g/ml" />
					</Grid>
					<Grid item xs={1}>
						<CategoryHeader title="Ilość kalorii" />
					</Grid>
					<Grid item xs={2}>
						<CategoryHeader title="Uwagi" />
					</Grid>
					<Grid item xs={2}>
						<CategoryHeader title="Edytcja" />
					</Grid>

					{data.map((item) => {
						return (
							<Item
								key={item.name}
								name={item.name}
								portion={item.portion}
								amountOfKclIn100g={
									item.amountOfKclIn100g
								}
								remarks={item.remarks}
							/>
						);
					})}
				</Grid>
			</Container>
		</>
	);
};

export default Statistic;
