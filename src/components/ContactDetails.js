import React, {Component} from 'react';
export default class ContactDetails extends Component {
    render(){
        const details = (<div>{this.props.contact.name} {this.props.contact.phone}</div>);
        const blank = (<div></div>);
        return(
            <div> <h2>Details</h2> {this.props.isSelected ? details : blank}</div>
        )
    }
}
ContactDetails.defaultProps = {
    contact: {
        name: '',
        phone: ''
    }
}