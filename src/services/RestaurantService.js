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
        this.url +=  '/api/restaurant';
    }

    claimRestaurant(yelpId) {
        return fetch(`${this.url}/${yelpId}`, {
            credentials: "include",
            method: 'POST'
        }).then((res) => {
            console.log(res);
            return res.json();
        });
    }

    findAllRestaurants() {
        return fetch(this.url, {
            credentials: "include",
            method: "GET"
        }).then((res) => {
            console.log(res);
            return res.json()
        });
    }

    findRestaurantById(yelpId) {
        console.log(yelpId);
        return fetch(`${this.url}/${yelpId}`, {
            credentials: "include",
            method: "GET"
        }).then((res) => {
            if (res.status === 200) {
                return res.json();
            }
        });
    }

    dropRestaurant(restaurantId) {
        return fetch(`${this.url}/${restaurantId}`, {
            credentials: "include",
            method: "DELETE"
        }).then((res) => res.json());
    }

    updateRestaurant(restaurantId, restaurant) {
        return fetch(`${this.url}/${restaurantId}`, {
            credentials: "include",
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: restaurant
        })
    }

}

export default RestaurantService;
