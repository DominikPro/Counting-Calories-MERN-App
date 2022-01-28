import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
//=============================================
import { Grid, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
//=============================================
// import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
// import FilterListIcon from "@mui/icons-material/FilterList";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
//=============================================

const SortProducts = ({ setDateSelected, dateSelected }) => {
	const [selectMenuItem, setSelectMenuItem] = useState([]);
	const [selctedSorting, setSelctedSorting] = useState("");

	//UseEffect generates the component MenuItem. Because the map of the object table directly
	//in the select component is impossible.In the first  select render, the value of the map object is not accessed. We get an error.
	useEffect(() => {
		const sortOptions = [
			{
				name: "Data",
				icon: (
					<ArrowUpwardIcon
						fontSize="small"
						color="primary"
						style={{ marginLeft: 5 }}
					/>
				),
				action: "DataUp",
			},
			{
				name: "Data",
				icon: (
					<ArrowDownwardIcon
						fontSize="small"
						color="primary"
						style={{ marginLeft: 5 }}
					/>
				),
				action: "DataDown",
			},
			{
				name: "A-->Z",
				icon: (
					<ArrowDownwardIcon
						fontSize="small"
						color="primary"
						style={{ marginLeft: 5 }}
					/>
				),
				action: "A-->Z",
			},
			{
				name: "Z-->A",
				icon: (
					<ArrowUpwardIcon
						fontSize="small"
						color="primary"
						style={{ marginLeft: 5 }}
					/>
				),
				action: "Z-->A",
			},
			{
				name: "Kalorie",
				icon: (
					<ArrowUpwardIcon
						fontSize="small"
						color="primary"
						style={{ marginLeft: 5 }}
					/>
				),
				action: "KalorieUp",
			},
			{
				name: "Kalorie",
				icon: (
					<ArrowDownwardIcon
						fontSize="small"
						color="primary"
						style={{ marginLeft: 5 }}
					/>
				),
				action: "KalorieDown",
			},
		];
		sortOptions.map((item) => {
			setSelectMenuItem((prevState) => [
				...prevState,
				<MenuItem
					style={{ justifyContent: "center" }}
					key={item.action}
					name={item.name}
					value={item.action}
				>
					<Grid container>
						<Grid item xs={5}>{item.icon}</Grid>
						<Grid item xs={7}>{item.name}</Grid>
					</Grid>
				</MenuItem>,
			]);
		});
	}, []);

	useEffect(() => {
		if (selctedSorting === "") {
			return null;
		} else if (selctedSorting === "DataUp") {
			return console.log("po dacie od najstarszy");
		} else if (selctedSorting === "DataDown") {
			return console.log("po dacie od najnowszych");

		} else if (selctedSorting === "Z-->A") {
			const compare = (a, b) => {
				if (a.name < b.name) {
					return -1;
				}
			};
			const sortedArrayAZ = dateSelected.sort(compare)
			//The spread operator is necessary because I set the same array only in a changed order, 
			//so react does not see the changes and does not refresh the view. 
			//As a result, it will not display the sorted products to the user.
			return setDateSelected([...sortedArrayAZ]);

		} else if (selctedSorting === "Z-->A") {
			console.log(selctedSorting)
			const compareZA = (a, b) => {
				return a.name > b.name
				// if (a.name > b.name) {
				// 	return -1;

				// }
			}
			const sortedArrayZA = dateSelected.sort(compareZA)
			return setDateSelected([...sortedArrayZA])

		} else if (selctedSorting === "KalorieUp") {
			return console.log("Kalorie rosnąco");
		} else if (selctedSorting === "KalorieDown") {
			return console.log("Kalorie malejąco");
		}
	}, [selctedSorting]);

	const handleSortType = (e) => {
		console.log(selctedSorting);
		setSelctedSorting(e.target.value);
	};

	return (
		<Grid container justifyContent="flex-end" xs={6} item>
			<Grid item>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">Sortuj</InputLabel>

					<Select
						size="small"
						style={{ width: 130 }}
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						label="Data"
						value={selctedSorting}
						onChange={(e) => handleSortType(e)}
					>
						{selectMenuItem.map((item) => item)}
					</Select>
				</FormControl>
			</Grid>
		</Grid>
	);
};

SortProducts.propTypes = {
	dateSelected: PropTypes.array,
	setDateSelected: PropTypes.func,
};

export default SortProducts;
