import React from 'react'
import LoginForm from './LoginForm'
import Header from '../../templates/Header'

class LoginPage extends React.Component{
    render()
    {
        return(
            <div>
                <Header />
                <br />
                <br />
                <LoginForm />
            </div>
        )
    }
}

export default LoginPage
