import {
    ADD_FOOD_ORDER,
    DELETE_FOOD_ORDER,
    FIND_HISTORY_ORDERS,
    UPDATE_FOOD_ORDER,
    VIEW_FOOD_ORDER,
    VIEW_ORDER
} from "../constants/OrderConstants";

export const addFoodToOrder = (food) => {
    return {type: ADD_FOOD_ORDER, food: food};
};

export const viewOrder = () => {
    return {type: VIEW_ORDER};
};

export const viewFoodInOrder = (foodId) => {
    return {type: VIEW_FOOD_ORDER, foodId: foodId};
};

export const findHistoryOrders = () => {
    return {type: FIND_HISTORY_ORDERS};
};

export const deleteFoodInOrder = (foodId) => {
    return {type: DELETE_FOOD_ORDER, foodId: foodId};
};

export const updateFoodInOrder = (foodId, food) => {
    return {type: UPDATE_FOOD_ORDER, foodId: foodId, food: food};
};
