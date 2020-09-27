import React, {useState, Fragment} from 'react';

const List = () => {
    const [myArray, setMyArray] = useState([1,2,3,4,5]);
    const [number, setNumber] = useState(1);

    const handleAddElement = () => {
        setNumber(number + 1);
        setMyArray([...myArray, number])
    }

    return( 
        <Fragment>
            <h1>Componente Lista</h1>
            <button onClick={handleAddElement}>Agregar elemento a arreglo</button>
            {
                myArray.map((item, index) =>
                    <p key={index}>{item}</p>
                )
            }
        </Fragment>
    );
}
export default List;