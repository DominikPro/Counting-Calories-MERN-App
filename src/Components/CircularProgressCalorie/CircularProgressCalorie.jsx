import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
//=============================================
import dayjs from "dayjs";
//=============================================
// import { amber } from "@mui/material/colors";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
//=============================================

function CircularProgressCalorie(props) {
	const { usedCalorieInPercent } = props;
	const userName = useSelector((state) => state.userSettings.name);
	const [color, setColor] = useState("success");
	const [message1, setMessage1] = useState("");
	const [message2, setMessage2] = useState("");

	useEffect(() => {
		if (usedCalorieInPercent === 0) {
			setMessage1("Nie dodałeś szisiaj jeszcze rzadnych produktów do listy");
		} else if (usedCalorieInPercent > 0 && usedCalorieInPercent <= 25) {
			setMessage1(`Hej, ${userName}! Wykorzystałeś `);
			setMessage2("kalorii");
		} else if (usedCalorieInPercent > 25 && usedCalorieInPercent <= 75) {
			setMessage1("Wykorzystałeś");
			setMessage2("dostepnych kalori na dziś");
			setColor("info");
		} else if (usedCalorieInPercent > 75 && usedCalorieInPercent < 90) {
			setMessage1("Wykorzystałeś");
			setMessage2("niewiele juz zostało");
			setColor("secondary");
		} else if (usedCalorieInPercent > 90 && usedCalorieInPercent <= 100) {
			setMessage1("Wykorzystałeś już");
			setMessage2(" kalorii zwolnij!");
			setColor("warning");
		} else if (usedCalorieInPercent > 100) {
			setMessage1(`${userName} przekroczyłeś limit kalori`);
			setMessage2("O jedno Ciasteczko za dużo?");
			setColor("error");
		}
	}, [usedCalorieInPercent]);

	return (
		<Box display="flex" justifyContent="center" alignItems="center">
			<Box mr={1}>
				<Typography variant="overline" component="div" color="text.secondary">
					{message1}
				</Typography>
			</Box>
			{usedCalorieInPercent === 0 ? null : (
				<>
					<Box sx={{ position: "relative", display: "inline-flex" }}>
						<CircularProgress
							color={color}
							variant="determinate"
							{...props}
						/>
						<Box
							sx={{
								top: 0,
								left: 0,
								bottom: 0,
								right: 0,
								position: "absolute",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<Typography
								variant="overline"
								component="div"
								color="text.secondary"
							>
								{`${Math.round(usedCalorieInPercent)}%`}
							</Typography>
						</Box>
					</Box>
				</>
			)}
			<Box ml={1}>
				<Typography variant="overline" component="div" color="text.secondary">
					{message2}
				</Typography>
			</Box>
		</Box>
	);
}

CircularProgressCalorie.propTypes = {
	/**
	 * The value of the progress indicator for the determinate variant.
	 * Value between 0 and 100.
	 * @default 0
	 */
	value: PropTypes.number.isRequired,
};

export default function CircularStatic() {
	const [progress, setProgress] = useState(); // Przyjmuje number - wartość 1-100. Genereuje na tej podstawie okrą w %.
	const actDate = dayjs().format("DD.MM.YYYY"); // Generuje dzisiejszą datę.
	const dailyCaloriesLimit = useSelector((state) => state.userSettings.dailyAmountOfCalories); // limit kalorii
	const toDayData = useSelector((state) => state.calories.filter((item) => item.date === actDate)); // Tablica obietków z dzisiejszą datą

	const calcCalorie = () => {
		console.log(toDayData);
		if (toDayData.length > 0) {
			const usedCalorie = toDayData
				.map((item) => {
					let sum = (item.defaultPortion * item.caloriesIn100) / 100; // Oblicza kalorie dla poszególnego produktu i zwraca tablice sum.
					return sum;
				})
				.reduce((a, b) => {
					return a + b; // sumuje pozycje tablice zwraca number / wartość zjedzonych kalorii.
				});

			const usedCalorieInPercent = Math.round(usedCalorie / (dailyCaloriesLimit / 100));
			return usedCalorieInPercent;
		} else return setProgress(0);
	};

	// const usedCalorie = toDayData
	// 	.map((item) => {
	// 		let sum = (item.defaultPortion * item.caloriesIn100) / 100; // Oblicza kalorie dla poszególnego produktu i zwraca tablice sum.
	// 		return sum;
	// 	})
	// 	.reduce((a, b) => {
	// 		return a + b; // sumuje pozycje tablice zwraca number / wartość zjedzonych kalorii.
	// 	});

	// const usedCalorieInPercent = Math.round(usedCalorie / (dailyCaloriesLimit / 100)); // Oblicza ile procent z dostępnych kalorii zostało zużyte

	useEffect(() => {
		setProgress(calcCalorie());
		console.log(calcCalorie());
	}, [toDayData]);

	console.log(actDate);
	console.log(toDayData);
	console.log(dailyCaloriesLimit);

	return <CircularProgressCalorie value={progress} usedCalorieInPercent={progress} />;
}
