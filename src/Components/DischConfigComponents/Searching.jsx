import React, { useRef, useState } from "react";
//=============================================
import { v4 as uuidv4 } from "uuid";

//=============================================
import SerchedProduct from "./SerchedProduct";
import GoToButton from "../GoToButton/GoToButton";
//=============================================
import { useSelector } from "react-redux";
//=============================================
import { Box, TextField } from "@mui/material/";
//=============================================

const Searching = ({ setConfiguredDish }) => {
	const serchedProductRef = useRef();
	const [serchedProductName, setSerchedProductName] = useState("");
	const products = useSelector((state) => state.products);

	const handleAddProductToSelectedLists = (product) => {
		setConfiguredDish((prevState) => ({ ...prevState, products: [...prevState.products, { ...product, id: uuidv4() }] }));
	};

	return (
		<>
			<TextField
				onChange={(e) => {
					setSerchedProductName(e.target.value);
				}}
				value={serchedProductName}
				style={{ marginBottom: "20px" }}
				ref={serchedProductRef}
				id="filled-basic"
				label="Wyszukaj produkt:"
				variant="outlined"
				color="secondary"
				size="large"
				fullWidth
			/>
			{products
				.filter((product) => {
					if (serchedProductName === "" || serchedProductName.length <= 1) {
						return "";
					} else if (product.name.toLowerCase().includes(serchedProductName.toLowerCase())) {
						return product;
					}
				})
				.map((product) => {
					return <SerchedProduct key={product.id} product={product} addtoDish={handleAddProductToSelectedLists} setSerchedProductName={setSerchedProductName} />;
				})}
			{serchedProductName.length > 1 && (
				<Box m={2} display="flex" justifyContent="center" alignItems="center">
					<GoToButton goToButtonName="Stwórz nowy produtk" to="/addProduct" />
				</Box>
			)}
		</>
	);
};

export default Searching;
