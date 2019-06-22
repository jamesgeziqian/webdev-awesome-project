import React from 'react'
import {Link} from "react-router-dom";
import UserService from "../../services/UserService";

export default class LoginComponent extends React.Component {
    constructor(props){
        super(props);
        this.user_service = UserService.getInstance();
    }

    render() {
        return (
            <div className="container">
                <h1>Sign In</h1>
                <div>
                    <div className="form-group row">
                        <label htmlFor="username"
                               className="col-sm-2 col-form-label">
                            Username
                        </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   id="username"
                                   type="text"
                                   placeholder="Alice"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password"
                               className="col-sm-2 col-form-label">
                            Password
                        </label>
                        <div className="col-sm-10">
                            <input type="password"
                                   className="form-control wbdv-password-fld"
                                   id="password"
                                   type="password"
                                   placeholder="enter your password"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <button className="btn btn-primary btn-block"
                            onClick={()=>this.user_service.try_login("alicebob","abcd").then(
                                status=>
                                console.log(status)
                            )}>
                                Sign in
                            </button>
                            <Link className="btn btn-danger btn-block"
                                  to="/">
                                Cancel
                            </Link>
                            <div className="row">
                                <div className="col-6">

                                </div>
                                <div className="col-6">

                                    <Link to="/register"
                                          className="float-right">
                                        Sign up
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
