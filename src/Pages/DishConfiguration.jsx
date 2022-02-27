import React, { useState, useEffect } from "react";
//=============================================
import { Container, Grid, Button } from "@mui/material/";
//=============================================
import { useDispatch, useSelector } from "react-redux";
//=============================================
import AddDish from "../Components/DischConfigComponents/AddDish";
import Header from "../Components/Header/Header";
import ProductsListToSelct from "../Components/DischConfigComponents/ProductsListToSelct";
import BottomNav from "../Components/BottomNav/BottomNav";
import DishNameInput from "../Components/DischConfigComponents/DishNameInput";
import SelectedProducts from "../Components/DischConfigComponents/SelectedProducts";
import DishCalorieCounter from "../Components/DischConfigComponents/DishCalorieCounter";
import ButtonSaveDish from "../Components/DischConfigComponents/ButtonSaveDish";
//=============================================

const DishConfiguration = () => {
	const [startOfTheDishConfiguration, setStartOfTheDishConfiguration] = useState();
	const allProductsFromStore = useSelector((state) => state.products);
	const [configuredDish, setConfiguredDish] = useState({
		dishName: "",
		dishId: "",
		dishCalorieIn100g: "",
		products: [],
	});

	useEffect(() => {
		console.log(configuredDish);
	}, [configuredDish]);

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

						<Grid xs={12} container>
							<Grid xs={12} container direction="row" justifyContent="center" alignItems="center" item>
								<Grid item>
									<DishNameInput configuredDish={configuredDish} setConfiguredDish={setConfiguredDish} />
								</Grid>
							</Grid>
							<Grid xs={12} container direction="row" justifyContent="center" alignItems="center">
								<Grid item>
									<SelectedProducts configuredDish={configuredDish} setConfiguredDish={setConfiguredDish} />
								</Grid>
							</Grid>
							<Grid item xs={12} my="15px" container direction="row" justifyContent="center" alignItems="center">
								<ButtonSaveDish variant="contained" size="small" configuredDish={configuredDish} setConfiguredDish={setConfiguredDish}>
									Zapisz
								</ButtonSaveDish>
							</Grid>

							<Grid xs={12} container direction="row" justifyContent="center" alignItems="center">
								<Grid item>Wyszukaj produkt</Grid>
							</Grid>
							<Grid xs={12} container direction="column " justifyContent="center" alignItems="center">
								<Grid item>
									{allProductsFromStore.map((product) => {
										return <ProductsListToSelct product={product} setConfiguredDish={setConfiguredDish} />;
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
