import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import RestaurantSearchContainer from "../containers/RestaurantSearchContainer";
import UserIcon from "./UserComponents/UserIcon";
import TopMenu from "./UserComponents/TopMenu";

class RestaurantDetailComponent extends React.Component {

    constructor(props) {
        super(props);
        const id = window.location.pathname.split("/")[2];
        console.log(id);
        this.props.handlers.searchBusinessById(id);
        this.props.handlers.findRestaurant(id);
        this.props.handlers.checkLogin();
    }

    render() {
        return (
            <div>
                <TopMenu/>
                <h1>{this.props.results.name}</h1>
                <img src={this.props.results.image_url}
                     alt={this.props.results.name}/>
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
                        <button onClick={() => this.props.handlers.claimRestaurant(this.props.results.id)}
                                className="btn btn-success">
                            Claim
                        </button>
                            :
                            <button onClick={() => console.log(this.props.restaurant)}
                                    className="btn btn-success disabled">
                                This restaurant has already been claimed
                            </button>
                        :
                        <div/>
                }
            </div>
        );
    }
}

export default RestaurantDetailComponent;
