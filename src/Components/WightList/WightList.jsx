import React from "react";
//=============================================
import { useSelector, useDispatch } from "react-redux";
import { editWeight, removeWeight } from "../../Redux/actions/weightActions";
//=============================================
import Header from "../Header/Header";
import GeneratList from "./GeneratList";
//=============================================
import { List } from "@mui/material/";
//=============================================

export default function InteractiveList() {
	const dispatch = useDispatch();
	const dataToDisplay = useSelector((state) => state.weightReducer);

	const handleClcikRemove = (item) => {
		dispatch(removeWeight(item));
	};

	const handleClcikEdit = (item) => {
		dispatch(editWeight(item));
	};

	return (
		<>
			<Header title={"Lista pomiarów:"} size={18} variant="h3" />
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
				{dataToDisplay.length > 0 ? (
					<GeneratList
						dataToDisplay={dataToDisplay}
						handleClcikRemove={handleClcikRemove}
						handleClcikEdit={handleClcikEdit}
					/>
				) : (
					<Header title={"Brak pomiarów"} size={14} variant="h4" />
				)}
			</List>
		</>
	);
}
