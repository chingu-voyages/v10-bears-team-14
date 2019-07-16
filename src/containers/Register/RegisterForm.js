import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './Register.css'

class RegisterForm extends React.Component{
    render() {
        return(
            <div>
                <form id="RegisterForm">
                    <div className="form-group">
                        <label className="col-sm-4 control-label">Email</label>
                        <div className="col-sm-8">
                            <input type="input" className="form-control" placeholder="Email" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-4 control-label">Username</label>
                        <div className="col-sm-8">
                            <input type="input" className="form-control" placeholder="Username" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-4 control-label">Password</label>
                        <div className="col-sm-8">
                            <input type="password" className="form-control" placeholder="Password" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-4 control-label">Confirm</label>
                        <div className="col-sm-8">
                            <input type="password" className="form-control" placeholder="Password" />
                        </div>
                    </div>
                    <br />
                    <br />
                    <button id="RegisterBtn" className="btn btn-success">Login</button>
                </form>
            </div>
        )
    }
}

export default RegisterForm;