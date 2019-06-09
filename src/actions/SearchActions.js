import {
    SEARCH_BUSINESS_DETAILS,
    SEARCH_COORDINATES, SEARCH_LOCATION_LOCAL,
    SEARCH_NEARBY,
    SEARCH_TERM_LOCAL
} from "../constants/SearchConstants";

export const searchTermLocal = (searchTerm) => {
    return {
        type: SEARCH_TERM_LOCAL,
        searchTerm: searchTerm
    };
};

export const searchLocationLocal = (location) => {
    return {
        type: SEARCH_LOCATION_LOCAL,
        location: location
    };
};

export const searchNearByYelp = (results) => {
    return {
        type: SEARCH_NEARBY,
        results: results
    };
};

export const searchCoordinatesYelp = (results) => {
    return {
        type: SEARCH_COORDINATES,
        results: results
    };
};

export const searchBusinessDetails = (results) => {
    return {
        type: SEARCH_BUSINESS_DETAILS,
        results: results
    };
};
