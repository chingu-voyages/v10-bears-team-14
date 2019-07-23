import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import '../../assets/css/Login.css'
import axios from 'axios'

class LoginForm extends React.Component {
  constructor(props)
  {
    super(props);
    this.state={ username:'', password:''};
  }

  login()
  {
    const url='/login';
    return axios.post(url,this.state).then(res=>res.data).catch(error=>console.log(error));
  }

  handleInputChange(event)
  {
    const target=event.target;
    const value=target.value;
    const name=target.name;
    this.setState({
      [name]:value
    })
  }
  render() {
    return (
      <div>
        <form id="loginForm">
          <div className="form-group">
            <label className="col-sm-4 control-label">Email</label>
            <div className="col-sm-8">
              <input name="username" type="input" className="form-control" placeholder="Email or Username" onChange={this.handleInputChange}/>
            </div>
          </div>

          <div className="form-group">
            <label className="col-sm-4 control-label">Password</label>
            <div className="col-sm-8">
              <input name="password" type="password" className="form-control" placeholder="Password" onChange={this.handleInputChange}/>
            </div>
          </div>

          <br />
          <button id="loginBtn" className="btn btn-success" onClick={this.login}>Login</button>
        </form>
      </div>
    )
  }
}

export default LoginForm