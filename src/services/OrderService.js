/**
 * This service stores information of an order that User is making or receiving.
 * When making an order, information would be saved locally and would not be uploaded to the server.
 * After costumer verifies the order, it would be send to the server for restaurant to read.
 */
class OrderService {

    // 顾客入店后创建。可以本地暂存点单。此时OrderService作为伪后端。可以考虑编辑中的点单也传到后端保存
    constructor(userId, restaurantId) {
        this.userId = userId;
        this.restaurantId = restaurantId;
        this.order = new Map();
        this.foodId = 0;
    }

    // 在Rabbit House 点单
    addFood(food) {
        this.order.set(this.foodId, {...food, foodId: this.foodId});
        this.foodId++;
    }

    // 查看当前点单
    viewCurrentOrder() {
        return Array.from(this.order.values());
    }

    // 查看指定黑暗料理
    viewFoodById(foodId) {
        return this.order.get(foodId);
    }

    // 这道菜搞不好不是黑暗料理...
    deleteFood(foodId) {
        this.order.delete(foodId);
    }

    // 修改Rabbit House 的点单
    updateFood(foodId, food) {
        this.order.set(foodId, food);
        return this.order.get(foodId);
    }

    // 查看Rabbit House 历史点单，从服务器下载
    findOrdersOfRestaurant() {

    }

    // 下单
    sendOrder() {

    }
}

export default OrderService;
