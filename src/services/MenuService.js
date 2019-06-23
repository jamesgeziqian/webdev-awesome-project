/**
 * MenuService manipulates all changes on the menu of the restaurant.
 * All changes on menu, once made, should be saved on the back-end.
 */
class MenuService {

    constructor(restaurantId) {
        this.restaurantId = restaurantId;
        // this.menu = new Map();
        this.foodIndex = 0;
    }

    addFood(food) {
        // this.menu.set(this.foodIndex, {...food, foodIndex: this.foodIndex});
        // this.foodIndex++;
    }

    viewMenu() {
        // return Array.from(this.menu.values());
    }

    viewFoodByIndex(foodIndex) {
        // return this.menu.get(foodIndex);
    }

    deleteFood(foodIndex) {
        // this.menu.delete(foodIndex);
    }

    updateFood(foodIndex, food) {
        // this.menu.set(foodIndex, food);
    }
}

export default MenuService;
