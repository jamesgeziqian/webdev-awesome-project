import {combineReducers} from "redux";
import RestaurantReducer from "./RestaurantReducer";
import OrderReducer from "./OrderReducer";
import MenuReducer from "./MenuReducer";

const reducer = combineReducers({RestaurantReducer, OrderReducer, MenuReducer});

export default reducer;
