import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
//=============================================
import { useSelector } from "react-redux";
//=============================================
import dayjs from "dayjs";
//=============================================
import { CircularProgress, Typography, Box, Tooltip } from "@mui/material/";
//=============================================

function CircularProgressCalorie({ valueProgress, usedCalorieInPercent }) {
	const userCalorieLimit = useSelector((state) => state.userSettings.dailyAmountOfCalories);
	const userName = useSelector((state) => state.userSettings.name);
	const [color, setColor] = useState("success");
	const [message1, setMessage1] = useState("");
	const [message2, setMessage2] = useState("");

	useEffect(() => {
		if (usedCalorieInPercent === 0) {
			setMessage1("Nie dodałeś dziś jeszcze rzadnych produktów do listy");
		} else if (usedCalorieInPercent > 0 && usedCalorieInPercent <= 25) {
			setMessage1(`Hej ${userName}! Wykorzystałeś `);
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

	if (userCalorieLimit > 0) {
		return (
			<Box mb={1} display="flex" justifyContent="center" alignItems="center">
				<Tooltip title={"Ustawienia zmienisz w zakładce Użytkownik"} placement="left">
					<Box mr={1}>
						<Typography
							variant="overline"
							component="div"
							color="text.secondary"
						>
							{message1}
						</Typography>
					</Box>
				</Tooltip>

				{usedCalorieInPercent ? (
					<>
						<Box
							sx={{
								position: "relative",
								display: "inline-flex",
							}}
						>
							<CircularProgress
								value={valueProgress}
								color={color}
								variant="determinate"
								{...usedCalorieInPercent}
								// {...usedCalorieInPercent}
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
									{`${Math.round(
										usedCalorieInPercent
									)}%`}
								</Typography>
							</Box>
						</Box>
					</>
				) : null}
				<Box ml={1}>
					<Typography variant="overline" component="div" color="text.secondary">
						{message2}
					</Typography>
				</Box>
			</Box>
		);
	} else return null;
}

CircularProgressCalorie.propTypes = {
	/**
	 * The value of the progress indicator for the determinate variant.
	 * Value between 0 and 100.
	 * @default 0
	 */
	usedCalorieInPercent: PropTypes.number,
};

export default function CircularStatic() {
	const [progress, setProgress] = useState(5);
	const actDate = dayjs().format("DD.MM.YYYY");
	const dailyCaloriesLimit = useSelector((state) => state.userSettings.dailyAmountOfCalories);
	const toDayData = useSelector((state) => state.calories.filter((item) => item.date === actDate));

	useEffect(() => {
		setProgress(calcCalorie(0));
	}, [toDayData]);

	const calcCalorie = () => {
		if (toDayData.length > 0) {
			const usedCalorie = toDayData
				.map((item) => {
					let sum = (item.defaultPortion * item.caloriesIn100) / 100;
					return sum;
				})
				.reduce((a, b) => {
					return a + b;
				});

			let usedCalorieInPercent = Math.round(usedCalorie / (dailyCaloriesLimit / 100));
			return usedCalorieInPercent;
		} else return 0;
	};

	return <CircularProgressCalorie valueProgress={progress} usedCalorieInPercent={progress} />;
}
