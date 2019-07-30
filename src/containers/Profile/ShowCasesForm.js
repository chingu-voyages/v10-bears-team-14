import React, {Component} from 'react'
import {  Button } from 'react-bootstrap'

export default class ShowCasesForm extends Component{
    constructor(props) {
        super(props);
        this.state={
            showCases:this.props.showCases
        }
    }

    render()
    {
        return(
            <div className="col-md-8 col-md-offset-2">
                <h2>ShowCases</h2>
                <Button>show all</Button>
            </div>
        )
    }
}