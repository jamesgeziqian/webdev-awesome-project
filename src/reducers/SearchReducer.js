import {
    SEARCH_BUSINESS_DETAILS,
    SEARCH_COORDINATES,
    SEARCH_LOCATION_LOCAL, SEARCH_NEARBY,
    SEARCH_TERM_LOCAL
} from "../constants/SearchConstants";

const SearchReducer = (state = {searchTerm: "", location: "", results: {businesses:[]}}, action) => {
    switch (action.type) {
        case SEARCH_TERM_LOCAL:
            return {
                ...state,
                searchTerm: action.searchTerm
            };
        case SEARCH_LOCATION_LOCAL:
            return {
                ...state,
                location: action.location
            };
        case SEARCH_BUSINESS_DETAILS:
        case SEARCH_COORDINATES:
        case SEARCH_NEARBY:
            return {
                ...state,
                results: action.results
            };
        default:
            return state;
    }
};

export default SearchReducer;
