/**
 * MenuService manipulates all changes on the menu of the restaurant.
 * All changes on menu, once made, should be saved on the back-end.
 */
class MenuService {

    // 只有店家才能修改菜单。对于顾客，这个class将无法以任何形式获得。顾客读菜单直接就是ArrayOfFoods
    // 留了伪后端的stub，也许可以测试用
    constructor(restaurantId) {
        this.restaurantId = restaurantId;
        // this.menu = new Map();
        this.foodIndex = 0;
    }

    // 加入新的黑暗料理
    addFood(food) {
        // this.menu.set(this.foodIndex, {...food, foodIndex: this.foodIndex});
        // this.foodIndex++;
    }

    // 查看所有黑暗料理
    viewMenu() {
        // return Array.from(this.menu.values());
    }

    // 查看指定黑暗料理
    viewFoodByIndex(foodIndex) {
        // return this.menu.get(foodIndex);
    }

    // 果然黑暗料理还是算了吧
    deleteFood(foodIndex) {
        // this.menu.delete(foodIndex);
    }

    // 给黑暗料理添加特技
    updateFood(foodIndex, food) {
        // this.menu.set(foodIndex, food);
    }
}

export default MenuService;
