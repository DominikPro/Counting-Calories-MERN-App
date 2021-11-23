import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
//====================================================

const ProductAdded = () => {
	return (
		<>
			<Container maxWidth="lg">
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignContent: "center",
						justifyContent: "center",
						textAlign: "center",
						height: 200,
						width: 280,
						bgcolor: "#d4edfd",
						borderRadius: 16,
					}}
				>
					<Typography variant="h4">Produkt dodany</Typography>
				</Box>
			</Container>
		</>
	);
};

export default ProductAdded;
