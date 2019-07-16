import React from 'react'
import RegisterForm from './RegisterForm.js'
import RegisterHeader from "./RegisterHeader";

class RegisterPage extends React.Component{
    render()
    {
        return(
            <div>
                <RegisterHeader />
                <br />
                <br />
                <RegisterForm />
            </div>
        )
    }
}

export default RegisterPage