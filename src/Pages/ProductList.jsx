import React, { useState, useMemo } from "react";
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
		setProductList(data);
	}, [data]);

	useMemo(() => {
		data = productList;
	}, [productList]);

	return (
		<>
			<Container
				maxWidth="lg"
				sx={{
					paddingBottom: "70px",
					paddingLeft: { xs: "5px", sm: "16px" },
					paddingRight: { xs: "5px", sm: "16px" },
				}}>
				<Header title="Lista produktów" size={20} variant="h2" />
				<SortProductList productList={productList} setProductList={setProductList} />
				<Table data={data} />
				<BottomNav pageName={"productList"} />
			</Container>
		</>
	);
};

export default ProductList;
