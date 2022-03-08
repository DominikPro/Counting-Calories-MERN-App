/* eslint-disable no-lone-blocks */
import React, { useEffect } from "react";
//=============================================
import { useDispatch, useSelector } from "react-redux";
//=============================================
import { changeProductFavorite } from "../../Redux/actions/productActions";
import { changeDishFavorite } from "../../Redux/actions/dishActions";
//=============================================
import { Checkbox } from "@mui/material/";
import { FavoriteBorder, Favorite } from "@mui/icons-material/";
//=============================================

const FavoriteCheckBox = ({ productId, listType }) => {
	let product = useSelector((state) => state.products.find((item) => item.id === productId));
	let dish = useSelector((state) => state.dishes.find((item) => item.id === productId));

	const dispatch = useDispatch();
	const HandleChackBox = () => {
		if (listType === "Products") {
			console.log("lista productsss");
			console.log(listType);
			return dispatch(changeProductFavorite(productId));
		} else if (listType === "Dish") {
			console.log("lista dish");
			return dispatch(changeDishFavorite(productId));
		}
	};

	{
		if (listType == "Products") {
			return (
				<>
					<Checkbox
						onChange={() => HandleChackBox()}
						checked={product.favorite}
						productId={productId}
						size="small"
						// {...label}
						icon={<FavoriteBorder />}
						checkedIcon={<Favorite />}
					/>
				</>
			);
		} else if (listType === "Dish") {
			return (
				<>
					<Checkbox
						onChange={() => HandleChackBox()}
						checked={dish.favorite}
						productId={productId}
						size="small"
						// {...label}
						icon={<FavoriteBorder />}
						checkedIcon={<Favorite />}
					/>
				</>
			);
		} else return null;
	}
};

export default FavoriteCheckBox;
