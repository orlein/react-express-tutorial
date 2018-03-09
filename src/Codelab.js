import React, { Component } from 'react';
import propTypes from 'prop-types';
class Codelab extends Component
{
    constructor(){
        this.state={}
    }
    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
                <h2>{this.props.number}</h2>
                {this.props.children}
            </div>
        );
    }
}
Codelab.propTypes = {
    name: propTypes.string,
    number: propTypes.number.isRequired,
}
Codelab.defaultProps = {
    name: 'Unknown',
    
};
export default Codelab;