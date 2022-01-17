import React, { useEffect, useState } from "react";
//=============================================
import { Paper, BottomNavigation } from "@mui/material/";
//=============================================
import GoToButton from "../GoToButton/GoToButton";
import CircularProgressCalorie from "../CircularProgressCalorie/CircularProgressCalorie";
//=============================================

const BottomNav = ({ pageName }) => {
	const [page, setPage] = useState([]);

	useEffect(() => {
		const navVariants = [
			{
				id: "statistic1",
				name: "statistic",
				goToButtonName: "Dodaj Kalorie",
				to: "/addCalorie",
			},
			{
				id: "statistic2",
				name: "statistic",
				goToButtonName: "Dodaj Produkt",
				to: "/addProduct",
			},
			{
				id: "statistic3",
				name: "statistic",
				goToButtonName: "Lista produktów",
				to: "/productList",
			},
			//=============================================

			{ id: "addCalorie1", name: "addCalorie", goToButtonName: "Statystyki", to: "/statistic" },
			{
				id: "addCalorie2",
				name: "addCalorie",
				goToButtonName: "Utwórz produkt",
				to: "/addProduct",
			},
			{
				id: "addCalorie3",
				name: "addCalorie",
				goToButtonName: "Lista produktów",
				to: "/productList",
			},
			//=============================================
			{ id: "addProduct1", name: "addProduct", goToButtonName: "Statystyki", to: "/statistic" },
			{
				id: "addProduct2",
				name: "addProduct",
				goToButtonName: "Dodaj Kalorie",
				to: "/addCalorie",
			},
			{
				id: "addProduct3",
				name: "addProduct",
				goToButtonName: "Lista produktów",
				to: "/productList",
			},
			//=============================================
			{
				id: "productList1",
				name: "productList",
				goToButtonName: "Statystyki",
				to: "/statistic",
			},
			{
				id: "productList2",
				name: "productList",
				goToButtonName: "Dodaj Kalorie",
				to: "/addCalorie",
			},
			{
				id: "productList3",
				name: "productList",
				goToButtonName: "Dodaj produkt",
				to: "/addProduct",
			},
		];
		setPage(navVariants.filter((item) => item.name === pageName));
	}, [pageName]);

	return (
		<Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
			<BottomNavigation>
				{page.map((item) => {
					return (
						<GoToButton
							key={item.id}
							label="Add new product"
							goToButtonName={item.goToButtonName}
							to={item.to}
						/>
					);
				})}
			</BottomNavigation>
			<CircularProgressCalorie value={1} />
		</Paper>
	);
};

export default BottomNav;
