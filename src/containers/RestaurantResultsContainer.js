import {connect} from "react-redux";
import {
    searchBusinessDetails,
    searchLocationLocal,
    searchNearBy,
    searchTermLocal
} from "../actions/SearchActions";
import YelpService from "../services/YelpService";
import RestaurantResultsComponent from "../components/RestaurantResultsComponent";

const stateToProperty = (state) => {
    return {
        searchTerm: state.SearchReducer.searchTerm,
        location: state.SearchReducer.location,
        results: state.SearchReducer.results
    };
};

const yelpService = YelpService.getInstance();

const dispatchToProperty = (dispatch) => {
    return {
        handlers: {
            searchTermLocal: (searchTerm) => dispatch(searchTermLocal(searchTerm)),
            searchLocationLocal: (location) => dispatch(searchLocationLocal(location)),
            searchBusiness: (searchTerm, location) => yelpService.searchBusiness(searchTerm, location)
                .then((results) => dispatch(searchNearBy(results))),
            searchBusinessById: (id) => yelpService.searchBusinessById(id).then(results => dispatch(searchBusinessDetails(results)))
        }
    };
};

const RestaurantResultsContainer = connect(stateToProperty, dispatchToProperty)(RestaurantResultsComponent);

export default RestaurantResultsContainer;
