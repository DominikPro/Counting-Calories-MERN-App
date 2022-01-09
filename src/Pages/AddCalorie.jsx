import React, { useState, useRef } from "react";
//=============================================
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";
//=============================================
import { useDispatch, useSelector } from "react-redux";
import { addCalories } from "../Redux/actions/caloriesActions";
//=============================================
import { Container, Box, Stack, TextField, Button } from "@mui/material/";
//=============================================
import Header from "../Components/Header/Header";
import SerchedItem from "../Components/SerchedItem/SerchedItem";
import GoToButton from "../Components/GoToButton/GoToButton";
import BottomNav from "../Components/BottomNav/BottomNav";

//=============================================

const AddCalorie = () => {
	const serchedProductRef = useRef();
	const dispatch = useDispatch();
	const [selectedProduct, setselectedProduct] = useState({
		listType: "",
		id: "",
		name: "",
		defaultPortion: 0,
		caloriesIn100: 0,
		remarks: "",
		date: "",
	});
	const [serchedProductName, setSerchedProductName] = useState("");
	const products = useSelector((state) => state.products);

	const addtoform = (product) => {
		setselectedProduct(product);
		const actDate = dayjs().format("DD.MM.YYYY");
		setselectedProduct((prevState) => ({
			...prevState,
			date: actDate,
			listType: "Statistic",
			id: uuidv4(),
		}));
	};

	const handleChange = (e) => {
		const { name, value, id } = e.target;
		setselectedProduct((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	return (
		<>
			<Container maxWidth="sm">
				<Stack justifyContent="flex-start" alignItems="center" spacing={2}>
					<Header title="Dodaj produkt do dzisiejszej listy" size={20} />

					<form noValidate autoComplete="off">
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
								if (
									serchedProductName === "" ||
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
								console.log();
								return (
									<SerchedItem
										key={product.id}
										product={product}
										addtoform={
											addtoform
										}
										setSerchedProductName={
											setSerchedProductName
										}
									/>
								);
							})}
						{serchedProductName.length > 1 && (
							<Box
								m={2}
								display="flex"
								justifyContent="center"
								alignItems="center"
							>
								<GoToButton
									goToButtonName="Stwórz nowy produtk"
									to="/addProduct"
								/>
							</Box>
						)}

						<TextField
							value={selectedProduct.name}
							style={{ marginTop: "10px" }}
							inputProps={{ readOnly: true }}
							id="outlined-disabled"
							label="Nazwa produktu:"
							variant="outlined"
							fullWidth
						/>

						<TextField
							onChange={(e) => handleChange(e)}
							value={selectedProduct.caloriesIn100}
							style={{ marginTop: "10px" }}
							name="caloriesIn100"
							id="filled-basic"
							label="Ilość kcl w 100g:"
							variant="outlined"
							fullWidth
						/>

						<TextField
							onChange={(e) => handleChange(e)}
							value={selectedProduct.defaultPortion}
							style={{ marginTop: "10px" }}
							name="defaultPortion"
							id="filled-basic"
							label="Waga porcji:"
							variant="outlined"
							fullWidth
						/>
						<TextField
							onChange={(e) => handleChange(e)}
							value={selectedProduct.remarks}
							style={{ marginTop: "10px" }}
							id="outlined-multiline-flexible"
							name="remarks"
							variant="outlined"
							fullWidth
							label="Uwagi:"
							multiline
							minRows={4}
						/>
					</form>

					<Button
						onClick={(e) => {
							if (selectedProduct.name !== "") {
								dispatch(addCalories(selectedProduct));
								setSerchedProductName("");
								setselectedProduct({
									listType: "",
									id: "",
									name: "",
									defaultPortion: 0,
									caloriesIn100: 0,
									remarks: "",
									date: "",
								});
								console.log(selectedProduct);
							} else {
								alert(
									"Sprawdź czy poprawnie wprowadziłeś informacje o produkcie"
								);
							}
						}}
						variant="contained"
					>
						Dodaj
					</Button>
					<BottomNav pageName="addCalorie" />
				</Stack>
			</Container>
		</>
	);
};

export default AddCalorie;
