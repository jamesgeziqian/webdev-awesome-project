class YelpService {

    static instance;

    static getInstance() {
        if (!this.instance) {
            this.instance = new YelpService();
        }
        return this.instance;
    }

    constructor() {
        // set url
        this.url = "https://api.yelp.com/v3";
        this.businessUrl = this.url + "/business";
        this.autocompleteUrl = this.url + "/autocomplete";

        // set default value: Ell Hall
        this.latitude = 42.339675;
        this.longitude = -71.087931;

        // set key
        this.headers = {
            "Authorization": "Bearer H3R0K8iSLr0tc4yasG0JxA1EHunUvW4M5mIIuzPi-sGikGgLCrAsOCQPZHQl0ryIl8or0JaT7HPIYkqmrwURzb3nHu0e_fXuZXgehm9aOQYzfk7zpafwA1TZKu36XHYx"
        }
    }

    searchNearBy(searchTerm) {
        const resultAutocomplete = this.searchBusiness(searchTerm);
        return resultAutocomplete.then(
            (result) => {
                return Promise.all(
                    result["businesses"].map(
                        (business) => {
                            return this.searchBusinessDetails(business["id"]);
                        }
                    )
                )
            }
        );
    }

    searchCoordinates(searchTerm, latitude, longitude) {
        let url = `${this.businessUrl}/search`;
        if (typeof latitude === "number" && typeof longitude === "number") {
            url = `${url}?latitude=${latitude}&longitude=${longitude}`;
            if (typeof searchTerm !== "undefined" && searchTerm.length > 0) {
                url = `${url}&term=${searchTerm}`;
            }

            return fetch(url, this.headers)
                .then((response) => response.json());
        }
        return null;
    }

    searchBusiness(searchTerm, location = "Boston") {
        // navigator.geolocation.getCurrentPosition((location) => console.log(location));
        let url = `${this.businessUrl}/search?location=${location}&categories=restaurant`;
        if (typeof searchTerm !== "undefined" && searchTerm.length > 0) {
            url = `${url}&term=${searchTerm}`;
        }
        return fetch(url, this.headers).then((response) => response.json());
    }

    searchBusinessDetails(id) {
        if (typeof id !== "undefined" && id.length > 0) {
            const url = `${this.businessUrl}/${id}`;
            return fetch(url, this.headers).then((response) => response.json());
        }
    }

}

export default YelpService;
