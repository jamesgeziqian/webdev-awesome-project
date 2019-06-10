import React from 'react';
import {Link} from "react-router-dom";

const RestaurantResultsComponent = ({searchTerm, location, results, handlers}) => {
    if (typeof results.businesses === "undefined" || results.businesses.length===0) {
        console.log("default value for results");
        handlers.searchTermLocal(searchTerm);
        return null;
    }
    // console.log(results);
    return (
        <div>
            <h3>Search Results</h3>
            <ul>
                {
                    results["businesses"].map(
                        (business) =>
                            <li key={business.id}>
                                <Link to={`/result/${business.id}`}>
                                    {business.name}
                                </Link>
                            </li>
                    )
                }
            </ul>
        </div>
    );
};

export default RestaurantResultsComponent;
