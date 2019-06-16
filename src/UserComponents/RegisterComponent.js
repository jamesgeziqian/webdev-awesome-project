import React from 'react'
const RegisterComponent =()=>
    <div className="container">
        <h1>Register</h1>
        <div>
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
                <label htmlFor="password"
                       className="col-sm-2 col-form-label">
                    Password
                </label>
                <div className="col-sm-10">
                    <input type="password"
                           className="form-control wbdv-password-fld"
                           id="password"
                           placeholder="****"/>
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
                           placeholder="****"/>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label"></label>
                <div className="col-sm-10">
                    <a className="btn btn-primary btn-block"
                       href="../profile/profile.template.client.html">
                        Sign up
                    </a>
                    <a className="btn btn-danger btn-block"
                       href="../index.html">
                        Cancel
                    </a>
                    <div className="row">
                        <div className="col-6">
                            <a href="../login/login.template.client.html">
                                Sign in
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
export default RegisterComponent;