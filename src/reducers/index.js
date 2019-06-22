import {combineReducers} from "redux";
import RestaurantReducer from "./RestaurantReducer";
import OrderReducer from "./OrderReducer";
import MenuReducer from "./MenuReducer";
import SearchReducer from "./SearchReducer";
import LoginReducer from "./LoginReducer";

const reducer = combineReducers({RestaurantReducer, OrderReducer, MenuReducer, SearchReducer,LoginReducer});

export default reducer;
