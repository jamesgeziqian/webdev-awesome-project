import {combineReducers} from "redux";
import RestaurantReducer from "./RestaurantReducer";
import OrderReducer from "./OrderReducer";
import MenuReducer from "./MenuReducer";
import SearchReducer from "./SearchReducer";

const reducer = combineReducers({RestaurantReducer, OrderReducer, MenuReducer, SearchReducer});

export default reducer;
