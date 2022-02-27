import React, { useMemo, useState } from "react";
import { Chip } from "@mui/material/";
import NetworkLockedIcon from "@mui/icons-material/NetworkLocked";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
//=============================================

const DishCalorieCounter = ({ configuredDish }) => {
	const [amountCaloriesInDish, setAmountCaloriesInDish] = useState(0);

	useMemo(() => {
		if (configuredDish.products.length > 0) {
			const calculateTheNumberOfCaloriesInTheProductForTheEnteredWeight = configuredDish.products.map((product) => (product.defaultPortion * product.caloriesIn100) / 100);

			const sumOfCaloriesAllSelectedProducts = calculateTheNumberOfCaloriesInTheProductForTheEnteredWeight.reduce((previousValue, curretnValue) => Math.round(previousValue + curretnValue));

			setAmountCaloriesInDish(sumOfCaloriesAllSelectedProducts);
		} else setAmountCaloriesInDish(0);
	}, [configuredDish]);

	return (
		<>
			<Chip
				sx={{
					boxShadow: 1,
					":hover": {
						boxShadow: 3,
					},
					fontSize: 14,
					minWidth: 230,
					marginTop: "5px",
				}}
				label={`Kalorie: ${amountCaloriesInDish} kcl / 100g`}
				variant="outlined"
				color="primary"
				icon={<HourglassBottomIcon />}
			/>
		</>
	);
};
export default DishCalorieCounter;
