import React from "react";
//=============================================
import Container from "@mui/material/Container";
import Header from "../Components/Header/Header";
import Table from "../Components/Table/Table";
//=============================================
const data = [
	{ name: "Cupcake", portion: 500, amountOfKclIn100g: 10, remarks: "" },
	{ name: "Cola", portion: 500, amountOfKclIn100g: 60, remarks: "" },
	{ name: "Kanapka z pomidorem", portion: 350, amountOfKclIn100g: 80, remarks: "z majonezem" },
	{ name: "Woda", portion: 500, amountOfKclIn100g: 1, remarks: "" },
];
const ProductList = () => {
	return (
		<>
			<Container maxWidth="lg">
				<Header title="Lista produktów" size={20} />
				<Table
					data={data}
					col1Title="Nazwa produtku"
					col2Title="Porcja - opak"
					col3Title="Kcl w 110 g/ml"
					col4Title="Ilość kalorii"
					col5Title="Uwagi"
					col6Title="Edytcja"
				/>
			</Container>
		</>
	);
};

export default ProductList;
