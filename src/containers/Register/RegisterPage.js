import React from 'react'
import RegisterForm from './RegisterForm.js'
import Header from "../../templates/Header";

class RegisterPage extends React.Component{
    render()
    {
        return(
            <div>
                <Header />
                <br />
                <br />
                <RegisterForm />
            </div>
        )
    }
}

export default RegisterPage