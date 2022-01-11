import React, { useEffect, useState } from "react";
//=============================================
import { Paper, BottomNavigationAction, BottomNavigation } from "@mui/material/";
//=============================================
import GoToButton from "../GoToButton/GoToButton";
import CircularProgressCalorie from "../CircularProgressCalorie/CircularProgressCalorie";
//=============================================

const BottomNav = ({ pageName }) => {
	const [page, setPage] = useState([]);
	const navVariants = [
		{ name: "statistic", goToButtonName: "Dodaj Kalorie", to: "/addCalorie" },
		{ name: "statistic", goToButtonName: "Dodaj Produkt", to: "/addProduct" },
		{ name: "statistic", goToButtonName: "Lista produktów", to: "/productList" },
		//=============================================

		{ name: "addCalorie", goToButtonName: "Statystyki", to: "/statistic" },
		{ name: "addCalorie", goToButtonName: "Utwórz produkt", to: "/addProduct" },
		{ name: "addCalorie", goToButtonName: "Lista produktów", to: "/productList" },
		//=============================================
		{ name: "addProduct", goToButtonName: "Statystyki", to: "/statistic" },
		{ name: "addProduct", goToButtonName: "Dodaj Kalorie", to: "/addCalorie" },
		{ name: "addProduct", goToButtonName: "Lista produktów", to: "/productList" },
		//=============================================
		{ name: "productList", goToButtonName: "Statystyki", to: "/statistic" },
		{ name: "productList", goToButtonName: "Dodaj Kalorie", to: "/addCalorie" },
		{ name: "productList", goToButtonName: "Dodaj produkt", to: "/addProduct" },
	];

	useEffect(() => {
		setPage(navVariants.filter((item) => item.name === pageName));
	}, [pageName]);

	return (
		<Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
			<BottomNavigation>
				{page.map((item) => {
					return (
						<>
							<GoToButton
								label="Add new product"
								goToButtonName={item.goToButtonName}
								to={item.to}
							/>
						</>
					);
				})}
			</BottomNavigation>
			<CircularProgressCalorie value={1} />
		</Paper>
	);
};

export default BottomNav;
