
const LoginReducer = (state = {status:"LOGOUT"}, action) => {
    switch (action.type) {
        case "LOGIN":
            return {status:"LOGIN"};
        case "LOGOUT":
            return {status:"LOGOUT"};
        case "PROFILE":
            // if (action.res.status === 200) {
                return {status: "LOGIN", user: action.res};
            // } else {
            //     return {status: "LOGOUT"};
            // }
        default:
            return state;
    }
};

export default LoginReducer;
