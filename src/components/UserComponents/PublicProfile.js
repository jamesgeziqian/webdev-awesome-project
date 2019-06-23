import React from 'react'
import {Link} from "react-router-dom";
import UserService from "../../services/UserService";
import {withRouter} from 'react-router-dom';
import { Redirect } from "react-router-dom"
class PublicProfile extends React.Component {
    constructor(props) {
        super(props);
        this.user_service = UserService.getInstance();
        this.state = {
            username: "",
            userType: "",
        }
        this.set_user_state();
    }

    set_user_state() {
        let cur_user = this.user_service.profile_public_user(this.props.match.params.userId).then(
            res => {
                this.setState({
                    username: res.username,
                    userType: res.userType,
                    followers: res.followers,
                    followings: res.followings,
                    favorites: res.favorites,
                    orders: res.orders,
                    restaurants: res.restaurants,
                    redirect: false
                })
            })
        this.checkRedirect();
    }

    checkRedirect() {
        this.user_service.profile_current_user().then(

            res => {
                if (typeof res.userType !== "undefined" && res._id === this.props.match.params.userId) {
                    this.setState({redirect: true})
                } else {
                    this.setState({redirect: false})
                }
            }
        )
    }

    // let maybe_login_user;
    // this.user_service.profile_current_user().then(
    //     res => maybe_login_user = res
    // ).then(() => {
    //     this.setState(this.state);
    // });
    // if (typeof maybe_login_user !== "undefined" && maybe_login_user._id === this.props.match.params.userId) {
    //     console.log("successful redirect!");
    //     return (<Redirect exact from='/profile/:uId' to='/profile'/>);
    // } else if (typeof maybe_login_user === "undefined") {
    //     return (<div/>);


    render = () => {
        if (this.state.redirect) {
            return (<Redirect to='/profile'/>);
        } else {
            return (
                <div className="container-fluid">
                    <h1>Profile</h1>
                    {/*<div className="alert alert-success" role="alert">*/}
                    {/*    Profile successfully saved!*/}
                    {/*</div>*/}
                    <div className="row">
                        <div className="col-8">
                            <div className="form-group row">
                                <label htmlFor="username"
                                       className="col-sm-2 col-form-label">
                                    Username
                                </label>
                                <div className="col-sm-10">
                                    <input readOnly className="form-control"
                                           value={this.state.username}
                                           id="username"
                                           type="text"
                                           placeholder="Alice"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="role"
                                       className="col-sm-2 col-form-label">
                                    Role
                                </label>
                                <div className="col-sm-10">
                                    <input readOnly id="role" className="form-control" value={this.state.userType}>
                                    </input>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            {this.state.userType === "Customer"&&!this.state.redirect &&
                            <div>
                                <div className="list-group">
                                    <h4>followers </h4>
                                    {this.state.followers.map((follower, index) =>
                                        <Link className="list-group-item" to={`/profile/${follower._id}`}
                                              key={index}>{follower.username}</Link>
                                    )}
                                </div>
                                <div className="list-group">
                                    <h4>followings </h4>
                                    {this.state.followings.map((following, index) =>
                                        <Link className="list-group-item" to={`/profile/${following._id}`}
                                              key={index}>{following.username}</Link>
                                    )}
                                </div>
                                <div className="list-group">
                                    <h4>favored restaurants </h4>
                                    {this.state.favorites.map((favorite, index) =>
                                        <Link className="list-group-item" to={`/result/${favorite.yelpId}`}
                                              key={index}>{favorite.name}</Link>
                                    )}
                                </div>
                                <div className="container">
                                    <h4>history orders </h4>
                                    {this.state.orders.map((order, index) =>
                                        <div className="form-inline form-group" to={`/profile/${order._id}`}
                                             key={index}>

                                                {order.orders.map((order2, index2) =>
                                                    <div className="form-group-item bg-warning"
                                                         key={index2}> {order2+","}&nbsp;</div>)
                                                }
                                        </div>
                                    )}
                                </div>
                            </div>
                            }
                            {this.state.userType === "BusinessMan"&&!this.state.redirect &&
                            <div className="list-group">
                                <h4>Owned Business </h4>
                                {this.state.restaurants.map((restaurant, index) =>
                                    <Link className="list-group-item" to={`/result/${restaurant.yelpId}`}
                                          key={index}>{restaurant.name}</Link>
                                )}
                            </div>
                            }
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <button className="btn btn-success btn-block"
                                    onClick={() => {
                                        this.update_handler();
                                    }
                                    }>
                                Update
                            </button>
                            <Link to="/" className="btn btn-danger btn-block">
                                Cancel
                            </Link>
                        </div>
                    </div>
                </div>
            )
        }
    }





    update_handler() {
        if (this.state.password !== this.state.verify_password) {
            alert("the second password is not the same as the first one!");
            return;
        } else {
            this.user_service.profile_update_user({
                username: this.state.username,
                password: this.state.password,
                phone: this.state.phone,
                email: this.state.email,
                zip: this.state.zip,
            }, this.state.userId).then(
                res => {
                    if (res.message === "Update success!") {
                        alert(`updated successfully! \n You are going to log out...`);
                        this.user_service.logout().then(
                            res => {
                                console.log(res);
                            }
                        )
                        this.props.history.push("/");
                    } else {
                        alert(res.message);
                    }
                }
            )
        }
    }
}


export default withRouter(PublicProfile);
