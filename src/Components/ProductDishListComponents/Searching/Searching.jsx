import React, { useState, useMemo } from "react";
//=============================================
import Table from "../../Table/Table";
//=============================================
import { Container, Box, Grid, Divider, TextField, InputLabel } from "@mui/material/";
//=============================================

const Searching = ({ items }) => {
	const [serchedProductName, setSerchedProductName] = useState("");

	const [filtredItems, setFiltredItems] = useState();

	function findItems() {
		let filtredItems;
		if (serchedProductName !== "" && serchedProductName.length > 1) {
			filtredItems = items.filter((item) => {
				if (item.name.toLowerCase().includes(serchedProductName.toLowerCase())) {
					return item;
				}
			});
		}
		return filtredItems;
	}

	useMemo(() => {
		const findedItems = findItems();
		console.log(items);
		if (findedItems != undefined && findedItems.length > 0 && serchedProductName.length >= 2) {
			setFiltredItems(findedItems);
		} else if (serchedProductName.length <= 2) {
			setFiltredItems([]);
		}
	}, [serchedProductName]);

	return (
		<>
			<Grid container xs={12} direction="row" justifyContent="center" alignItems="center">
				<Grid item>
					<form autoComplete="off">
						<TextField
							onChange={(e) => {
								setSerchedProductName(e.target.value);
							}}
							value={serchedProductName}
							style={{ marginBottom: "20px" }}
							// ref={serchedProductRef}
							id="filled-basic"
							label="Wyszukaj:"
							variant="outlined"
							color="secondary"
							size="small"
						/>
					</form>
				</Grid>
				<Grid item xs={12}>
					<Table data={filtredItems} />
				</Grid>
			</Grid>
		</>
	);
};
export default Searching;
