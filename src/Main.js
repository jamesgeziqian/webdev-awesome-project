import React from 'react';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import reducer from "./reducers";
import RestaurantSearchContainer from "./containers/RestaurantSearchContainer";
import RestaurantResultsContainer from "./containers/RestaurantResultsContainer";
import RestaurantDetailContainer from './containers/RestaurantDetailContainer';
import RestaurantDetailComponent from "./components/RestaurantDetailComponent";
import LoginComponent from "./components/UserComponents/LoginComponent";
import ProfileComponent from "./components/UserComponents/ProfileComponent";
import RegisterComponent from "./components/UserComponents/RegisterComponent";
import UserService from "./services/UserService"
import TopMenu from "./components/UserComponents/TopMenu";
import PublicProfile from "./components/UserComponents/PublicProfile";

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.store = createStore(reducer);
    }

    render() {
        return (
            <Provider store={this.store}>
                {/*<RestaurantSearchContainer/>*/}
                {/*<RestaurantResultsContainer/>*/}
                <Router>
                    <Switch>

                        <Route path='/login'
                               render={() => <LoginComponent state={this.store}/>}/>
                        <Route path='/profile'
                               render={() => <ProfileComponent state={this.store}/>}/>
                        <Route path='/register'
                               render={() => <RegisterComponent state={this.store}/>}/>
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
                               render={() => <RestaurantDetailContainer state={this.store}/>}/>
                        <Route path='/'
                               render={() => <TopMenu state={this.store}/>}/>
                        <Route path='/profile/:userId'
                               render={props => <PublicProfile {...props}/>}/>
                            {/*render={() => <RestaurantDetailContainer state={this.store}/>}*/}
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

export default Main;
