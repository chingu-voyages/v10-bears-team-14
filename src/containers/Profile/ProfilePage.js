import React,{ Component } from 'react';
import ProfileForm from './ProfileForm.js';
import ShowCasesForm from '../ShowCase/ShowCasesForm.js';
import LearnPathForm from './LearnPathForm.js';
import ParticipationsForm from "../Participation/ParticipationsForm";
import ProfileHeader from '../../templates/ProfileHeader'

export default class ProfilePage extends Component{

    constructor(props) {
        super(props);
        this.state={
            userId:"",
        }
    }

    componentWillMount() {
        const value=localStorage.getItem("userId");
        if(value)
        {
            this.setState({
                userId:value
            })
        }
    }

    render()
    {
        const userId=this.props.match.params.userId;
        let editable=false;
        if(userId==this.state.userId)
            editable=true;
        let interests=["java","python","C#"];
        let learningPaths=[];
        let participations=[
            {
                participationId:1,
                learningPath: {
                    title: "A",
                    author: "hhh",
                    description: "oraoraoraora",
                    categories: ["Java", "C++"],
                    createdOn: "2019.8.1",
                    updatedOn: "2019.8.3",
                    participants: 4
                },
                progress:"30%",
                assignments:[]
            },
            {
                participationId:2,
                learningPath:{
                    title: "B",
                    author: "h",
                    description: "mudamudamudamuda",
                    categories: ["Go", "C++"],
                    createdOn: "2019.8.1",
                    updatedOn: "2019.8.3",
                    participants: 4
                },
                progress:"30%",
                assignments:[]
            },
            {
                participationId:3,
                learningPath: {
                    title: "C",
                    author: "hhhh",
                    description: "oraoraoraora",
                    categories: ["Java", "Python"],
                    createdOn: "2019.8.1",
                    updatedOn: "2019.8.3",
                    participants: 4
                },
                progress:"30%",
                assignments:[]
            }
        ];
        let showCases=[{
                            showCaseId:1,
                            userId:1,
                            url:"www.google.com",
                            title:"Project A",
                            description: "Null Pointer",
                            categories:["Java","SpringBoot","MySQL"]
                        },
                        {
                            showCaseId:2,
                            userId:1,
                            url:"github.com",
                            title:"Project B",
                            description:"Null",
                            categories:["Python","MongoDB"]
                        }];


        return(
            <div>
                <ProfileHeader />
                <ProfileForm username="123" country="USA" interests={interests} editable={editable} />
                <ShowCasesForm userId={userId} showCases={showCases}/>
                <ParticipationsForm userId={userId} participations={participations}/>
                <LearnPathForm learningPaths={learningPaths}/>
            </div>
        )
    }
}