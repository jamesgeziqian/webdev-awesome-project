// need further consideration for this class. Currently a stub.
// 设定如何给黑暗料理加入特技
class Food {

    constructor() {
        this.attr = new Map();
    }

    getAttr(key) {
        this.attr.get(key);
    }

    setAttr(key, value) {
        this.attr.set(key, value);
    }

    toJson() {
        return JSON.stringify(this.attr);
    }
}

export default Food;
