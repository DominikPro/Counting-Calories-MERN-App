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
import FavoriteList from "../Components/FavoriteList/FavoriteList";
import { useEffect } from "react";
//=============================================

const AddCalorie = () => {
	const serchedProductRef = useRef();
	const dispatch = useDispatch();

	const [validation, setValidation] = useState({
		defaultPortion: "",
		caloriesIn100: "",
	});
	const [selectedProduct, setselectedProduct] = useState({
		listType: "",
		id: "",
		name: "",
		defaultPortion: 0,
		caloriesIn100: 0,
		remarks: "",
		date: "",
		Favorite: "",
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
		const { name, value } = e.target;
		setselectedProduct((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	useEffect(() => {
		if (selectedProduct.defaultPortion.length < 2) {
			return setValidation((prevState) => ({ ...prevState, defaultPortion: true }));
		} else if (selectedProduct.caloriesIn100.length < 2) {
			return setValidation((prevState) => ({ ...prevState, caloriesIn100: true }));
		} else setValidation({ defaultPortion: false, caloriesIn100: false });
	}, [selectedProduct]);

	const handleAddCalorie = () => {
		const { defaultPortion, caloriesIn100 } = validation;
		if (defaultPortion === false && caloriesIn100 === false) {
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
				Favorite: "",
			});
		} else alert("Uzupęłnij pola podświetlone na czerwono");
	};

	return (
		<>
			<Container maxWidth="sm">
				<Stack justifyContent="flex-start" alignItems="center" spacing={2}>
					<Header title="Dodaj produkt do dzisiejszej listy" size={20} />
					<FavoriteList addtoform={addtoform} />
					{/* <FavoriteList2 addtoform={addtoform} /> */}

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
							name="name"
							style={{ marginTop: "10px" }}
							inputProps={{ readOnly: true }}
							id="outlined-disabled"
							label="Nazwa produktu:"
							variant="outlined"
							fullWidth
							required
							error={validation.name}
						/>

						<TextField
							onChange={(e) => handleChange(e)}
							name="caloriesIn100"
							value={selectedProduct.caloriesIn100}
							style={{ marginTop: "10px" }}
							id="filled-basic"
							label="Ilość kcl w 100g:"
							variant="outlined"
							fullWidth
							required
							error={validation.caloriesIn100}
						/>

						<TextField
							onChange={(e) => handleChange(e)}
							name="defaultPortion"
							value={selectedProduct.defaultPortion}
							style={{ marginTop: "10px" }}
							id="filled-basic"
							label="Waga porcji:"
							variant="outlined"
							fullWidth
							required
							error={validation.defaultPortion}
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
								handleAddCalorie();
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
