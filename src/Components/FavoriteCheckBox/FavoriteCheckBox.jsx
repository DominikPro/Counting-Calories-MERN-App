import React from "react";
//=============================================
import { useDispatch, useSelector } from "react-redux";
//=============================================
import { changeProductFavorite } from "../../Redux/actions/productActions";
//=============================================
import { Checkbox } from "@mui/material/";
import { FavoriteBorder, Favorite } from "@mui/icons-material/";
//=============================================

const FavoriteCheckBox = ({ productId, listType }) => {
	const label = { inputProps: { "aria-label": "Checkbox demo" } };

	const product = useSelector((state) => state.products.find((item) => item.id === productId));

	const dispatch = useDispatch();
	const HandleChackBox = () => {
		dispatch(changeProductFavorite(productId));
	};

	return (
		<>
			{console.log(product.favorite)}
			<Checkbox
				onChange={() => HandleChackBox()}
				checked={product.favorite}
				productId={productId}
				size="small"
				{...label}
				icon={<FavoriteBorder />}
				checkedIcon={<Favorite />}
			/>
		</>
	);
};

export default FavoriteCheckBox;
