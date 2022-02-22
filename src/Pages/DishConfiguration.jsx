import React, { useState, useEffect } from "react";
//=============================================
import { Container, Grid } from "@mui/material/";
//=============================================
import { useDispatch, useSelector } from "react-redux";
//=============================================
import AddDish from "../Components/DischConfigComponents/AddDish";
import Header from "../Components/Header/Header";
import ProductsListToSelct from "../Components/DischConfigComponents/ProductsListToSelct";
import BottomNav from "../Components/BottomNav/BottomNav";
import DishNameInput from "../Components/DischConfigComponents/DishNameInput";
import SelectedProducts from "../Components/DischConfigComponents/SelectedProducts";
//=============================================

const DishConfiguration = () => {
	const [startOfTheDishConfiguration, setStartOfTheDishConfiguration] = useState();
	const allProductsFromStore = useSelector((state) => state.products);
	const [configuredDish, setConfiguredDish] = useState({
		dishName: "",
		dishId: "",
		products: [{ listType: "Products", id: 1, name: "Jabłko", defaultPortion: 170, caloriesIn100: 38, remarks: "", favorite: false }],
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
									<DishNameInput setConfiguredDish={setConfiguredDish} />
								</Grid>
							</Grid>
							<Grid xs={12} container direction="row" justifyContent="center" alignItems="center">
								<Grid item>
									<SelectedProducts configuredDish={configuredDish} />
								</Grid>
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
