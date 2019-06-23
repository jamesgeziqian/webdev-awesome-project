import {connect} from "react-redux";
import {
    searchBusinessDetails,
    searchLocationLocal,
    searchNearBy,
    searchTermLocal
} from "../actions/SearchActions";
import {checkProfile, login_status, logout_status} from "../actions/LoginAction";
import {createRestaurant, findRestaurant} from "../actions/RestaurantActions";
import YelpService from "../services/YelpService";
import RestaurantService from "../services/RestaurantService";
import UserService from "../services/UserService";
import RestaurantDetailComponent from "../components/RestaurantDetailComponent";

const stateToProperty = (state) => {
    return {
        searchTerm: state.SearchReducer.searchTerm,
        location: state.SearchReducer.location,
        results: state.SearchReducer.results,
        restaurant: state.RestaurantReducer.restaurant,
        user: state.LoginReducer.user
    };
};

const yelpService = YelpService.getInstance();
const restaurantService = RestaurantService.getInstance();
const userService = UserService.getInstance();

const dispatchToProperty = (dispatch) => {
    return {
        handlers: {
            searchTermLocal: (searchTerm) => dispatch(searchTermLocal(searchTerm)),
            searchLocationLocal: (location) => dispatch(searchLocationLocal(location)),
            searchBusiness: (searchTerm, location) => yelpService.searchBusiness(searchTerm, location)
                .then((results) => dispatch(searchNearBy(results))),
            searchBusinessById: (id) => yelpService.searchBusinessDetails(id)
                .then((result) => dispatch(searchBusinessDetails(result))),

            findRestaurant: (yelpId) => restaurantService.findRestaurantById(yelpId)
                .then((result) => {
                    console.log("here");
                    console.log(typeof result);
                    console.log(result);
                    dispatch(findRestaurant(result))
                }),
            checkLogin: () => userService.profile_current_user()
                .then((res) => dispatch(checkProfile(res))),
            claimRestaurant: (yelpId, name) => restaurantService.claimRestaurant(yelpId, name)
                .then((restaurant) => dispatch(createRestaurant(restaurant)))
        }
    };
};

const RestaurantDetailContainer = connect(stateToProperty, dispatchToProperty)(RestaurantDetailComponent);

export default RestaurantDetailContainer;
