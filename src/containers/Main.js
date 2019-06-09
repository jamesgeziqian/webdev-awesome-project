import React from 'react';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import reducer from "../reducers";

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.store = createStore(reducer);
    }

    render() {
        return(
          <Provider store={this.store}>
              <Router>

              </Router>
          </Provider>
        );
    }
}
