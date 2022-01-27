import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
//=============================================
import { Grid, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
//=============================================
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import FilterListIcon from "@mui/icons-material/FilterList";
import ArrowDiconropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
//=============================================

const SortProducts = () => {
	const [selectMenuItem, setSelectMenuItem] = useState([]);
	const [selctedSorting, setSelctedSorting] = useState(null);

	const sortOptions = [
		{ name: "Data", icon: <ArrowDiconropUpIcon />, action: "DataUp" },
		{ name: "Data", icon: <ArrowDropDownIcon />, action: "DataDown" },
		{ name: "A-->Z", icon: <ArrowDiconropUpIcon />, action: "A-->Z" },
		{ name: "Z-->A", icon: <ArrowDiconropUpIcon />, action: "Z-->A" },
		{ name: "Kalorie", icon: <ArrowDiconropUpIcon />, action: "KalorieUp" },
		{ name: "Kalorie", icon: <ArrowDropDownIcon />, action: "KalorieDown" },
	];
	useEffect(() => {
		sortOptions.map((item) => {
			setSelectMenuItem((prevState) => [
				...prevState,
				<MenuItem key={item.action} name={item.name} value={item.action}>
					{item.name}
					{item.icon}
				</MenuItem>,
			]);
		});
	}, []);

	//opcja z useEffect w którym mapuje pierwszą tablice i zwracamy do nowej tablic menu item jako wygenerowany obiekt po czym mapujem nową tablicę do select

	const handleSortType = (e) => {
		// const { name } = e.target;

		// console.log(typeof e.target.value.name);
		// console.log(selctedSorting.name);
		console.log(selectMenuItem);
		setSelctedSorting(e.target.value);
	};
	return (
		// <Grid container>
		// 	<Grid item>
		<FormControl fullWidth>
			<InputLabel id="demo-simple-select-label">Sortuj</InputLabel>

			<Select
				style={{ width: 130 }}
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				label="Data"
				value={selctedSorting}
				onChange={(e) => handleSortType(e)}
				// value={selectedDay}
			>
				{/* <MenuItem></MenuItem> */}
				{selectMenuItem.map((item) => item)}
			</Select>
		</FormControl>
		// 	</Grid>
		// </Grid>
	);
};

SortProducts.propTypes = {
	productListToSort: PropTypes.array,
};

export default SortProducts;
