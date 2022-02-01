import React, { useEffect, useState, useMemo } from "react";
//=============================================
import { useSelector } from "react-redux";
//=============================================
import Header from "../Components/Header/Header";
import Table from "../Components/Table/Table";
import BottomNav from "../Components/BottomNav/BottomNav";
import SortProductList from "../Components/Sort/SortProductList/SortProductList";
//=============================================
import Container from "@mui/material/Container";
//=============================================
const ProductList = () => {
	let data = useSelector((state) => state.products);
	const [productList, setProductList] = useState(useSelector((state) => state.products));

	useMemo(() => {
		data = productList;
	}, [productList]);

	return (
		<>
			<Container maxWidth="lg">
				<Header title="Lista produktów" size={20} />
				<SortProductList productList={productList} setProductList={setProductList} />
				<Table
					data={data}
					listType="Products"
					col1Title="Nazwa produtku"
					col2Title="Porcja - opak"
					col3Title="Kcl w 110 g/ml"
					col4Title="Ilość kalorii"
					col5Title="Uwagi"
					col6Title="Data"
					col7Title="Edytcja"
				/>
				<BottomNav pageName={"productList"} />
			</Container>
		</>
	);
};

export default ProductList;
