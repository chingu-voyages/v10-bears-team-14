import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import '../../assets/css/Login.css'

class LoginForm extends React.Component {
  render() {
    return (
      <div>
        <form id="loginForm">
          <div className="form-group">
            <label className="col-sm-4 control-label">Email</label>
            <div className="col-sm-8">
              <input type="input" className="form-control" placeholder="Email or Username" />
            </div>
          </div>

          <div className="form-group">
            <label className="col-sm-4 control-label">Password</label>
            <div className="col-sm-8">
              <input type="password" className="form-control" placeholder="Password" />
            </div>
          </div>

          <br />
          <button id="loginBtn" className="btn btn-success">Login</button>
        </form>
      </div>
    )
  }
}

export default LoginForm