import React, { useState } from "react";
import { Link } from "react-router-dom";
//==========================================
import logo from "../../Images/logo.png";
//==========================================
import { Button, Menu, MenuItem, Avatar, AppBar, Box, Toolbar, Typography, Stack, IconButton } from "@mui/material/";
import HomeIcon from "@mui/icons-material/Home";
import BarChartIcon from "@mui/icons-material/BarChart";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CoffeeMakerIcon from "@mui/icons-material/CoffeeMaker";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
//==========================================

const Navigation = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const ListOfMenuItems = [
		{ name: "Strona główna", url: "/", icon: <HomeIcon /> },
		{ name: "Statystyki", url: "/statistic", icon: <BarChartIcon /> },
		{ name: "Dodaj Kalorie", url: "/addCalorie", icon: <AddCircleOutlineIcon /> },
		{ name: "Produkty i Dania", url: "/ProductDishList", icon: <ListAltIcon /> },
		{ name: "Dodaj Produkt", url: "/addProduct", icon: <AddCircleIcon /> },
		{ name: "Knifguracja dań", url: "/dishConfiguration", icon: <CoffeeMakerIcon /> },
		{ name: "Użytkownik", url: "/user", icon: <AssignmentIndIcon /> },
	];

	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static">
					<Toolbar>
						<Avatar
							alt="Logo"
							sx={{
								width: {
									md: 58,
									xs: 50,
								},
								height: {
									md: 58,
									xs: 50,
								},
							}}
							src={logo}
							component={Link}
							to="/"
						/>
						<Typography
							variant="h6"
							sx={{
								flexGrow: 1,
								fontSize: {
									lg: 30,
									md: 27,
									sm: 24,
									xs: 19,
								},
							}}>
							Callorie Counters
						</Typography>
						<Menu
							id="basic-menu"
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
							MenuListProps={{
								"aria-labelledby": "basic-button",
							}}>
							{ListOfMenuItems.map((menuOption) => (
								<MenuItem key={menuOption.name} onClick={handleClose} component={Link} to={menuOption.url}>
									<IconButton>{menuOption.icon}</IconButton>
									{menuOption.name}
								</MenuItem>
							))}
						</Menu>
						<Button variant="contained" color="success" id="basic-button" aria-controls="basic-menu" aria-haspopup="true" aria-expanded={open ? "true" : undefined} onClick={handleClick}>
							Menu
						</Button>

						<Stack direction="row" spacing={2}></Stack>
					</Toolbar>
				</AppBar>
			</Box>
		</>
	);
};

export default Navigation;
