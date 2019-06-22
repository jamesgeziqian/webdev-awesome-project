import React from 'react';
import {Link} from "react-router-dom";
import RestaurantSearchContainer from "../containers/RestaurantSearchContainer";
import UserIcon from "./UserComponents/UserIcon";
import TopMenu from "./UserComponents/TopMenu";

const RestaurantResultsComponent = ({searchTerm, location, results, handlers}) => {
    if (typeof results.businesses === "undefined" || results.businesses.length === 0) {
        handlers.searchTermLocal(searchTerm);
        return null;
    }
    return (
        <div>
            <TopMenu/>
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
