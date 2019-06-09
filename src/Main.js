import React from 'react';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import reducer from "./reducers";
import RestaurantSearchContainer from "./containers/RestaurantSearchContainer";

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.store = createStore(reducer);
    }

    render() {
        return (
            <Provider store={this.store}>
                <Router>
                    <RestaurantSearchContainer/>
                    {/*<Route path="/"*/}
                    {/*       component={<RestaurantSearchContainer/>}*/}
                    {/*/>*/}
                    {/*<Route path="/search/term/:term/location/:location"*/}
                    {/*       component={}*/}
                    {/*/>*/}
                </Router>
            </Provider>
        );
    }
}

export default Main;
