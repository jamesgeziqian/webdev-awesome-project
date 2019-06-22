
const LoginReducer = (state = {status:"LOGOUT"}, action) => {
    switch (action.type) {
        case "LOGIN":
            return {status:"LOGIN"}
        case "LOGOUT":
            return {status:"LOGOUT"}
        default:
            return state;
    }
};

export default LoginReducer;
