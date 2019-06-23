/**
 * This service stores information of an order that User is making or receiving.
 * When making an order, information would be saved locally and would not be uploaded to the server.
 * After costumer verifies the order, it would be send to the server for restaurant to read.
 */
class OrderService {

    constructor(userId, restaurantId) {
        this.userId = userId;
        this.restaurantId = restaurantId;
        this.order = new Map();
        this.foodId = 0;
    }

    addFood(food) {
        this.order.set(this.foodId, {...food, foodId: this.foodId});
        this.foodId++;
    }

    viewCurrentOrder() {
        return Array.from(this.order.values());
    }

    viewFoodById(foodId) {
        return this.order.get(foodId);
    }

    deleteFood(foodId) {
        this.order.delete(foodId);
    }

    updateFood(foodId, food) {
        this.order.set(foodId, food);
        return this.order.get(foodId);
    }

    findOrdersOfRestaurant() {

    }

    sendOrder() {

    }
}

export default OrderService;
