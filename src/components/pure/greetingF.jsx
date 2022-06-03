import React, {useState} from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    //usar useState
    //const [variable, metodo de actualizar] = useState(valor inicial)


    const [age, setAge] = useState(46);
    const cumpleF = () => {
        setAge(age +1)
    }

    return (
        <div>
                <h2>holassss en Greeting desde function</h2>
                <p>{age}</p>
                {/*<p>{this.state.age} greetein ambien</p>*/}
                <button onClick={cumpleF}>cumple</button>
            </div>
    );
};


GreetingF.propTypes = {
name: PropTypes.string
};


export default GreetingF;
