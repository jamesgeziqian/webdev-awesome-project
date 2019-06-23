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
                    public_user_id:this.props.match.params.userId,
                    username: res.username,
                    userType: res.userType,
                    followers: res.followers,
                    followings: res.followings,
                    favorites: res.favorites,
                    orders: res.orders,
                    restaurants: res.restaurants,
                    profile_current_user:undefined,
                    redirect: false,
                    followed:false
                })
            })
        this.checkRedirect();
    }

    checkRedirect() {
        this.user_service.profile_current_user().then(

            res => {
                if (typeof res.userType !== "undefined" && res._id === this.props.match.params.userId) {
                    this.setState({
                        redirect: true,
                        profile_current_user:res,
                        followed: typeof res !== "undefined"
                            && res.userType === "Customer"
                            && res.followings.filter((item) => item._id === this.state.public_user_id).length !== 0
                    })
                } else {
                    if(typeof res.userType === "undefined"){
                        this.setState({
                            redirect: false,
                            profile_current_user:undefined,
                            followed: false
                        });
                    }else{
                        this.setState({
                            redirect: false,
                            profile_current_user:res,
                            followed: typeof res !== "undefined"
                                && res.userType === "Customer"
                                && res.followings.filter((item) => item._id === this.state.public_user_id).length !== 0
                        });
                    }
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
                            {typeof this.state.profile_current_user!=="undefined"&&
                            this.state.profile_current_user.userType==="Customer"&&this.state.userType==="Customer"&&
                            !this.state.followed&&<button className="btn btn-success btn-block"
                                    onClick={() => {
                                        this.follow_handler();
                                    }
                                    }>
                                follow this person
                            </button>}

                            {typeof this.state.profile_current_user!=="undefined"&&
                            this.state.profile_current_user.userType==="Customer"&&this.state.userType==="Customer"&&
                            this.state.followed&&<button className="btn btn-success btn-block"
                                                          onClick={() => {
                                                              this.unfollow_handler();
                                                          }
                                                          }>
                                cancel follow
                            </button>}
                            <Link to="/" className="btn btn-danger btn-block">
                                back to main page
                            </Link>
                        </div>
                    </div>
                </div>
            )
        }
    }
    unfollow_handler() {
        this.user_service.unfollowUser(this.state.profile_current_user._id, this.state.public_user_id).then(
            status => {
                if (status === 200) {
                    this.setState({followed: false})
                } else {
                    this.setState({followed: true})
                }
            }
        )
    }

    follow_handler() {
    this.user_service.followUser(this.state.profile_current_user._id,this.state.public_user_id).then(
        status=>{
            if(status===200){
                this.setState({followed:true})
            }else{
                this.setState({followed:false})
            }
        }
    )
    }
}


export default withRouter(PublicProfile);
