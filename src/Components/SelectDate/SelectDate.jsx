import React, { useState, useEffect } from "react";
//=============================================
import dayjs from "dayjs";
//=============================================
import { useSelector } from "react-redux";
//=============================================
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SelectDate = ({ dateSelected, setDateSelected }) => {
	const data = useSelector((state) => state.calories);
	const distinctDate = [...new Set(data.map((item) => item.date))];
	const [selectedDay, setSelectedDay] = useState();

	const handleChange = (event) => {
		setSelectedDay(event.target.value);
	};

	let productsForTheDate = data.filter((product) => {
		if (product.date === selectedDay) {
			return product;
		}
	});

	useEffect(() => {
		setDateSelected(productsForTheDate);
		console.log(productsForTheDate);
		console.log(dateSelected);
	}, [selectedDay]);

	return (
		<Box sx={{ mmaxWidth: 100 }}>
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">Data</InputLabel>
				<Select
					style={{ width: 140 }}
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					displayEmpty
					value={dateSelected}
					label="Data"
					onChange={handleChange}
				>
					{distinctDate.map((date) => (
						<MenuItem value={date}>{date}</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	);
};

export default SelectDate;
