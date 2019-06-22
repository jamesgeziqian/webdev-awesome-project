import React from "react";
import RestaurantSearchContainer from "../../containers/RestaurantSearchContainer";
import UserIcon from "./UserIcon";
export default class TopMenu extends React.Component{
    render=() =>
        <div>
            <UserIcon/>
            <RestaurantSearchContainer/>

        </div>

}
