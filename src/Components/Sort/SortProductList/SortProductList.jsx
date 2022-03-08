import React, { useState, useEffect, useMemo } from "react";
//=============================================
import sortConditions from "../shared/sortConditions";
import Searching from "../../ProductDishListComponents/Searching/Searching";
//=============================================
import { FormControl, Grid, Select, InputLabel, MenuItem } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

//=============================================

const SortProductList = ({ productList, setProductList }) => {
	const [selectMenuItem, setSelectMenuItem] = useState([]);
	const [hidSortSelection, setHidSortSelection] = useState(false);
	const [selectedSorting, setSelectedSorting] = useState("");

	useEffect(() => {
		const sortOptions = [
			{
				name: "A-->Z",
				icon: <ArrowUpwardIcon fontSize="small" color="primary" style={{ marginLeft: 5 }} />,
				action: "A-->Z",
			},
			{
				name: "Z-->A",
				icon: <ArrowDownwardIcon fontSize="small" color="primary" style={{ marginLeft: 5 }} />,
				action: "Z-->A",
			},
			{
				name: "Kalorie",
				icon: <ArrowUpwardIcon fontSize="small" color="primary" style={{ marginLeft: 5 }} />,
				action: "CalorieUp",
			},
			{
				name: "Kalorie",
				icon: <ArrowDownwardIcon fontSize="small" color="primary" style={{ marginLeft: 5 }} />,
				action: "CalorieDown",
			},
			{
				name: "Ulubione",
				icon: <ArrowUpwardIcon fontSize="small" color="primary" style={{ marginLeft: 5 }} />,
				action: "LikedUp",
			},
			{
				name: "Ulubione",
				icon: <ArrowDownwardIcon fontSize="small" color="primary" style={{ marginLeft: 5 }} />,
				action: "LikedDown",
			},
		];

		//UseEffect generates the component MenuItem. Because the map of the object table directly
		//in the select component is impossible.In the first  select render, the value of the map object is not accessed. We get an error.
		sortOptions.map((item) => {
			setSelectMenuItem((prevState) => [
				...prevState,
				<MenuItem style={{ justifyContent: "center" }} key={item.action} name={item.name} value={item.action} data-testid="select">
					<Grid container>
						<Grid item xs={5}>
							{item.icon}
						</Grid>
						<Grid item xs={7}>
							{item.name}
						</Grid>
					</Grid>
				</MenuItem>,
			]);
		});
	}, []);

	useMemo(() => {
		if (productList.length < 2) {
			setHidSortSelection(true);
		} else if (productList.length > 1) {
			setHidSortSelection(false);
		}
	}, [productList]);

	useEffect(() => {
		sortConditions(selectedSorting, productList, setProductList);
	}, [selectedSorting]);

	const handleSortType = (e) => {
		setSelectedSorting(e.target.value);
	};
	return (
		<Grid container direction="row" justifyContent="space-around" alignItems="flex-end">
			<Grid container justifyContent={{ xs: "center", sm: "space-around" }} xs={12} sm={6} md={5}>
				<Searching />
			</Grid>
			<Grid item container justifyContent={{ xs: "center", sm: "space-around" }} xs={12}>
				<Grid container justifyContent={{ xs: "center", sm: "space-around" }} xs={12} sm={6} md={2}>
					<InputLabel id="Sort-Products">Soruj</InputLabel>
					<FormControl fullWidth>
						<Select size="small" disabled={hidSortSelection} labelId="Sort-Products" label="Sort-Product-List" value={selectedSorting} onChange={(e) => handleSortType(e)}>
							{selectMenuItem.map((item) => item)}
						</Select>
					</FormControl>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default SortProductList;
