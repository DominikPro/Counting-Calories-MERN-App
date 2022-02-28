import React, { lazy, Suspense } from "react";
//==========================================
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
//==========================================
import Navigation from "./Components/Navigation/Navigation.jsx";
import Home from "./Pages/Home";
import Statistic from "./Pages/Statistic";
import AddProduct from "./Pages/AddProduct";
import AddCalorie from "./Pages/AddCalorie";
import ProductDishList from "./Pages/ProductDishList";
import User from "./Pages/User";
import DishConfiguration from "./Pages/DishConfiguration";
import ProgresBar from "./Components/ProgresBar/ProgresBar.jsx"
//==========================================
// const Navigation = lazy(() => import("./Components/Navigation/Navigation.jsx"));
// const Home = lazy(() => import("./Pages/Home"));
// const Statistic = lazy(() => import("./Pages/Statistic"));
// const AddProduct = lazy(() => import("./Pages/AddProduct"));
// const AddCalorie = lazy(() => import("./Pages/AddCalorie"));
// const ProductDishList = lazy(() => import("./Pages/ProductDishList"));
// const DishConfiguration = lazy(() => import("./Pages/DishConfiguration"));
// const User = lazy(() => import("./Pages/User"));

//==========================================

//==========================================

const App = () => {
	return (
		<>
			{/* <Suspense fallback={<ProgresBar />}> */}


			<CssBaseline />
			<Router>
				<Navigation />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/addProduct" component={AddProduct} />
					<Route path="/addCalorie" component={AddCalorie} />
					<Route path="/ProductDishList" component={ProductDishList} />
					<Route path="/statistic" component={Statistic} />
					<Route path="/dishConfiguration" component={DishConfiguration} />
					<Route path="/user" component={User} />
				</Switch>
			</Router>

			{/* </Suspense> */}

		</>
	);
};

export default App;
