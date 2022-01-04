import React from "react";
import PropTypes from "prop-types";
//=============================================
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

const SerchedItem = ({ product, addtoform, setSerchedProductName }) => {
	console.log(product);
	return (
		<>
			<Grid container alignItems="center" justifyContent="center" key={product.name}>
				<Grid item xs={6}>
					{product.name}
				</Grid>
				<Grid item xs={2}>
					<Button
						onClick={() => {
							addtoform(product);
							setSerchedProductName("");
						}}
						variant="outlined"
					>
						Wybierz
					</Button>
				</Grid>
			</Grid>

			<Divider />
		</>
	);
};

SerchedItem.propTypes = {
	product: PropTypes.array,
	addtoform: PropTypes.func,
	setSerchedProductName: PropTypes.func,
};

export default SerchedItem;
