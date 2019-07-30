import React from 'react'
import '../../assets/css/Profile.css'

class InterestListItem extends React.PureComponent{

    render(){
        return(<button type="button" className="interestBtn">
            {this.props.value}
            <i className="delIcon" onClick={this.props.del} data-index={this.props.index}>X</i>
        </button>)
    }
}

export default InterestListItem;