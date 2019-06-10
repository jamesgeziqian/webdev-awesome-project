import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

class RestaurantDetailComponent extends React.Component {

    constructor(props) {
        super(props);
        const id = window.location.pathname.split("/")[2];
        console.log(id);
        this.props.handlers.searchBusinessById(id);
    }

    render() {

        return (
            <div>
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
            </div>
        );
    }
}

export default RestaurantDetailComponent;
