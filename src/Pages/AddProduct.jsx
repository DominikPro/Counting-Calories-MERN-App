import React, { useState } from "react";
//=============================================
import { v4 as uuidv4 } from "uuid";
//=============================================
import { useDispatch } from "react-redux";
import { addProduct } from "../Redux/actions/productActions";
//=============================================
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Header from "../Components/Header/Header";
import GoToButton from "../Components/GoToButton/GoToButton";
//=============================================

const AddProduct = () => {
	const [product, setProduct] = useState({
		listType: "Products",
		id: uuidv4(),
		name: "",
		defaultPortion: "",
		caloriesIn100: "",
		remarks: "",
	});
	const dispatch = useDispatch();
	//=============================================
	const handleChange = (e) => {
		const { name, value } = e.target;
		setProduct((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};
	//=============================================
	const clearLocalProductState = () => {
		setProduct({ name: "", defaultPortion: "", caloriesIn100: "", remarks: "" });
	};
	//=============================================

	return (
		<>
			<Container maxWidth="sm">
				<Stack
					direction="column"
					justifyContent="flex-start"
					alignItems="center"
					spacing={2}
				>
					<Header title="Dodaj nowy produkt do katalogu" size={20} />
					<form noValidate autoComplete="off">
						<TextField
							onChange={(e) => handleChange(e)}
							name="name"
							value={product.name}
							style={{ marginBottom: "10px" }}
							id="filled-basic"
							label="Nazwa produktu:"
							variant="outlined"
							fullWidth
							required
						/>

						<TextField
							onChange={(e) => handleChange(e)}
							name="caloriesIn100"
							value={product.caloriesIn100}
							style={{ marginBottom: "10px" }}
							id="filled-basic"
							label="Ilość kcl w 100g:"
							variant="outlined"
							fullWidth
							required
						/>

						<TextField
							onChange={(e) => handleChange(e)}
							name="defaultPortion"
							value={product.defaultPortion}
							style={{ marginBottom: "10px" }}
							id="filled-basic"
							label="Domyślna waga porcji:"
							variant="outlined"
							fullWidth
							required
						/>
						<TextField
							onChange={(e) => handleChange(e)}
							name="remarks"
							value={product.remarks}
							id="outlined-multiline-flexible"
							variant="outlined"
							fullWidth
							label="Uwagi:"
							multiline
							minRows={4}
						/>
					</form>
					<Button
						onClick={() => {
							dispatch(addProduct(product));
							clearLocalProductState();
						}}
						variant="contained"
					>
						Dodaj
					</Button>
					<GoToButton
						goToButtonName="Dodaj do listy kalorii"
						to="/addCalorie"
					/>
				</Stack>
			</Container>
		</>
	);
};
export default AddProduct;
