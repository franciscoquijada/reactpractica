import React, {useState} from 'react';


const Counter = () => {
    const [number, setNumber] = useState(0);
    const handleUpNumber= () => {
        console.log('Haz hecho click');
        setNumber(number+1);
    }
    return (
        <div>
            <h3>Mi primer Componente, el numero es {number}</h3>
            <button onClick={handleUpNumber}>Aumentar</button>
        </div>
    );
}
export default Counter;