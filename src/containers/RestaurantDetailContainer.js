import {connect} from "react-redux";
import {
    searchBusinessDetails,
    searchLocationLocal,
    searchNearBy,
    searchTermLocal
} from "../actions/SearchActions";
import YelpService from "../services/YelpService";
import RestaurantDetailComponent from "../components/RestaurantDetailComponent";

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
            searchBusinessById:(id)=> yelpService.searchBusinessDetails(id).then(result=>dispatch(searchBusinessDetails(result)))
        }
    };
};

const RestaurantDetailContainer = connect(stateToProperty, dispatchToProperty)(RestaurantDetailComponent);

export default RestaurantDetailContainer;
