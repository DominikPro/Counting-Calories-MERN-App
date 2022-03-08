import React, { useState } from "react";
//=============================================
import { useDispatch, useSelector } from "react-redux";
//=============================================
import SerchedItems from "./SerchedItems";
//=============================================
import { Container, Box, Grid, Divider, TextField, InputLabel } from "@mui/material/";
//=============================================

const Searching = () => {
	const [serchedProductName, setSerchedProductName] = useState("");
	const dishes = useSelector((state) => state.dishes);

	return (
		<>
			<TextField
				onChange={(e) => {
					setSerchedProductName(e.target.value);
				}}
				value={serchedProductName}
				style={{ marginBottom: "20px" }}
				// ref={serchedProductRef}
				id="filled-basic"
				label="Wyszukaj produkt:"
				variant="outlined"
				color="secondary"
				size="large"
				fullWidth
			/>
			<Grid container xs={12}>
				<Divider />
			</Grid>
			{dishes
				.filter((dishes) => {
					if (serchedProductName === "" || serchedProductName.length <= 1) {
						return "";
					} else if (dishes.name.toLowerCase().includes(serchedProductName.toLowerCase())) {
						return dishes;
					}
				})
				.map((dishes) => {
					return <SerchedItems />;
				})}
		</>
	);
};
export default Searching;
