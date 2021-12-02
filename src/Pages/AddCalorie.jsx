import React, { useState } from "react";
//=============================================
import { useDispatch, useSelector } from "react-redux";
import { addCalories } from "../Redux/actions/caloriesActions";

//=============================================
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Header from "../Components/Header/Header";
//=============================================

const AddCalorie = () => {
	const [selectedProduct, setselectedProduct] = useState({
		name: "",
		defaultPortion: 0,
		caloriesIn100: 0,
		remarks: "",
	});
	const [serchedProductName, setSerchedProductName] = useState(null);
	const products = useSelector((state) => state.products);

	const addtoform = (product) => {
		setselectedProduct(product);
		setSerchedProductName("");
	};

	const handleChange = (e) => {
		console.log(selectedProduct);
		const { name, value } = e.target;
		setselectedProduct((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	return (
		<>
			<Container maxWidth="sm">
				<Stack
					direction="column"
					justifyContent="flex-start"
					alignItems="center"
					spacing={2}
				>
					<Header title="Dodaj produkt do dzisiejszej listy" size={20} />

					<form noValidate autoComplete="off">
						<TextField
							onChange={(e) => {
								setSerchedProductName(e.target.value);
							}}
							id="filled-basic"
							label="Wyszukaj produkt:"
							variant="outlined"
							fullWidth
						></TextField>
						{products
							.filter((product) => {
								if (
									serchedProductName === null ||
									serchedProductName.length <= 1
								) {
									return "";
								} else if (
									product.name
										.toLowerCase()
										.includes(
											serchedProductName.toLowerCase()
										)
								) {
									return product;
								}
							})
							.map((product) => {
								console.log(product);
								return (
									<Grid
										container
										alignItems="center"
										justifyContent="center"
										key={product.name}
									>
										<Grid item xs={8}>
											{
												product.name
											}
										</Grid>
										<Grid item xs={2}>
											<Button
												onClick={() =>
													addtoform(
														product
													)
												}
												variant="outlined"
											>
												Wybierz
											</Button>
										</Grid>
									</Grid>
								);
							})}
						<TextField
							value={selectedProduct.name}
							id="filled-basic"
							label="Nazwa produktu:"
							variant="filled"
							fullWidth
						/>

						<TextField
							// onChange={()=>}
							value={selectedProduct.caloriesIn100}
							id="filled-basic"
							label="Ilość kcl w 100g:"
							variant="filled"
							fullWidth
						/>

						<TextField
							// onChange={()=>}
							value={selectedProduct.defaultPortion}
							id="filled-basic"
							label="Waga porcji:"
							variant="filled"
							fullWidth
						/>
						<TextField
							onChange={(e) => handleChange(e)}
							value={selectedProduct.remarks}
							id="outlined-multiline-flexible"
							name="remarks"
							variant="outlined"
							fullWidth
							label="Uwagi:"
							multiline
							minRows={4}
						/>
					</form>
					<Button variant="contained"> Dodaj </Button>
				</Stack>
			</Container>
		</>
	);
};

export default AddCalorie;
