import {
    CREATE_RESTAURANT,
    DELETE_RESTAURANT,
    FIND_ALL_RESTAURANT,
    FIND_RESTAURANT,
    UPDATE_RESTAURANT
} from "../constants/RestaurantConstants";

export const createRestaurant = (restaurantName) => {
    return {type: CREATE_RESTAURANT, name: restaurantName};
};

export const findAllRestaurants = () => {
    return {type: FIND_ALL_RESTAURANT};
};

export const findRestaurant = (restaurantId) => {
    return {type: FIND_RESTAURANT, id: restaurantId};
};

export const deleteRestaurant = (restaurantId) => {
    return {type: DELETE_RESTAURANT, id: restaurantId};
};

export const updateRestaurant = (restaurantId, restaurant) => {
    return {type: UPDATE_RESTAURANT, id: restaurantId, restaurant: restaurant};
};
