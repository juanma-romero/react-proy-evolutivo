import React, {useState, useContext} from 'react';

const Ejemplo2 = () => {
    const estado= React.createContext(null)


    return (
        <div>
            <h1>el token es {estado.token}</h1>
            <Ejemplo3></Ejemplo3>
        </div>
    );
}

const Ejemplo3 = () => {
    return (
        <div>
            
        </div>
    );
}

export default Ejemplo2;

