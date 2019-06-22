import {connect} from "react-redux";
import LoginReducer from "../reducers/LoginReducer"
import user_service from "../services/UserService"
import {login_status, logout_status} from "../actions/LoginAction";
import UserIcon from "../components/UserComponents/UserIcon";

const stateToProperty = (state) => {
    console.log(state.LoginReducer.status);
    return {
        status:state.LoginReducer.status
    };
};


const dispatchToProperty = (dispatch) => {
    return {
        handlers: {
            loginProcess: () => user_service.getInstance().checkLogin().then(status =>
                (status===200)?dispatch(login_status()):dispatch(logout_status()))
        }
    };
};

const LoginContainer = connect(stateToProperty, dispatchToProperty)(UserIcon);

export default LoginContainer;
