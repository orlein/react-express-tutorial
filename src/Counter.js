import React, { Component } from 'react';
class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
          value: 0,
        };
        this.button1_onClick = this.button1_onClick.bind(this);
        this.alt_onClick = this.alt_onClick.bind(this);
    }
    button1_onClick(event, value) {
        event.stopPropagation();
        
        this.setState({
            value: this.state.value + 1,
        });
    }
    alt_onClick(event, value) {
        if (event.altKey) {
            console.log(this.state.value);
        }
    }
    render() {
      return (
          <div>
            <h2 onClick={this.alt_onClick}>{this.state.value}</h2>
            <button onClick={this.button1_onClick}>Press me</button>
          </div>
      )
    
    }
} 
export default Counter;