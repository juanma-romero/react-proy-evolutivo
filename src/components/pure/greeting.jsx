import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {

    constructor(props) {
        super(props);
        this.state = {
            age: 46
        }
    }

    render() {
        return (
            <div>
                <h2>holassss en Greeting</h2>
                <p>{this.props.name}</p>
                <p>{this.state.age} greetein ambien</p>
                <button onClick={this.cumple}>cunple</button>
            </div>
        );
    }

    cunple = () => {
        this.setState((prevState) => (
            {
                age: prevState.age +1
            }
        ))
    }
}


Greeting.propTypes = {
    name: PropTypes.string 
};


export default Greeting;

