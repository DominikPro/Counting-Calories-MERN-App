import React, { useState, useEffect } from "react";
//=============================================
import dayjs from "dayjs";
//=============================================
import { useSelector } from "react-redux";
//=============================================
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SelectDate = ({ dateSelected, setDateSelected }) => {
	const data = useSelector((state) => state.calories);
	const [datesAvailable, setDatesAvailable] = useState(true);
	const [selectedDay, setSelectedDay] = useState();
	const distinctDate = [...new Set(data.map((item) => item.date))];

	const handleChange = (e) => {
		setSelectedDay(e.target.value);
	};

	let productsForTheDate = data.filter((product) => {
		if (product.date === selectedDay) {
			console.log(data.length);
			return product;
		}
	});

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
						style={{ width: 150 }}
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={selectedDay}
						label="Data"
						onChange={(e) => handleChange(e)}
					>
						{datesAvailable ? (
							distinctDate.map((date) => (
								<MenuItem value={date}>{date}</MenuItem>
							))
						) : (
							<MenuItem>Brak danych</MenuItem>
						)}
					</Select>
				</FormControl>
			</Grid>
			<Grid xs={4} justify="center" item>
				{selectedDay ? null : <h2>Wybierz date</h2>}
			</Grid>
		</Grid>
	);
};

export default SelectDate;
