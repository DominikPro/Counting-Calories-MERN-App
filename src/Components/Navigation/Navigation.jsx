import React from "react";
import { Link } from "react-router-dom";
//==========================================
import logo from "../../Images/logo.png";
//==========================================
import { Button, Menu, MenuItem, Avatar, AppBar, Box, Toolbar, Typography, Stack } from "@mui/material/";
//==========================================

const Navigation = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

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
							}}
						>
							Callorie Counters
						</Typography>
						<Menu
							id="basic-menu"
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
							MenuListProps={{
								"aria-labelledby": "basic-button",
							}}
						>
							<MenuItem
								onClick={handleClose}
								component={Link}
								to="/"
							>
								Strona główna
							</MenuItem>
							<MenuItem
								onClick={handleClose}
								component={Link}
								to="/statistic"
							>
								Statystyki
							</MenuItem>
							<MenuItem
								onClick={handleClose}
								component={Link}
								to="/addCalorie"
							>
								Dodaj Kalorie
							</MenuItem>
							<MenuItem
								onClick={handleClose}
								component={Link}
								to="/addProduct"
							>
								Dodaj Produkt
							</MenuItem>
							<MenuItem
								onClick={handleClose}
								component={Link}
								to="/productList"
							>
								Lista Produktów
							</MenuItem>
							<MenuItem
								onClick={handleClose}
								component={Link}
								to="/user"
							>
								Użytkownik
							</MenuItem>
						</Menu>
						<Button
							variant="contained"
							color="success"
							id="basic-button"
							aria-controls="basic-menu"
							aria-haspopup="true"
							aria-expanded={open ? "true" : undefined}
							onClick={handleClick}
						>
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
