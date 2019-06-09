import React from 'react';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import reducer from "./reducers";
import RestaurantSearchContainer from "./containers/RestaurantSearchContainer";
import RestaurantResultsContainer from "./containers/RestaurantResultsContainer";

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
                    <RestaurantResultsContainer/>
                    {/*<Route path="/"*/}
                    {/*       component={() => <RestaurantSearchContainer state={this.store}/>}*/}
                    {/*/>*/}
                    {/*<Route path="/search/term/:term/location/:location"*/}
                    {/*       render={() => <RestaurantResultsContainer state={this.store}/>}*/}
                    {/*/>*/}
                </Router>
            </Provider>
        );
    }
}

export default Main;
