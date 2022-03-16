import React, { useState, useEffect, useMemo } from "react";
//=============================================
import { Container, Grid } from "@mui/material/";
//=============================================
import { useSelector } from "react-redux";
//=============================================
import AddDish from "../Components/DischConfigComponents/AddDish";
import Header from "../Components/Header/Header";
import ProductsListToSelct from "../Components/DischConfigComponents/ProductsListToSelct";
import BottomNav from "../Components/BottomNav/BottomNav";
import DishNameInput from "../Components/DischConfigComponents/DishNameInput";
import SelectedProducts from "../Components/DischConfigComponents/SelectedProducts";
import ButtonSaveDish from "../Components/DischConfigComponents/ButtonSaveDish";
import Searching from "../Components/DischConfigComponents/Searching";
//=============================================

const DishConfiguration = () => {
	const [startOfTheDishConfiguration, setStartOfTheDishConfiguration] = useState();
	const allProductsFromStore = useSelector((state) => state.products);
	const [configuredDish, setConfiguredDish] = useState({
		listType: "Dish",
		name: "",
		id: "",
		caloriesIn100: "",
		defaultPortion: "",
		products: [],
	});

	useEffect(() => {}, [configuredDish]);

	useMemo(() => {
		let sumOfCalorie;
		let sumOfPortion;
		if (configuredDish.products.length > 0) {
			sumOfCalorie = configuredDish.products.reduce((sum, product) => sum + parseInt(product.caloriesIn100), 0);
			sumOfPortion = configuredDish.products.reduce((sum, product) => sum + parseInt(product.defaultPortion), 0);
		}

		setConfiguredDish((prevState) => ({ ...prevState, caloriesIn100: sumOfCalorie, defaultPortion: sumOfPortion }));
	}, [configuredDish.products]);

	return (
		<>
			<Container
				maxWidth="lg"
				sx={{
					paddingBottom: "70px",
					paddingLeft: { xs: "5px", sm: "16px" },
					paddingRight: { xs: "5px", sm: "16px" },
				}}>
				{startOfTheDishConfiguration ? (
					<>
						<Header title="Konfigurator dań" size={20} variant="h2" />

						<Grid container>
							<Grid item xs={12} container direction="row" justifyContent="center" alignItems="center">
								<Grid item>
									<DishNameInput configuredDish={configuredDish} setConfiguredDish={setConfiguredDish} />
								</Grid>
							</Grid>
							<Grid item xs={12} container direction="row" justifyContent="center" alignItems="center">
								<Grid item>
									<SelectedProducts configuredDish={configuredDish} setConfiguredDish={setConfiguredDish} />
								</Grid>
							</Grid>
							<Grid item xs={12} my="15px" container direction="row" justifyContent="center" alignItems="center">
								<ButtonSaveDish variant="contained" size="small" configuredDish={configuredDish} setConfiguredDish={setConfiguredDish}>
									Zapisz
								</ButtonSaveDish>
							</Grid>

							<Grid item xs={12} container direction="row" justifyContent="center" alignItems="center">
								<Grid item>
									<Searching setConfiguredDish={setConfiguredDish} />
								</Grid>
							</Grid>

							<Grid item xs={12} container direction="column " justifyContent="center" alignItems="center">
								<Grid item>
									{allProductsFromStore.map((product) => {
										return <ProductsListToSelct key={product.id} product={product} setConfiguredDish={setConfiguredDish} />;
									})}
								</Grid>
							</Grid>
						</Grid>
					</>
				) : (
					<AddDish setConfiguredDish={setConfiguredDish} setStartOfTheDishConfiguration={setStartOfTheDishConfiguration} />
				)}

				<BottomNav pageName="dishConfiguration" />
			</Container>
		</>
	);
};

export default DishConfiguration;
