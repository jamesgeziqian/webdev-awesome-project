import {
    CREATE_RESTAURANT,
    DELETE_RESTAURANT,
    FIND_ALL_RESTAURANT,
    FIND_RESTAURANT,
    UPDATE_RESTAURANT
} from "../constants/RestaurantConstants";
import RestaurantService from "../services/RestaurantService";

const service = RestaurantService.getInstance();

const RestaurantReducer = (state = {restaurants: service.findAllRestaurants()}, action) => {
    switch (action.type) {
        case CREATE_RESTAURANT:
            console.log(action.restaurant);
            return {
                restaurant: action.restaurant
            };
        case FIND_ALL_RESTAURANT:
            return {
                restaurants: action.restaurants
            };
        case FIND_RESTAURANT:
            console.log(action.restaurant);
            return {
                restaurant: action.restaurant
            };
        case DELETE_RESTAURANT:
        case UPDATE_RESTAURANT:
        default:
            return state;
    }
};

export default RestaurantReducer;
