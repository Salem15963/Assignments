import React, { Component } from 'react'

class NewComponent extends React.Component {

    constructor(props){

        super(props);

        this.state = {age: this.props.age,};

        
    }

    buttonClicked = () => {
        this.setState({age: this.state.age+1});
    }

render() {
    return (
        <div>
            <h1>Name: { this.props.firstName } { this.props.lastName }</h1>
            <h3>Age: { this.state.age }</h3>
            <h3>Hair Color: { this.props.hairColor }</h3>
            <h4>{this.state.value}</h4>
            <button onClick={this.buttonClicked}>Get Older</button>
        </div>
        );
    }
}

export default NewComponent