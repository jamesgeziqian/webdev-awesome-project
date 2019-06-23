import React from 'react'
import {Router, Route,Link} from "react-router-dom";
import UserService from "../../services/UserService";
// import { Redirect } from "react-router-dom";
import { withRouter } from 'react-router-dom';

class RegisterComponent extends React.Component {
    constructor(props) {
        super(props);
        this.user_service = UserService.getInstance();
        this.state={
            username:"",
            phone:"",
            email:"",
            zip:"",
            password:"",
            verify_password:"",
            userType:"Customer"
        }

    }

    render() {
        return (
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
                                   value={this.state.username}
                                   onChange={event =>this.setState({username:event.target.value})}
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
                                   value={this.state.phone}
                                   onChange={event =>this.setState({phone:event.target.value})}
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
                                   value={this.state.email}
                                   onChange={event =>this.setState({email:event.target.value})}
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
                                   value={this.state.zip}
                                   onChange={event =>this.setState({zip:event.target.value})}
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
                            <input
                                   className="form-control wbdv-password-fld"
                                   id="password"
                                   value={this.state.password}
                                   onChange={event =>this.setState({password:event.target.value})}
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
                            <input
                                   className="form-control"
                                   id="verifyPassword"
                                   type="password"
                                   value={this.state.verify_password}
                                   onChange={event =>this.setState({verify_password:event.target.value})}
                                   placeholder="re-enter your password"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="role"
                               className="col-sm-2 col-form-label">
                            Role
                        </label>
                        <div className="col-sm-10">
                            <select id="role"
                                    className="form-control" value={this.state.userType}
                                    onChange={event =>this.setState({userType:event.target.value})}
                            >
                                <option value="Customer" title="if you are just a customer, choose this">
                                    customer --if you are just a customer
                                </option>
                                <option value="BusinessMan" title="if you own a restaurant, choose this">
                                    businessperson -- if you own a restaurant
                                </option>

                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <button className="btn btn-primary btn-block"
                                  onClick={()=> this.sign_up_handler()}>
                                Sign up
                            </button>
                            <Link className="btn btn-danger btn-block"
                                  to="/">
                                Cancel
                            </Link>
                            <div className="row">
                                <div className="col-6">
                                </div>
                                <div className="col-6">

                                    <Link to="/login"
                                          className="float-right">
                                        Sign in
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    // sign_up_handler() {
    //     this.user_service.try_register(this.state).then(res => {
    //         if(this.state.password!==this.state.verify_password){
    //             alert("passwords not same");
    //             return;
    //         }
    //         if(typeof res.message==="undefined"){
    //             console.log(res);
    //         }else{
    //             alert(res.message);
    //         }
    //     });
    // }
    sign_up_handler() {
      this.user_service.try_register(this.state).then(res => {
          if(this.state.password!==this.state.verify_password){
              alert("the second password is not the same as the first one!");
              return;
          }
          if(typeof res.message!=="undefined"&&res.message==="Login success"){
              this.props.history.push("/");
          }else if(typeof res.message!=="undefined"){
              alert(res.message);
          }else{
              alert("ERROR! UNKNOWN REASON.");
          }
      });
    }
}
export default withRouter(RegisterComponent);
