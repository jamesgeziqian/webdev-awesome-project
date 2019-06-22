import {Link} from "react-router-dom";
import React from "react";
import UserService from "../../services/UserService";

export default class UserIcon extends React.Component {
    constructor(props) {
        super(props);
        this.user_service = UserService.getInstance();
        this.state = {
            login: false
        }
        this.checkLogin();
    }

    checkLogin = () =>
        this.user_service.checkLogin().then(
            status => {
                if (status === 200) {
                    this.setState({login: true})
                } else {
                    this.setState({login: false})
                }
            }
        )
    render = () =>
        <div>
            {
                !this.state.login &&
                <div>
                    <Link className="btn btn-primary float-lg-right" to='/login'
                    >Login</Link>
                    <Link className="btn btn-warning float-lg-right" to='/register'
                    >Sign up</Link>
                </div>
            }
            {
                this.state.login&&
                <div>
                    <Link className="btn btn-primary float-lg-right" to='/login'
                    >Profile</Link>
                    <Link className="btn btn-warning float-lg-right" to='/register'
                    >Log out</Link>
                </div>
            }
        </div>

}
