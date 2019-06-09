import React from 'react';
import {Link} from "react-router-dom";

const RestaurantResultsComponent = ({searchTerm, location, results, handlers}) => {
    if (results.length === 0) {
        console.log("default value for results");
        handlers.searchTermLocal(searchTerm);
        return null;
    }
    return (
        <div>
            <h3>Search Results</h3>
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
                <ul>
                    {
                        results.length > 0 ?
                        results["businesses"].map(business => <li>{business.id}</li>)
                            : null
                    }
                </ul>
            </div>
        </div>
    );
};

export default RestaurantResultsComponent;
