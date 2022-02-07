import React, { useState } from "react";
//=============================================
import { Button, TextField, Grid, Container, Divider } from "@mui/material/";
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
	const [validation, setValidation] = useState();
	const [weight, setWeight] = useState({ id: "", weight: "", date: "" });

	const validationInput = () => {
		if (weight.weight === "" || weight.weight < 0 || weight.weight > 300) {
			setValidation(true);
		} else setValidation(false);
	};

	const handleChange = (e) => {
		setWeight({ id: uuidv4(), weight: e.target.value, date: dayjs().format("DD.MM.YYYY") });
	};

	const handleAddWeightToList = () => {
		if (validation === false) {
			dispatch(addWeight(weight));
			validationInput();
			setWeight({
				id: "",
				weight: "",
				date: "",
			});
		} else alert("Uzupełnij poprawnie pole wagi.");
	};

	return (
		<Container maxWidth="xs">
			<Header title="Pomiar wagi" size={18} variant="h3" />
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
						value={weight.weight}
						name="ActualWight"
						type="number"
						inputProps={{ min: "0", step: "0.1", max: "300" }}
						style={{ marginBottom: "10px", width: 180 }}
						id="filled-basic"
						label="Waga w kg:"
						variant="outlined"
						fullWidth
						required
						onBlur={() => validationInput()}
						error={validation}
					/>
				</Grid>

				<Grid item mb={1}>
					<Button
						onClick={() => {
							handleAddWeightToList();
						}}
						variant="outlined"
					>
						Dodaj wagę
					</Button>
				</Grid>
			</Grid>
			<Divider />
			<WightList />
		</Container>
	);
};

export default WightInput;
