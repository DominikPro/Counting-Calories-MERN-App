import React, { useState } from "react";
//=============================================
import { useSelector } from "react-redux";
//=============================================
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import { Favorite } from "@mui/icons-material/";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";

const FavoriteList = ({ addtoform }) => {
	const [open, setOpen] = useState(false);
	const favoriteProducts = useSelector((state) => state.products.filter((item) => item.favorite === true));

	const handleClick = (e) => {
		const selectedProductId = Number(e.target.id);
		addtoform(favoriteProducts.find((item) => item.id === selectedProductId));
		setOpen(!open);
	};

	return (
		<List
			sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
			component="nav"
			aria-labelledby="nested-list-subheader"
		>
			<ListItemButton onClick={handleClick}>
				<ListItemIcon>
					<Favorite />
				</ListItemIcon>
				<ListItemText primary="Lista ulubionych produktów" />
				{open ? <ExpandLess /> : <ExpandMore />}
			</ListItemButton>

			<Collapse in={open} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					{favoriteProducts.map((item) => {
						return (
							<ListItemButton sx={{ pl: 4 }}>
								<ListItemText primary={item.name} />
								<Button
									id={item.id}
									onClick={(e) =>
										handleClick(e)
									}
									size="small"
									variant="outlined"
								>
									Wybierz
								</Button>
							</ListItemButton>
						);
					})}
				</List>
			</Collapse>
		</List>
	);
};
export default FavoriteList;
