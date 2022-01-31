import React, { useState } from "react";
//=============================================
import { FormControl, Grid, Select, InputLabel } from "@mui/material";
//=============================================

const SortProductList = () => {
	const [hidSortSelection, setHidSortSelection] = useState(false);
	const [selectedSorting, setSelectedSorting] = useState("");

	const handleSortType = () => {};
	return (
		<Grid container justifyContent="flex-end">
			<Grid item>
				<InputLabel id="Sort-Products">Soruj</InputLabel>
				<FormControl fullWidth>
					<Select
						size="small"
						disabled={hidSortSelection}
						style={{ width: 130 }}
						labelId="Sort-Products"
						label="Sort-Product-List"
						value={selectedSorting}
						onChange={(e) => handleSortType(e)}
					></Select>
				</FormControl>
			</Grid>
		</Grid>
	);
};

export default SortProductList;
