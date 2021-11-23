import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Header from "../Components/Header/Header";
//=============================================

const ProductList = () => {
	return (
		<>
			<Container maxWidth="lg">
				<Header title="Lista produktów" size={20} />
			</Container>
		</>
	);
};

export default ProductList;
