import React, {Component} from 'react';
import ContactInfo from './ContactInfo';
export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
            contactData: [
                {name: 'Abet', phone: '010-0000-0001'},
                {name: 'Betty', phone: '010-0000-0002'},
                {name: 'Charlie', phone : '010-0000-0003'},
                {name: 'Polly', phone: '010-0000-0004'},
                {name: 'Foxy', phone: '010-0000-0004'},
                {name: 'Harley', phone: '010-0000-0004'},
            ]
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({
            keyword: e.target.value
        })
    }
    render() {
        const mapToComponent = (data) => {
            data.sort();
            data = data.filter((contact) => { 
                return contact.name.toLowerCase().indexOf(this.state.keyword) > -1; 
            });
            return data.map((contact, i) => {
                return (<ContactInfo contact={contact} key={i} />);
            });
        };
        return (
            <div>
            <input name="keyword" placeholder="Search" value={this.state.keyword} onChange={this.handleChange}/>
                {mapToComponent(this.state.contactData)}
            </div>
        )
    }
}
