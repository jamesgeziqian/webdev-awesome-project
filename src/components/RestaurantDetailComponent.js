import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import RestaurantSearchContainer from "../containers/RestaurantSearchContainer";
import UserIcon from "./UserComponents/UserIcon";
import TopMenu from "./UserComponents/TopMenu";
import RestaurantService from '../services/RestaurantService'

class RestaurantDetailComponent extends React.Component {

    constructor(props) {
        super(props);
        this.id = window.location.pathname.split("/")[2];
        console.log(this.id);
        this.restaurant_service = RestaurantService.getInstance();
        this.state = {
            menu: [],
            order: [],
            editing_dish: "",
            favoringCustomers: [],
            historyOrders: [],
            liked: false
        };
        this.init();
    }

    init() {
        this.props.handlers.searchBusinessById(this.id)
            .then(() => this.props.handlers.findRestaurant(this.id))
            .then(() => this.props.handlers.checkLogin())
            .then(() => {
                const restaurant = this.props.restaurant;
                this.setState({
                    menu: (typeof restaurant === "undefined" || typeof restaurant.menu === "undefined") ? [] : restaurant.menu,
                    order: this.state.order,
                    editing_dish: this.state.editing_dish,
                    favoringCustomers: (typeof restaurant === "undefined" || typeof restaurant.favoringCustomers === "undefined") ? [] : restaurant.favoringCustomers,
                    historyOrders: (typeof restaurant === "undefined" || typeof restaurant.historyOrders === "undefined") ? [] : restaurant.historyOrders,
                    liked: typeof this.props.restaurant !== "undefined"
                        && typeof this.props.user !== "undefined"
                        && this.props.user.userType === "Customer"
                        && this.props.user.favorites.filter((item) => item._id === this.props.restaurant._id).length === 0
                });
            });
    }

    removeOne(order, dish) {
        let removed = false;
        const result = [];
        for (let d in order) {
            if (order[d] !== dish || removed) {
                result.push(order[d]);
            } else if (order[d] === dish && !removed) {
                removed = !removed;
            }
        }
        return result;
    }


    render() {
        return (
            <div className="container-fluid ">
                <TopMenu/>
                <div className="">
                    {/*/////////////////////////////////////////////////////////////////////////*/}
                    <div className="col-8 float-lg-left">
                        <h1>{this.props.results.name}</h1>
                        <img src={this.props.results.image_url}
                             alt={this.props.results.name}
                             style={{width: '600px', height: '400px'}}/>
                        <h3>{this.props.results.display_phone}</h3>
                        <h3>{this.props.results.rating}</h3>
                        {
                            typeof this.props.results.location === 'object' ?
                                <h3>
                                    {
                                        this.props.results.location.display_address[0] + '\n' + this.props.results.location.display_address[1]
                                    }
                                </h3>
                                : null
                        }
                        <h3>{"price: " + this.props.results.price}</h3>
                        {
                            typeof this.props.restaurant !== "undefined" ?
                                <button className="btn btn-success">
                                    Order food here!
                                </button>
                                :
                                <button onClick={() => console.log(this.props.user)}
                                        className="btn btn-success disabled">
                                    Not hosted
                                </button>
                        }
                        {
                            typeof this.props.user !== "undefined" && this.props.user.userType === "BusinessMan" ?
                                typeof this.props.restaurant === "undefined" ?
                                    <button onClick={() =>
                                        this.props.handlers.claimRestaurant(this.props.results.id)
                                            .then(() => this.init())
                                    }
                                            className="btn btn-success">
                                        Claim
                                    </button>
                                    : (this.props.restaurant.owner._id === this.props.user._id ?
                                    <button onClick={() =>
                                        this.restaurant_service.dropRestaurant(this.props.restaurant._id)
                                            .then((res) => {
                                                console.log(res);
                                                this.init();
                                            })
                                    }
                                            className="btn btn-danger">
                                        Drop restaurant
                                    </button>
                                    :
                                    <button onClick={() => {
                                        console.log(this.props.restaurant);
                                        console.log(this.props.user);
                                    }}
                                            className="btn btn-success disabled">
                                        This restaurant has already been claimed
                                    </button>)
                                :
                                <div/>
                        }
                        {typeof this.props.restaurant !== "undefined" && typeof this.props.user !== "undefined" &&
                        this.props.user.userType === "BusinessMan" &&
                        <div>
                            <div className="form-inline">
                                <input className="form-control" value={this.state.editing_dish}
                                       onChange={(event) => this.setState({editing_dish: event.target.value})}
                                />
                                <button className="btn btn-warning" onClick={
                                    () => {
                                        const newMenu = Array.from(this.state.menu);
                                        newMenu.push(this.state.editing_dish);
                                        this.restaurant_service.updateRestaurant(this.props.restaurant._id, {
                                                ...this.props.restaurant,
                                                menu: newMenu
                                            }
                                        ).then(res => {
                                            console.log(res);
                                            this.setState({menu: res.menu, editing_dish: ""});
                                        })
                                    }
                                }>add this dish to menu
                                </button>
                            </div>
                            <div className="form-group">
                                {this.state.menu.map((dish, index) =>
                                    <div className="form-group-item" key={index}>
                                        <label>{dish}</label>
                                        <button className="btn btn-danger"
                                                onClick={
                                                    () => {
                                                        const newMenu = this.removeOne(this.state.menu, dish);
                                                        this.restaurant_service.updateRestaurant(this.props.restaurant._id,
                                                            {menu: newMenu}
                                                        ).then(
                                                            res => this.setState({
                                                                ...this.props.restaurant,
                                                                menu: res.menu
                                                            })
                                                        );
                                                    }
                                                }
                                        >delete
                                        </button>
                                    </div>)
                                }
                            </div>
                        </div>
                        }
                        {typeof this.props.restaurant !== "undefined" && typeof this.props.user !== "undefined" &&
                        this.props.user.userType === "Customer" &&
                        <div>
                            <div className="form-group">
                                {this.state.menu.map((dish, index) =>
                                    <div className="form-group-item" key={index}>

                                        <button className="btn btn-primary"
                                                onClick={
                                                    () => {
                                                        const newOrder = Array.from(this.state.order);
                                                        newOrder.push(dish);
                                                        console.log(newOrder);
                                                        this.setState({order: newOrder});
                                                    }
                                                }>
                                            add one
                                        </button>
                                        <label className="">{dish}</label>
                                        <button className="btn btn-primary"
                                                onClick={
                                                    () => {
                                                        // const index2 = this.state.menu.indexOf(dish);
                                                        // if (index2 !== -1) {
                                                        //     const newOrder = Array.from(this.state.order);
                                                        //     newOrder.splice(index2, 1);
                                                        //     this.setState({order: newOrder});
                                                        // }
                                                        this.setState({order: this.removeOne(this.state.order, dish)})
                                                    }
                                                }>
                                            remove one
                                        </button>
                                    </div>)
                                }
                            </div>
                            <h6>current order: </h6>
                            <ul>
                                {
                                    this.state.order.map((dish, index) =>
                                        <li key={index}>{dish}</li>)
                                }
                            </ul>
                            <button className="btn btn-success"
                                    onClick={() =>
                                        this.restaurant_service.send_order(this.props.restaurant._id, this.state.order).then(res => {
                                            if (typeof res.message !== "undefined") {
                                                alert(res.message)
                                            } else {
                                                alert(`order has been successfully requested. \n`)
                                                this.setState({order: []})
                                                this.init();
                                            }
                                        })
                                    }>request order
                            </button>
                        </div>
                        }
                    </div>
                    {/*/////////////////////////////////////////////////////////////////////////*/}
                    <div className="col-4 float-lg-right">
                        {typeof this.props.restaurant !== "undefined" && typeof this.props.user !== "undefined" &&
                        this.props.user.userType === "Customer" && <div>
                            {!this.state.liked &&
                            <button className="btn btn-outline-primary"
                                    onClick={() => {
                                        this.restaurant_service.like_this_restaurant(this.props.user._id, this.props.restaurant._id).then(
                                            status => {
                                                if (status == 200) {
                                                    this.setState({liked:!this.state.liked});
                                                    this.init();
                                                }
                                            }
                                        )
                                    }}
                            >Like!</button>}
                            {this.state.liked &&
                            <button className="btn btn-outline-secondary"
                                    onClick={() => {
                                        this.restaurant_service.unlike_this_restaurant(this.props.user._id, this.props.restaurant._id).then(
                                            status => {
                                                if (status == 200) {
                                                    this.setState({liked:!this.state.liked});
                                                    this.init();
                                                }
                                            }
                                        )
                                    }}
                            >Liked</button>}
                            <h4>customers who liked here: </h4>
                            <div className="list-group">
                                {this.state.favoringCustomers.map((customer, index) =>
                                    <Link className="list-group-item" to={`/profile/${customer._id}`} key={index}/>
                                )}
                            </div>
                            <h4>history orders: </h4>
                            <div className="list-group">
                                {this.state.historyOrders.map((order, index) =>
                                    <div className="list-group-item form-inline" key={index}>
                                        {order.orders.map((dish, index) =>
                                            <div key={index}>{dish}</div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>}
                    </div>
                    {/*/////////////////////////////////////////////////////////////////////////*/}
                </div>
            </div>
        );
    }
}

export default RestaurantDetailComponent;
