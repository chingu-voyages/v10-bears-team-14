import React from 'react'
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import $ from 'jquery'
import '../../assets/css/Profile.css'
import InterestListItem from './InterestListItem.js'

class ProfileForm extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            country:this.props.country,
            interests:this.props.interests
        };
        this.handleInputChange=this.handleInputChange.bind(this);
        this.del=this.del.bind(this);
        this.addInterest=this.addInterest.bind(this);
    }

    componentDidMount() {
        this.validateEditable(this.props);
    }

    validateEditable(){
        if(!this.props.editable)
        {
            document.getElementById("form-country").disabled=true;
            document.getElementById("addBtn").style.display="none";
            document.getElementsByClassName("delIcon").disabled=true;

        }

    }

    handleInputChange=(event)=>{
        const target=event.target;
        const value=target.value;
        const name=target.name;
        this.setState({
            [name]:value
        })
    };

    //Delete interests
    del(e){
        //$(this).parent().remove();
        let index=e.target.getAttribute("data-index");
        let list=this.state.interests;
        list.splice(index,1);
        this.setState({
            interests:list
        });

    }

    //Add Interests
    addInterest()
    {
        let _this=this;

        let Input=$("<input />");
        Input.css({
                width:"60px",
                height:"35px"
            });
        Input.on("blur",function(){
                if(this.value){

                    let lists=_this.state.interests;

                    lists.push(this.value);
                    _this.setState({interests:lists});

                }
                $(this).remove();
                $("#addBtn").show()
            });
            $(".btn-group").append(Input);
            Input.focus();
            $("#addBtn").hide()


    }

    render()
    {
        const interestList=this.state.interests.map((item,index)=> {
            return <InterestListItem key={item?item:index} value={item} del={this.del} index={index}/>
        });

        return(
            <div>
                <div className="col-md-8 col-md-offset-2"><h2>Profile</h2></div>
                <div className="col-md-8 col-md-offset-2">
                <form>
                    <Form.Group controlId="form-username">
                        <Form.Label>username</Form.Label>
                        <Form.Control type="text" value={this.props.username} disabled></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="form-country">
                        <Form.Label>country</Form.Label>
                        <Form.Control name="country" defaultValue={this.state.country} type="text" onChange={this.handleInputChange}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="form-interest">
                        <Form.Label>Interest</Form.Label>
                        <br />
                        <div className="btn-group">
                            {interestList}
                        </div>
                        <Button id="addBtn" onClick={this.addInterest}>add</Button>
                    </Form.Group>
                </form>
                </div>
            </div>
        )
    }
}

export default ProfileForm