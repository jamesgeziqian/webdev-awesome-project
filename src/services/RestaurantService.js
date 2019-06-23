class RestaurantService {

    static instance;

    static getInstance() {
        if (!this.instance) {
            this.instance = new RestaurantService();
        }
        return this.instance;
    }

    constructor() {
        this.port = 3000;
        if (window.location.hostname === "localhost") { // adaption between local ports and on the PaaS server
            this.url = 'http://' + window.location.hostname + ":" + this.port;
        } else {
            this.url = 'https://webdev-awesome-project-server.herokuapp.com/';
        }
        this.url +=  '/api';
    }

    claimRestaurant(yelpId, name) {
        return fetch(`${this.url}/restaurant/${yelpId}?name=${name}`, {
            credentials: "include",
            method: 'POST'
        }).then((res) => {
            console.log(res);
            return res.json();
        });
    }

    findAllRestaurants() {
        return fetch(`${this.url}/restaurant`, {
            credentials: "include",
            method: "GET"
        }).then((res) => {
            console.log(res);
            return res.json()
        });
    }

    findRestaurantById(yelpId) {
        console.log(yelpId);
        return fetch(`${this.url}/restaurant/${yelpId}`, {
            credentials: "include",
            method: "GET"
        }).then((res) => {
            if (res.status === 200) {
                return res.json();
            }
        });
    }

    dropRestaurant(restaurantId) {
        return fetch(`${this.url}/restaurant/${restaurantId}`, {
            credentials: "include",
            method: "DELETE"
        }).then((res) => res.json());
    }

    updateRestaurant(restaurantId, restaurant) {
        return fetch(`${this.url}/restaurant/${restaurantId}`, {
            credentials: "include",
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(restaurant)
        }).then(res=>res.json())
    }
    send_order(restaurantId, order){
        console.log("at send order");
        console.log(order);
        return fetch(`${this.url}/order/restaurant/${restaurantId}`, {
            credentials: "include",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        }).then(res=>res.json())
    }

    like_this_restaurant(userId,restaurantId){
        return fetch(`${this.url}/customer/${userId}/restaurant/${restaurantId}`, {
            credentials: "include",
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res=>res.status)
    }
    unlike_this_restaurant(userId,restaurantId){
        return fetch(`${this.url}/customer/${userId}/restaurant/${restaurantId}`, {
            credentials: "include",
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res=>res.status)
    }

}

export default RestaurantService;
