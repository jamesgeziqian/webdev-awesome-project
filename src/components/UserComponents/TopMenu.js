import React from "react";
import RestaurantSearchContainer from "../../containers/RestaurantSearchContainer";
import UserIcon from "./UserIcon";
import LoginContainer from "../../containers/LoginContainer";
export default class TopMenu extends React.Component{
    render=() =>
        <div>
            <LoginContainer/>
            <RestaurantSearchContainer/>

        </div>

}
