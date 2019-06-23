import {
    CREATE_RESTAURANT,
    DELETE_RESTAURANT,
    FIND_ALL_RESTAURANT,
    FIND_RESTAURANT,
    UPDATE_RESTAURANT
} from "../constants/RestaurantConstants";

export const createRestaurant = (restaurant) => {
    return {type: CREATE_RESTAURANT, restaurant: restaurant};
};

export const findAllRestaurants = (restaurants) => {
    return {type: FIND_ALL_RESTAURANT, restaurants: restaurants};
};

export const findRestaurant = (restaurant) => {
    if (typeof restaurant !== "undefined") {
        return {type: FIND_RESTAURANT, restaurant: restaurant};
    } else {
        return {type: FIND_RESTAURANT}
    }

};

export const deleteRestaurant = (restaurantId) => {
    return {type: DELETE_RESTAURANT, id: restaurantId};
};

export const updateRestaurant = (restaurantId, restaurant) => {
    return {type: UPDATE_RESTAURANT, id: restaurantId, restaurant: restaurant};
};
