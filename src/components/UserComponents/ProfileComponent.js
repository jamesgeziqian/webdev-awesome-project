import React from 'react'
import {Link} from "react-router-dom";
import UserService from "../../services/UserService";
import {withRouter} from 'react-router-dom';

class ProfileComponent extends React.Component {
    constructor(props) {
        super(props);
        this.user_service = UserService.getInstance();
        this.state = {
            username: "",
            phone: "",
            email: "",
            zip: "",
            password: "",
            verify_password: "",
            userType: "",
            userId: ""
        }
        this.set_user_state();
    }

    set_user_state() {
        let cur_user = this.user_service.profile_current_user().then(
            res => {
                // console.log(res)
                if (typeof res.message === 'undefined') {
                    this.setState({
                        username: res.username,
                        phone: res.phone,
                        email: res.email,
                        zip: res.zip,
                        password: res.password,
                        verify_password: res.password,
                        userType: res.userType,
                        userId: res._id,
                        followers: res.followers,
                        followings: res.followings,
                        favorites: res.favorites,
                        orders: res.orders,
                        restaurants: res.restaurants
                    });
                } else {
                    alert("you are not logged in!")
                    this.props.history.push("/");
                }
            }
        );

    }

    render() {
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
                                <input className="form-control"
                                       value={this.state.username}
                                       onChange={event => this.setState({username: event.target.value})}
                                       id="username"
                                       type="text"
                                       placeholder="Alice"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="phone"
                                   className="col-sm-2 col-form-label">
                                phone
                            </label>
                            <div className="col-sm-10">
                                <input className="form-control"
                                       value={this.state.phone}
                                       onChange={event => this.setState({phone: event.target.value})}
                                       id="phone"
                                       type="tel"
                                       placeholder="(123)456-7890"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="email"
                                   className="col-sm-2 col-form-label">
                                email
                            </label>
                            <div className="col-sm-10">
                                <input className="form-control"
                                       value={this.state.email}
                                       onChange={event => this.setState({email: event.target.value})}
                                       id="email"
                                       type="email"
                                       placeholder="xxxxx@gmail.com"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="zipCode"
                                   className="col-sm-2 col-form-label">
                                zip code
                            </label>
                            <div className="col-sm-10">
                                <input className="form-control"
                                       value={this.state.zip}
                                       onChange={event => this.setState({zip: event.target.value})}
                                       id="zipCode"
                                       type="number"
                                       placeholder="02115"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="password"
                                   className="col-sm-2 col-form-label">
                                Password
                            </label>
                            <div className="col-sm-10">
                                <input
                                    className="form-control wbdv-password-fld"
                                    id="password"
                                    value={this.state.password}
                                    onChange={event => this.setState({password: event.target.value})}
                                    type="password"
                                    placeholder="enter your password"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="verifyPassword"
                                   className="col-sm-2 col-form-label">
                                Verify password
                            </label>
                            <div className="col-sm-10">
                                <input
                                    className="form-control"
                                    id="verifyPassword"
                                    type="password"
                                    value={this.state.verify_password}
                                    onChange={event => this.setState({verify_password: event.target.value})}
                                    placeholder="re-enter your password"/>
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
                        {this.state.userType === "Customer"&&
                        // typeof this.state.orders!=="undefined" &&
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
                            <div className="list-group">
                                <h4>history orders </h4>
                                {this.state.orders.map((order, index) =>
                                    <div className="container"
                                         key={index}>{
                                        <div className="form-inline form-group bg-warning">
                                            {order.orders.map((order2, index2) =>
                                                <div className="form-group-item" key={index2}> {order2+","}&nbsp;</div>)
                                            }
                                        </div>
                                    }
                                    </div>
                                )}
                            </div>
                        </div>
                        }
                        {this.state.userType === "BusinessMan" &&
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
                {/*<div className="form-group row">*/}
                {/*    <label htmlFor="birthday"*/}
                {/*           className="col-sm-2 col-form-label">*/}
                {/*        Date of birth*/}
                {/*    </label>*/}
                {/*    <div className="col-sm-10">*/}
                {/*        <input type="date"*/}
                {/*               className="form-control wbdv-email-fld"*/}
                {/*               id="birthday"/>*/}
                {/*    </div>*/}
                {/*</div>*/}
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
                        <Link to="/" className="btn btn-warning btn-block">
                            Back to main page
                        </Link>
                        <button className="btn btn-danger btn-block"
                                onClick={() => this.delete_user_handler()}>
                            delete my account
                        </button>
                    </div>
                </div>

            </div>
        )
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

    delete_user_handler() {
        this.user_service.delete_current_login_user(this.state.userId).then(
            res => {
            console.log(res);
                alert(`Your account have been deleted. \n You are going to log out...`);
                this.user_service.logout().then(
                    res => {
                        console.log(res);
                    }
                )
                this.props.history.push("/");
        })
    }
}


export default withRouter(ProfileComponent);
