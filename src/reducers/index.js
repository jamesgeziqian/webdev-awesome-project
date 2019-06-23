import {combineReducers} from "redux";
import RestaurantReducer from "./RestaurantReducer";
import SearchReducer from "./SearchReducer";
import LoginReducer from "./LoginReducer";

const reducer = combineReducers({RestaurantReducer, SearchReducer,LoginReducer});

export default reducer;
