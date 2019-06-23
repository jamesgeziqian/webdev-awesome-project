import {Link} from "react-router-dom";
import React from "react";
import UserService from "../../services/UserService";
import {login_status, logout_status} from "../../actions/LoginAction";

export default class UserIcon extends React.Component {
    constructor(props) {
        super(props);
        this.props.handlers.loginProcess();
        this.user_service = UserService.getInstance();
        this.state = {
            show_user: false,
            login:false
        }
        this.checkLogin();
        // this.checkLogin();
    }

    // checkLogin = () =>
    //     this.user_service.checkLogin().then(
    //         status => {
    //             if (status === 200) {
    //                 this.setState({login: true})
    //             } else {
    
    //                 this.setState({login: false})
    //             }
    //         }
    //     )
    checkLogin=()=> {
        this.user_service.checkLogin().then(status => {
            if (status === 200) {
                this.setState({login: true})
            } else {
                this.setState({login: false})
            }
        })
    }
    render = () =>

        <div className="btn btn-outline-info float-lg-right"
             onMouseEnter={
                 () => {
                     this.setState({show_user: true});
                     this.checkLogin();
                     // this.props.handlers.loginProcess();
                 }
             }
             onMouseLeave={() => this.setState({show_user: false})}>
            user
            {this.state.show_user &&
            <div>
                {/*{this.props.status === "LOGOUT" &&*/}
                {!this.state.login &&
                <div>
                    <Link className="btn btn-primary float-lg-right" to='/login'
                        // onClick={()=>this.props.handlers.loginProcess()}
                    >Login</Link>
                    <Link className="btn btn-warning float-lg-right" to='/register'
                        // onClick={()=>this.props.handlers.loginProcess()}
                    >Sign up</Link>
                </div>
                }
                {/*{this.props.status === "LOGIN" &&*/}
                {this.state.login &&
                <div>
                    <Link className="btn btn-primary float-lg-right" to='/profile'
                        // onClick={()=>this.props.handlers.loginProcess()}
                    >Profile</Link>
                    <Link className="btn btn-warning float-lg-right" to='/'
                          onClick={() => this.user_service.logout().then(
                              res => {
                                  console.log(res);
                                  this.props.handlers.loginProcess();
                              }
                          )}
                    >Log out</Link>
                </div>
                }
            </div>}
        </div>

}

