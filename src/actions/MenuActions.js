import {
    ADD_FOOD_MENU,
    DELETE_FOOD_MENU,
    UPDATE_FOOD_MENU,
    VIEW_FOOD_MENU,
    VIEW_MENU
} from "../constants/MenuConstants";

export const addFoodToMenu = (food) => {
    return {type: ADD_FOOD_MENU, food: food};
};

export const viewMenu = () => {
    return {type: VIEW_MENU};
};

export const viewFoodInMenu = (foodIndex) => {
    return {type: VIEW_FOOD_MENU, foodIndex: foodIndex};
};

export const deleteFoodInMenu = (foodIndex) => {
    return {type: DELETE_FOOD_MENU, foodIndex: foodIndex};
};

export const updateFoodInMenu = (foodIndex, food) => {
    return {type: UPDATE_FOOD_MENU, foodIndex: foodIndex, food: food};
};
