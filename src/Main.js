import React from 'react';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import reducer from "./reducers";
import RestaurantSearchContainer from "./containers/RestaurantSearchContainer";
import RestaurantResultsContainer from "./containers/RestaurantResultsContainer";
import RestaurantDetailContainer from './containers/RestaurantDetailContainer';
import RestaurantDetailComponent from "./components/RestaurantDetailComponent";

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
                    {/*<RestaurantSearchContainer/>*/}
                    {/*<RestaurantResultsContainer/>*/}
                    <Switch>
                        <Route path="/search/term/:term/location/:location"
                               render={() => <RestaurantResultsContainer state={this.store}/>}
                        />
                        <Route path="/search/term/:term/location/"
                               render={() => <RestaurantResultsContainer state={this.store}/>}
                        />
                        <Route path="/search/term//location/:location"
                               render={() => <RestaurantResultsContainer state={this.store}/>}
                        />
                        <Route path="/search/term//location/"
                               render={() => <RestaurantResultsContainer state={this.store}/>}
                        />
                        <Route path='/result/:id'
                               render={() =><RestaurantDetailContainer state={this.store}/>} />
                                {/*render={() => <RestaurantDetailContainer state={this.store}/>}*/}

                    </Switch>
                </Router>
            </Provider>
        );
    }
}

export default Main;
