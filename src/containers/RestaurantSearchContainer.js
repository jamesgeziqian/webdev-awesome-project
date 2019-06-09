import {connect} from "react-redux";
import {
    searchLocationLocal,
    searchNearBy,
    searchTermLocal
} from "../actions/SearchActions";
import YelpService from "../services/YelpService";
import RestaurantSearchComponent from "../components/RestaurantSearchComponent";

const stateToProperty = (state) => {
    return {
        searchTerm: state.SearchReducer.searchTerm,
        location: state.SearchReducer.location
    };
};

const yelpService = YelpService.getInstance();

const dispatchToProperty = (dispatch) => {
    return {
        handlers: {
            searchTermLocal: (searchTerm) => dispatch(searchTermLocal(searchTerm)),
            searchLocationLocal: (location) => dispatch(searchLocationLocal(location)),
            searchBusiness: (searchTerm, location) => yelpService.searchBusiness(searchTerm, location)
                .then((results) => dispatch(searchNearBy(results)))
        }
    };
};

const RestaurantContainer = connect(stateToProperty, dispatchToProperty)(RestaurantSearchComponent);

export default RestaurantContainer;
