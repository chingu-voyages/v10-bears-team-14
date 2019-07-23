import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import '../../assets/css/Register.css'
import axios from "axios";

class RegisterForm extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            email:'',username:'',password:'',confirm:''
        }
    }

    handleInputChange(event)
    {
        const target=event.target;
        const name=event.name;
        const value=event.value;
        this.setState({
            [name]:value
        })
    }

    register()
    {
        const url='/users';
        return axios.post(url,this.state).then(res=>res.data).catch(error=>console.log(error));
    }

    render() {
        return(
            <div>
                <form id="RegisterForm">
                    <div className="form-group">
                        <label className="col-sm-4 control-label">Email</label>
                        <div className="col-sm-8">
                            <input name='email' type="input" className="form-control" placeholder="Email" onChange={this.handleInputChange}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-4 control-label">Username</label>
                        <div className="col-sm-8">
                            <input name='username' type="input" className="form-control" placeholder="Username" onChange={this.handleInputChange}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-4 control-label">Password</label>
                        <div className="col-sm-8">
                            <input name='password' type="password" className="form-control" placeholder="Password" onChange={this.handleInputChange}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-4 control-label">Confirm</label>
                        <div className="col-sm-8">
                            <input name='confirm' type="password" className="form-control" placeholder="Reenter Password" onChange={this.handleInputChange}/>
                        </div>
                    </div>
                    <br />
                    <br />
                    <button id="RegisterBtn" className="btn btn-success" onClick={this.register}>Login</button>
                </form>
            </div>
        )
    }
}

export default RegisterForm;