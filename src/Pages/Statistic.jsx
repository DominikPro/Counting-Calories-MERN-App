import React from "react";
//=============================================
import Container from "@mui/material/Container";
//=============================================
import Header from "../Components/Header/Header";
import Table from "../Components/Table/Table";
//=============================================

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
				<Table
					data={data}
					col1Title="Nazwa"
					col2Title="Porcja"
					col3Title="Kcl w 110 g/ml"
					col4Title="Ilość kalorii"
					col5Title="Uwagi"
					col6Title="Edytcja"
				/>
			</Container>
		</>
	);
};

export default Statistic;
