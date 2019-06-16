import React from 'react'
import {Link} from "react-router-dom";

const ProfileComponent = () =>
    <div className="container">
        <h1>Profile</h1>
        <div className="alert alert-success" role="alert">
            Profile successfully saved!
        </div>
        <form>
            <div className="form-group row">
                <label htmlFor="username"
                       className="col-sm-2 col-form-label">
                    Username
                </label>
                <div className="col-sm-10">
                    <input className="form-control"
                           id="username"
                           placeholder="Alice"/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="phone"
                       className="col-sm-2 col-form-label">
                    Phone
                </label>
                <div className="col-sm-10">
                    <input type="tel"
                           className="form-control wbdv-phone-fld"
                           id="phone"
                           placeholder="123-4567"/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="email"
                       className="col-sm-2 col-form-label">
                    Email
                </label>
                <div className="col-sm-10">
                    <input type="email"
                           className="form-control wbdv-email-fld"
                           id="email"
                           placeholder="abc@123.com"/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="role"
                       className="col-sm-2 col-form-label">
                    Role
                </label>
                <div className="col-sm-10">
                    <select id="role"
                            className="form-control wbdv-role-fld">
                        <option value="RESTAURATEUR">
                            restaurateur
                        </option>
                        <option value="CUSTOMER">
                            customer
                        </option>
                    </select>
                </div>
            </div>
            {/*<div className="form-group row">*/}
            {/*    <label htmlFor="birthday"*/}
            {/*           className="col-sm-2 col-form-label">*/}
            {/*        Date of birth*/}
            {/*    </label>*/}
            {/*    <div className="col-sm-10">*/}
            {/*        <input type="date"*/}
            {/*               className="form-control wbdv-email-fld"*/}
            {/*               id="birthday"/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="form-group row">
                <label className="col-sm-2 col-form-label"></label>
                <div className="col-sm-10">
                    <button className="btn btn-success btn-block">
                        Update
                    </button>
                    <Link to=".." className="btn btn-danger btn-block">
                        Log out
                    </Link>
                </div>
            </div>
        </form>
    </div>
export default ProfileComponent;