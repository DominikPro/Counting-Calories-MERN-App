import React from "react";
//=============================================
import Header from "../Header/Header";
//=============================================
import { Typography, Paper, Grid } from "@mui/material/";
//=============================================

const NewsArticul = () => {
	return (
		<>
			<Grid xs={12} container direction="column" justifyContent="center" alignItems="center">
				<Paper vriant="elevation" elevation={8} sx={{ padding: "20px", marginTop: { xs: "25px", md: "50px" } }}>
					<Grid item xs={12}>
						<Header title="Twórz swoje przepis" size={20} variant="h2" />
					</Grid>
					<Grid container xs={12} justifyContent="center" alignItems="center">
						<Grid item xs={12} sm={11} md={10}>
							<Typography
								alignSelf={"center"}
								variant="subtitle1"
								sx={{
									fontSize: {
										md: 20,
										sm: 17,
										xs: 15,
									},
								}}>
								Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making
								it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
								words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable
								source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
								written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
								"Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced
								below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact
								original form, accompanied by English versions from the 1914 translation by H. Rackham.
							</Typography>
						</Grid>
					</Grid>
				</Paper>
			</Grid>
		</>
	);
};
export default NewsArticul;