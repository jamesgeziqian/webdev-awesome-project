// 商店街管理委员会
class RestaurantService {

    static instance;

    static getInstance() {
        if (!this.instance) {
            this.instance = new RestaurantService();
        }
        return this.instance;
    }

    // 为了拯救非洲难民，几位猫娘决定开一家咖啡厅名为Rabbit House...
    createRestaurant(restaurantName) {

    }

    // 逛街
    findAllRestaurants() {

    }

    // 服务器检查Rabbit House 是否存在，若存在，返回Rabbit House 的菜单 which is an ArrayOfFoods
    findRestaurantById(restaurantId) {

    }

    // 我Rabbit House 就算是倒闭，也不会...
    deleteRestaurant() {

    }

    // Rabbit House 店面装修
    updateRestaurant(restaurantId, restaurant) {

    }

}

export default RestaurantService;
