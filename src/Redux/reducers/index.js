import { combineReducers } from "redux";
import userSettingsReducer from "./userSettingsReducer";
import productsReducer from "./productsReducer";
import caloriesReducer from "./caloriesReducer";
import weightReducer from "./weightReducer";
import dishReducer from "./dishReducer";

export default combineReducers({
    userSettings: userSettingsReducer,
    products: productsReducer,
    calories: caloriesReducer,
    dishes: dishReducer,
    weightReducer,
})