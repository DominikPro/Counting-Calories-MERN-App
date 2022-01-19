import React from "react";
//=============================================
import { useSelector, useDispatch } from "react-redux";
import { editWeight, removeWeight } from "../../Redux/actions/weightActions";
//=============================================
import Header from "../Header/Header";
//=============================================
import { List, ListItem, ListItemAvatar, ListItemText, IconButton } from "@mui/material/";
//=============================================
import MonitorWeightIcon from "@mui/icons-material/MonitorWeight";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
//=============================================

export default function InteractiveList() {
	const dispatch = useDispatch();
	const dataToDisplay = useSelector((state) => state.weightReducer);

	const handleClcikRemove = (item) => {
		dispatch(removeWeight(item));
		console.log(item);
	};

	const handleClcikEdit = (item) => {
		dispatch(editWeight(item));
		console.log(item);
	};

	// wdrożenie wyświetlania informacji o braku dosępnych pomiarów
	// stworzyć state i przypisywać mu wartość komponentu map - jesli długość dataToDisplay >0 lub info o braku jesli dataTodisplay <= 0

	return (
		<>
			<Header title={"Lista pomiarów:"} size={18} />
			<List
				sx={{
					width: "100%",
					maxWidth: 360,
					bgcolor: "background.paper",
					position: "relative",
					overflow: "auto",
					maxHeight: 300,
					"& ul": { padding: 0 },
				}}
				subheader={<li />}
			>
				<li>
					{dataToDisplay.reverse().map((item) => {
						return (
							<ul key={item.id}>
								<ListItem
									secondaryAction={
										<>
											<IconButton
												onClick={() =>
													handleClcikRemove(
														item
													)
												}
												id={
													item.id
												}
												edge="end"
												aria-label="usuń pomiar"
												color="error"
											>
												<DeleteIcon
													style={{
														marginRight: 10,
														marginLeft: 10,
													}}
												/>
											</IconButton>

											<IconButton
												onClick={() =>
													handleClcikEdit(
														item
													)
												}
												id={
													item.id
												}
												edge="end"
												aria-label="Edytuj pomiar"
												color="success"
											>
												<EditIcon
													style={{
														marginRight: 10,
														marginLeft: 10,
													}}
												/>
											</IconButton>
										</>
									}
								>
									<ListItemAvatar>
										<MonitorWeightIcon
											fontSize="large"
											color="info"
										/>
									</ListItemAvatar>
									<ListItemText
										primary={`${item.weight}kg`}
										secondary={
											item.date
										}
									/>
								</ListItem>
							</ul>
						);
					})}
				</li>
			</List>
		</>
	);
}
