import React from "react";
//=============================================
import Container from "@mui/material/Container";
import Header from "../Components/Header/Header";
import Table from "../Components/Table/Table";
//=============================================
import { useSelector } from "react-redux";
//=============================================
const ProductList = () => {
	const data = useSelector((state) => state.products);
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
					col6Title="Data"
					col7Title="Edytcja"
				/>
			</Container>
		</>
	);
};

export default ProductList;
