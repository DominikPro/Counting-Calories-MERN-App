import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
//=============================================
import { Grid, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
//=============================================
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import sortConditions from "../shared/sortConditions";
//=============================================

//The component takes two parameters (useState) from the parent component. An array of objects and a state update method that will set the sorted array.
const SortStatistic = ({ setDataSelected, dataSelected }) => {
	const [selectMenuItem, setSelectMenuItem] = useState([]);
	const [selectedSorting, setSelectedSorting] = useState("");
	const [hidSortSelection, setHidSortSelection] = useState(false);
	const [sortingForDate, setSortingForDate] = useState();

	//UseEffect generates the component MenuItem. Because the map of the object table directly
	//in the select component is impossible.In the first  select render, the value of the map object is not accessed. We get an error.

	useEffect(() => {
		if (
			dataSelected.length > 0 &&
			sortingForDate !== dataSelected[0].date &&
			dataSelected[0].listType !== "Products"
		) {
			setHidSortSelection(false);
			setSortingForDate(dataSelected[0].date);
		} else if (dataSelected.length === 0) {
			setHidSortSelection(true);
		}
	}, [dataSelected]);

	useEffect(() => {
		setSelectedSorting("");
	}, [sortingForDate]);

	useEffect(() => {
		const sortOptions = [
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
					data-testid="select"
				>
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

	useEffect(() => {
		sortConditions(selectedSorting, dataSelected, setDataSelected);
	}, [selectedSorting]);

	const handleSortType = (e) => {
		setSelectedSorting(e.target.value);
	};

	return (
		<Grid container justifyContent="flex-end" xs={6} item>
			<Grid item>
				<FormControl fullWidth>
					<InputLabel id="Sort-Statistic">Sortuj</InputLabel>

					<Select
						size="small"
						disabled={hidSortSelection}
						style={{ width: 130 }}
						labelId="Sort-Statistic"
						id="demo-simple-select"
						label="Drop down sort list"
						value={selectedSorting}
						onChange={(e) => handleSortType(e)}
					>
						{selectMenuItem.map((item) => item)}
					</Select>
				</FormControl>
			</Grid>
		</Grid>
	);
};

SortStatistic.propTypes = {
	dataSelected: PropTypes.array,
	setDataSelected: PropTypes.func,
};

export default SortStatistic;
