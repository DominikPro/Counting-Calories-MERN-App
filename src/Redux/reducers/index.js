import { combineReducers } from "redux";
import userSettingsReducer from "./userSettingsReducer";
import productsReducer from "./productsReducer";
import caloriesReducer from "./caloriesReducer";

export default combineReducers({
    userSettingsReducer,
    productsReducer,
    caloriesReducer,
})