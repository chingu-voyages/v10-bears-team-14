import React,{ Component } from 'react';
import ProfileForm from './ProfileForm.js';
import ShowCasesForm from './ShowCasesForm.js';
import LearnPathForm from './LearnPathForm.js';
import ParticipationsForm from "./ParticipationsForm";

export default class ProfilePage extends Component{


    render()
    {
        let interests=["java","python","C#"];
        let editable=true;
        let learningPaths=[];
        let participations=[];
        let showCases=[];
        return(
            <div>
                <ProfileForm username="123" country="USA" interests={interests} editable={editable} />
                <ShowCasesForm showCases={showCases}/>
                <ParticipationsForm participations={participations}/>
                <LearnPathForm learningPaths={learningPaths}/>
            </div>
        )
    }
}