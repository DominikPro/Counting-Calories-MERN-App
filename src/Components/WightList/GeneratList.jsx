import React from "react";
//=============================================
import { List, ListItem, ListItemAvatar, ListItemText, IconButton } from "@mui/material/";
//=============================================
import MonitorWeightIcon from "@mui/icons-material/MonitorWeight";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import EditDialogWindowWeight from "./EditDialogWindowWeight";
//=============================================

const GeneratList = ({ dataToDisplay, handleClcikRemove, handleClcikEdit }) => {
	return (
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
										id={item.id}
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
									<EditDialogWindowWeight
										editedWeightId={
											item.id
										}
									/>
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
								primary={`${item.weight} kg`}
								secondary={item.date}
							/>
						</ListItem>
					</ul>
				);
			})}
		</li>
	);
};

export default GeneratList;
