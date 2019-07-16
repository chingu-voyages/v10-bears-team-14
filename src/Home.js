import React from 'react'
import { Link } from 'react-router-dom'
class Home extends React.Component{
    render() {
        return(
            <div>
                <h1 align="center" style={{top: '20px'}}>Landing Page</h1>
                <br />
                <div className="btn-group-justified" align="center">
                    <Link to="/login">
                        <button className="btn btn-success">Sign in</button>
                    </Link>
                    <Link to="/register">
                    <button className="btn btn-primary">Sign up</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Home