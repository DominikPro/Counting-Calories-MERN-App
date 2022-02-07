import React from "react";
//====================================================
import { Box, ImageList, ImageListItem, ImageListItemBar, Container } from "@mui/material/";
//====================================================
import Header from "../Components/Header/Header";
//====================================================
import food from "../Images/products/food.jpg";
import food1 from "../Images/products/food1.jpg";
import food2 from "../Images/products/food2.jpg";
import food3 from "../Images/products/food3.jpg";
import food4 from "../Images/products/food4.jpg";
import food5 from "../Images/products/food5.jpg";
import food6 from "../Images/products/food6.jpg";
import food7 from "../Images/products/food7.jpg";
import food8 from "../Images/products/food8.jpg";
import food9 from "../Images/products/food9.jpg";
import food10 from "../Images/products/food10.jpg";
import food11 from "../Images/products/food11.jpg";
import food12 from "../Images/products/food12.jpg";
import food13 from "../Images/products/food13.jpg";
import food14 from "../Images/products/food14.jpg";
//====================================================
const itemData = [
	{
		img: food6,
		title: "Cooking",
		author: "Charles Deluvio",
	},
	{
		img: food7,
		title: "Cocktail",
		author: "Christian Mackie",
	},
	{
		img: food8,
		title: "Pancakes",
		author: "Christian Mackie",
	},
	{
		img: food9,
		title: "Figs",
		author: "Christian Mackie",
	},
	{
		img: food10,
		title: "Scrambled eggs",
		author: "Christian Mackie",
	},
	{
		img: food11,
		title: "Sushi",
		author: "Christian Mackie",
	},
	{
		img: food12,
		title: "Shake",
		author: "Christian Mackie",
	},
	{
		img: food13,
		title: "Coffee",
		author: "Christian Mackie",
	},
	{
		img: food14,
		title: "Beer",
		author: "Christian Mackie",
	},
];

const itemData2 = [
	{
		img: food,
		title: "Dinner",
		author: "Swabdesign",
	},
	{
		img: food1,
		title: "Avocado",
		author: "Pavel Nekoranec",
	},
	{
		img: food2,
		title: "Egs",
		author: "Charles Deluvio",
	},
	{
		img: food3,
		title: "Peanut butter",
		author: "Christian Mackie",
	},
	{
		img: food4,
		title: "Fruit",
		author: "swabdesign",
	},
	{
		img: food5,
		title: "Salmon",
		author: "Pavel Nekoranec",
	},
];

const Home = () => {
	return (
		<>
			<Container maxWidth="lg">
				<Header title="Inspirację dnia codziennego" size={30} variant="h1" />
				<Box sx={{ height: "80vh", overflowY: "scroll" }}>
					<ImageList variant="masonry" cols={3} gap={12}>
						{itemData.map((item) => (
							<ImageListItem key={item.img}>
								<img
									src={`${item.img}?w=248&fit=crop&auto=format`}
									srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
									alt={item.title}
									loading="lazy"
								/>
								<ImageListItemBar
									position="below"
									title={item.author}
								/>
							</ImageListItem>
						))}
					</ImageList>
				</Box>
				<Header title="Trochę więcej tego co zdrowe" size={30} variant="h3" />
				<Box sx={{ height: "80vh", overflowY: "scroll" }}>
					<ImageList variant="masonry" cols={3} gap={12}>
						{itemData2.map((item) => (
							<ImageListItem key={item.img}>
								<img
									src={`${item.img}?w=248&fit=crop&auto=format`}
									srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
									alt={item.title}
									loading="lazy"
								/>
								<ImageListItemBar
									position="below"
									title={item.author}
								/>
							</ImageListItem>
						))}
					</ImageList>
				</Box>
			</Container>
		</>
	);
};
export default Home;
