import React from 'react'
import { withRouter } from 'react-router-dom';
import {Link} from "react-router-dom";
import UserService from "../../services/UserService";
import Redirect from "react-router-dom/es/Redirect";

 class LoginComponent extends React.Component {
    constructor(props){
        super(props);
        this.user_service = UserService.getInstance();
        this.state={username:"", password:""}
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
                                   value={this.state.username}
                                   onChange={event =>this.setState({username:event.target.value})}
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
                                   value={this.state.password}
                                   onChange={event =>this.setState({password:event.target.value})}
                                   placeholder="enter your password"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <button className="btn btn-primary btn-block"
                            onClick={()=>this.user_service.try_login(this.state.username,this.state.password).then(
                                status => {
                                    if (status === 200) {
                                        this.props.history.push("/");
                                    } else {
                                        alert("wrong username or password entered.");
                                    }
                                }
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
export default withRouter(LoginComponent);
