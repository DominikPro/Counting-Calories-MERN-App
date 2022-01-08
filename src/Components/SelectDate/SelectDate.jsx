import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
//=============================================
import { useSelector } from "react-redux";
//=============================================
import { Grid, InputLabel, MenuItem, FormControl, Select } from "@mui/material/";

const SelectDate = ({ dateSelected, setDateSelected }) => {
	const data = useSelector((state) => state.calories);
	const [datesAvailable, setDatesAvailable] = useState(true);
	const [selectedDay, setSelectedDay] = useState("");
	const distinctDate = [...new Set(data.map((item) => item.date))];

	const handleChange = (e) => {
		setSelectedDay(e.target.value);
	};

	let productsForTheDate = data.filter((product) => {
		if (product.date === selectedDay) {
			return product;
		}
	});
	useEffect(() => {
		console.log("aktualizacja stanu");
	}, [data]);

	useEffect(() => {
		setDateSelected(productsForTheDate);
		if (data.length === 0) {
			return setDatesAvailable(false), setSelectedDay(true);
		}
	}, [selectedDay, data]);

	return (
		<Grid container spacing={1} justifyContent="left" alignItems="center">
			<Grid xs={2} item>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">Data</InputLabel>
					<Select
						style={{ width: 130 }}
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={selectedDay}
						label="Data"
						onChange={(e) => handleChange(e)}
					>
						{datesAvailable ? (
							distinctDate.map((date) => (
								<MenuItem key={date} value={date}>
									{date}
								</MenuItem>
							))
						) : (
							<MenuItem>Brak wpisów</MenuItem>
						)}
					</Select>
				</FormControl>
			</Grid>
		</Grid>
	);
};

SelectDate.propTypes = {
	dateSelected: PropTypes.array,
	setDateSelected: PropTypes.func,
};
export default SelectDate;
