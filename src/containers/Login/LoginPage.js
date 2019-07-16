import React from 'react'
import LoginForm from './LoginForm'
import LoginHeader from './LoginHeader'

class LoginPage extends React.Component{
    render()
    {
        return(
            <div>
                <LoginHeader />
                <br />
                <br />
                <LoginForm />
            </div>
        )
    }
}

export default LoginPage
