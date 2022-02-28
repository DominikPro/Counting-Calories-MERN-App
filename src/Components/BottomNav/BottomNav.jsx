import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//=============================================
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Button, Container, Avatar, Tooltip, MenuItem } from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";
//=============================================
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
				to: "/ProductDishList",
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
				to: "/ProductDishList",
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
				to: "/ProductDishList",
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
			//=============================================

			{
				id: "dishConfiguration1",
				name: "dishConfiguration",
				goToButtonName: "Statystyki",
				to: "/statistic",
			},
			{
				id: "dishConfiguration2",
				name: "dishConfiguration",
				goToButtonName: "Dodaj Kalorie",
				to: "/addCalorie",
			},
			{
				id: "dishConfiguration3",
				name: "dishConfiguration",
				goToButtonName: "Dodaj produkt",
				to: "/addProduct",
			},
		];
		setPage(navVariants.filter((item) => item.name === pageName));
	}, [pageName]);

	const [anchorElNav, setAnchorElNav] = useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar position="fixed" style={{ top: "auto", bottom: 0 }} color="inherit">
			<Container>
				<Toolbar>
					<Box
						component="div"
						sx={{
							justifyContent: "center",
							flexGrow: 10,
							display: { xs: "none", sm: "flex" },
						}}>
						<CircularProgressCalorie value={1} />
					</Box>
					<Box
						component="div"
						sx={{
							flexGrow: 2,
							display: { xs: "none", md: "flex" },
						}}></Box>

					<Box
						sx={{
							justifyContent: "flex-end",
							flexGrow: 1,
							display: { xs: "flex", md: "none" },
						}}>
						<IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="success">
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: {
									xs: "block",
									md: "none",
								},
							}}>
							{page.map((item) => (
								<MenuItem to={item.to} component={Link} key={item.id} onClick={handleCloseNavMenu}>
									<Typography textAlign="center">{item.goToButtonName}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					{/* //==================================================================================================================================== */}

					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "none", md: "flex" },
						}}>
						{page.map((item) => (
							<Button
								variant="contained"
								size="small"
								component={Link}
								to={item.to}
								key={item.id}
								onClick={handleCloseNavMenu}
								sx={{
									m: 1,
									display: "block",
								}}>
								{item.goToButtonName}
							</Button>
						))}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default BottomNav;

// <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={2}>
// 	<BottomNavigation>
// 		{page.map((item) => {
// 			return (
// 				<GoToButton
// 					to={item.to}
// 					key={item.id}
// 					goToButtonName={item.goToButtonName}
// 				/>
// 			);
// 		})}
// 	</BottomNavigation>

// 	<CircularProgressCalorie value={1} />
// </Paper>
