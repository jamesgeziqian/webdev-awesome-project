import {
    ADD_FOOD_ORDER,
    DELETE_FOOD_ORDER,
    FIND_ORDERS,
    UPDATE_FOOD_ORDER,
    VIEW_FOOD_ORDER,
    VIEW_ORDER
} from "../constants/OrderConstants";

const OrderReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_FOOD_ORDER:
        case VIEW_ORDER:
        case VIEW_FOOD_ORDER:
        case FIND_ORDERS:
        case DELETE_FOOD_ORDER:
        case UPDATE_FOOD_ORDER:
        default:
            return state;
    }
};

export default OrderReducer;
