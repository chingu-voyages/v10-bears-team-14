import React, {Component} from 'react'
import {  Button } from 'react-bootstrap'

export default class ParticipationsForm extends Component{
    constructor(props) {
        super(props);
        this.state={
            participations:this.props.participations
        }
    }

    render()
    {
        return(
            <div className="col-md-8 col-md-offset-2">
                <h2>participations</h2>
                <Button>show all</Button>
            </div>
        )
    }
}