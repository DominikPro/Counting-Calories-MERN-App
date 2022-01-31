import React from "react";
//==========================================
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//==========================================
import Navigation from "./Components/Navigation/Navigation.jsx";
import Home from "./Pages/Home";
import Statistic from "./Pages/Statistic";
import AddProduct from "./Pages/AddProduct";
import AddCalorie from "./Pages/AddCalorie";
import ProductList from "./Pages/ProductList";
import User from "./Pages/User";
//==========================================
import CssBaseline from "@mui/material/CssBaseline";
//==========================================

const App = () => {
	return (
		<>
			<CssBaseline />
			<Router>
				<Navigation />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/addProduct" component={AddProduct} />
					<Route path="/addCalorie" component={AddCalorie} />
					<Route path="/productList" component={ProductList} />
					<Route path="/statistic" component={Statistic} />
					<Route path="/user" component={User} />
				</Switch>
			</Router>
		</>
	);
};

export default App;
