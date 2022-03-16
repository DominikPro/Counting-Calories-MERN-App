import React, { useState, useMemo } from "react";
//=============================================
import { useSelector } from "react-redux";
//=============================================
import Table from "../Table/Table";
import SortProductList from "../Sort/SortProductList/SortProductList";
import Searching from "../ProductDishListComponents/Searching/Searching";
//=============================================
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";

const TabsProductsDishes = () => {
	const [value, setValue] = useState("1");
	//============================================================================================

	let products = useSelector((state) => state.products);
	const [productList, setProductList] = useState(useSelector((state) => state.products));

	useMemo(() => {
		setProductList(products);
	}, [products]);

	useMemo(() => {
		products = productList;
	}, [productList]);

	//============================================================================================

	let dishes = useSelector((state) => state.dishes);
	const [dsishesList, setDishesList] = useState(useSelector((state) => state.dishes));

	useMemo(() => {
		setDishesList(dishes);
	}, [dishes]);

	useMemo(() => {
		dishes = dsishesList;
	}, [dsishesList]);

	//============================================================================================
	const filterProdctsOrdishes = () => {};

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<>
			<TabContext value={value}>
				<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
					<TabList onChange={handleChange} aria-label="lab API tabs example">
						<Tab label="Produkty" value="1" />
						<Tab label="Dania" value="2" />
					</TabList>
				</Box>
				<TabPanel value="1">
					<Searching items={productList} />
					<SortProductList productList={productList} setProductList={setProductList} />
					<Table data={products} listType="products" />
				</TabPanel>
				<TabPanel value="2">
					<Searching items={dsishesList} />
					<SortProductList productList={dsishesList} setProductList={setProductList} />
					<Table data={dishes} listType="dish" />
				</TabPanel>
			</TabContext>
		</>
	);
};
export default TabsProductsDishes;
