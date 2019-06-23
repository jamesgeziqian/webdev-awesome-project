const LoginReducer = (state = {status: "LOGOUT"}, action) => {
    switch (action.type) {
        case "LOGIN":
            return {status: "LOGIN"};
        case "LOGOUT":
            return {status: "LOGOUT"};
        case "PROFILE":
            return {status: "LOGIN", user: action.res};
        default:
            return state;
    }
};

export default LoginReducer;
