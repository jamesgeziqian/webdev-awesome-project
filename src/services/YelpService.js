class YelpService {

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

    setCoordinates(latitude, longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }

    searchAutocomplete(searchTerm) {
        let url = `${this.autocompleteUrl}?latitude=${this.latitude}&longitude=${this.longitude}`;
        if (typeof searchTerm !== "undefined" && searchTerm.length > 0) {
            url = `${url}&text=${searchTerm}`;
        }
        return fetch(url, this.headers).then((response) => response.json());
    }

    searchNearBy(searchTerm) {
        const resultAutocomplete = this.searchAutocomplete(searchTerm);
        return resultAutocomplete.then(
            (result) => {
                return Promise.all(
                    result["businesses"].map(
                        (business) => {
                            return this.searchBusinessById(business["id"]);
                        }
                    )
                )
            }
        );
    }

    searchLocation(location) {
        let url = `${this.businessUrl}/search`;
        if (typeof location !== "undefined" && location.length > 0) {
            url = `${url}?location=${location}`;
            return fetch(url, this.headers)
                .then((response) => response.json());
        }
    }

    searchCoordinates(latitude, longitude) {
        let url = `${this.businessUrl}/search`;
        if (typeof latitude === "number" && typeof longitude === "number") {
            url = `${url}?latitude=${latitude}&longitude=${longitude}`;
            return fetch(url, this.headers)
                .then((response) => response.json());
        }
    }

    searchBusinessById(id) {
        if (typeof id !== "undefined" && id.length > 0) {
            const url = `${this.businessUrl}/${id}`;
            return fetch(url, this.headers).then((response) => response.json());
        }
    }

}

export default YelpService;
