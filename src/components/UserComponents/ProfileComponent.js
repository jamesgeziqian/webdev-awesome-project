import React from 'react'
import {Link} from "react-router-dom";

export default class ProfileComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <h1>Profile</h1>
                <div className="alert alert-success" role="alert">
                    Profile successfully saved!
                </div>
                <div>
                    <div className="form-group row">
                        <label htmlFor="username"
                               className="col-sm-2 col-form-label">
                            Username
                        </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   id="username"
                                   type="text"
                                   placeholder="Alice"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="phone"
                               className="col-sm-2 col-form-label">
                            phone
                        </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   id="phone"
                                   type="tel"
                                   placeholder="(123)456-7890"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="email"
                               className="col-sm-2 col-form-label">
                            email
                        </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   id="email"
                                   type="email"
                                   placeholder="xxxxx@gmail.com"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="zipCode"
                               className="col-sm-2 col-form-label">
                            zip code
                        </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   id="zipCode"
                                   type="number"
                                   placeholder="02115"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password"
                               className="col-sm-2 col-form-label">
                            Password
                        </label>
                        <div className="col-sm-10">
                            <input type="password"
                                   className="form-control wbdv-password-fld"
                                   id="password"
                                   type="password"
                                   placeholder="enter your password"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="verifyPassword"
                               className="col-sm-2 col-form-label">
                            Verify password
                        </label>
                        <div className="col-sm-10">
                            <input type="password"
                                   className="form-control"
                                   id="verifyPassword"
                                   type="password"
                                   placeholder="re-enter your password"/>
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
                </div>
            </div>
        )
    }
}
