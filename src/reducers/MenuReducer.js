import {
    ADD_FOOD_MENU,
    DELETE_FOOD_MENU,
    UPDATE_FOOD_MENU,
    VIEW_FOOD_MENU,
    VIEW_MENU
} from "../constants/MenuConstants";

const MenuReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_FOOD_MENU:
        case VIEW_MENU:
        case VIEW_FOOD_MENU:
        case DELETE_FOOD_MENU:
        case UPDATE_FOOD_MENU:
        default:
            return state;
    }
};

export default MenuReducer;
