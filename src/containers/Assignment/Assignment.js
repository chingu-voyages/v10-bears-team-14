import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Header from '../../templates/Header';
import AssignmentListItem from './AssignmentListItem'

class Assignment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            assignments: [
                {
                    name: "First",
                    url: "first",
                    instruction: "String one"
                },
                {
                    name: "Second",
                    url: "second",
                    instruction: "String two"
                }
            ],
            name: '',
            url: '',
            instruction: ''

        }
    }

    onSubmit = (e) => {
        e.preventDefault();

        const assignment = {
            name: this.state.name,
            url: this.state.url,
            instruction: this.state.instruction
        }

        this.setState({ assignments: [...this.state.assignments, assignment] });

        this.setState({ name: '', url: '', instruction: '' })
    }

    onChange = (type, event) => {
        this.setState({ [type]: event.target.value })
    }

    onDelete = (event, id) => {
        event.preventDefault();
        this.setState({ assignments : this.state.assignments.filter((assignment,index) => index!=id)});
    }

    render() {

        const assignmentList = this.state.assignments.map((assignment,index) => {
            return <AssignmentListItem name={assignment.name} url={assignment.url} instruction={assignment.instruction} index={index} onDelete={this.onDelete}/>
        })

        return (
            <div>
                <h3 style={{textAlign:'center'}}>Assignments</h3>
                {assignmentList}
                <form onSubmit={this.onSubmit}>
                    <br/>
                    <h4>Add Assignment</h4>
                    <div className="form-group" style={{clear:"both"}}>
                        <label htmlFor="formGroupExampleInput">Name</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" onChange={(event) => this.onChange('name', event)} />
                    </div>
                    <div className="form-group" style={{clear:"both"}}>
                        <label htmlFor="formGroupExampleInput">URL</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" onChange={(event) => this.onChange('url', event)} />
                    </div>
                    <div className="form-group" style={{clear:"both"}}>
                        <label htmlFor="formGroupExampleInput">Instruction</label>
                        <textarea type="text" className="form-control" id="formGroupExampleInput" onChange={(event) => this.onChange('instruction', event)} />
                    </div >
                    <Button variant="warning" type="submit">
                        Add Assignment
                    </Button>
                    
                </form>
            </div>
        )
    }
}

export default Assignment;