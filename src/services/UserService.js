export default class UserService {

    static instance;

    static getInstance() {
        if (!this.instance) {
            this.instance = new UserService();
        }
        return this.instance;
    }

    constructor() {
        this.port = 3000;
        if (window.location.hostname === "localhost") { // adaption between local ports and on the PaaS server
            this.endpoint = 'http://' + window.location.hostname + ":" + this.port;
        } else {
            this.endpoint = 'https://webdev-awesome-project-server.herokuapp.com';
        }
        this.endpoint += '/api';
    }

    checkLogin = () => fetch(`${this.endpoint}/checkLogin`, {
        credentials: 'include'
    }).then(
        response => response.status
    );

    try_register = (state) => fetch(`${this.endpoint}/user`, {
        method: 'post',
        credentials: 'include',
        body: JSON.stringify(state),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());

    try_login = (username, password) => fetch(`${this.endpoint}/login`, {
        method: "post",
        credentials: 'include',
        body: JSON.stringify({
            username: username,
            password: password
        }),
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => res.status);

    logout = () => fetch(`${this.endpoint}/logout`, {
        method: "post",
        credentials: 'include',
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

    profile_current_user = () => fetch(`${this.endpoint}/profile`, {
        method: "get",
        credentials: 'include',
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

    profile_update_user = (user, uId) => fetch(`${this.endpoint}/user/${uId}`, {
        method: "put",
        credentials: 'include',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());

    profile_public_user = (userId) => fetch(`${this.endpoint}/user/${userId}`, {
        method: "get",
        credentials: 'include',
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());

    delete_current_login_user = (userId) => fetch(`${this.endpoint}/user/${userId}`, {
        method: "delete",
        credentials: 'include',
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => res.json());

    followUser = (userId, followingId) => {
        return fetch(`${this.endpoint}/customer/${userId}/follows/${followingId}`, {
            credentials:'include',
            method: 'PUT'
        }).then(res=>res.status);
    };

    unfollowUser = (userId, followingId) => {
        return fetch(`${this.endpoint}/customer/${userId}/follows/${followingId}`, {
            credentials:'include',
            method: 'DELETE'
        }).then(res=>res.status);
    }

}
