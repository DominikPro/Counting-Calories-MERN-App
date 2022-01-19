import React, { useState } from "react";
//=============================================
import { Button, TextField, Grid, Container } from "@mui/material/";
//=============================================
import { useDispatch } from "react-redux";
import { addWeight } from "../../Redux/actions/weightActions";
//=============================================
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";
//=============================================
import WightList from "../WightList/WightList";
import Header from "../Header/Header";
//=============================================

const WightInput = () => {
	const dispatch = useDispatch();
	const [weight, setWeight] = useState({ id: "", weight: "", date: "" });

	const handleChange = (e) => {
		setWeight({ id: uuidv4(), weight: e.target.value, date: dayjs().format("DD.MM.YYYY") });
	};

	return (
		<Container maxWidth="xs">
			<Header title="Pomiar wagi" size={18} />
			<Grid
				alignItems={"center"}
				justifyContent={"center"}
				spacing={1}
				container
				flexDirection={"column"}
			>
				<Grid item style={{ display: "flex" }}>
					<TextField
						onChange={(e) => handleChange(e)}
						name="ActualWight"
						type="number"
						inputProps={{ min: "0", step: "0.1" }}
						style={{ marginBottom: "10px" }}
						id="filled-basic"
						label="Waga w kg:"
						variant="outlined"
						fullWidth
						required
					/>
				</Grid>

				<Grid item>
					<Button
						onClick={() => dispatch(addWeight(weight))}
						variant="outlined"
					>
						Dodaj wagę
					</Button>
				</Grid>
			</Grid>
			<WightList />
		</Container>
	);
};

export default WightInput;
