import React, { useState, useEffect } from "react";
//=============================================
import { Container, Grid } from "@mui/material/";
//=============================================
import AddDish from "../Components/DischConfigComponents/AddDish";
import Header from "../Components/Header/Header";
import ProductsList from "../Components/DischConfigComponents/ProductsList";
import BottomNav from "../Components/BottomNav/BottomNav";
import DishNameInput from "../Components/DischConfigComponents/DishNameInput";
import SelectedProducts from "../Components/DischConfigComponents/SelectedProducts";
//=============================================

const DishConfiguration = () => {
	const [startOfTheDishConfiguration, setStartOfTheDishConfiguration] = useState();
	const [configuredDish, setConfiguredDish] = useState({ dishName: "", dishId: "" });

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
									<SelectedProducts />
								</Grid>
							</Grid>
							<Grid xs={12} container direction="column " justifyContent="center" alignItems="center" xs={12}>
								<Grid item>
									<ProductsList />
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
