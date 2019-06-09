import React from 'react'
import {BrowserRouter as Router, Link} from "react-router-dom";
import MyFancyComponent from "./MyMapComponent";

const RestaurantSearchComponent = ({searchTerm, location, handlers}) =>
    <div className="container-fluid">
        <h1>Restaurant Search</h1>
        <div className="form-inline">
            <input className="form-control"
                   placeholder="keyword"
                   value={searchTerm}
                   onChange={event => handlers.searchTermLocal(event.target.value)}
            />
            <input className="form-control"
                   placeholder="location"
                   value={location}
                   onChange={event => handlers.searchLocationLocal(event.target.value)}
            />
            <Link className="btn btn-danger"
                  to={`/search/term/${searchTerm}/location/${location}`}
                  onClick={() => handlers.searchBusiness(searchTerm, location)}>
                search
            </Link>
        </div>
        <MyFancyComponent isMarkerShown={true}/>
    </div>;

export default RestaurantSearchComponent
