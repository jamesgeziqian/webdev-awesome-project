import React from 'react'
import MyFancyComponent from "./MyMapComponent";

const RestaurantSearchComponent = () =>
    <div className="container-fluid">
        <h1>Restaurant Search</h1>
    <div className="form-inline">
        <input className="form-control" placeholder="keyword"/>
        <input className="form-control" placeholder="location"/>
        <button className="btn btn-danger">search</button>
    </div>
        <MyFancyComponent isMarkerShown={true} />
    </div>;

export default RestaurantSearchComponent