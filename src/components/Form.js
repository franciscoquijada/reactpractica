import React, {useState, Fragment} from 'react';

const Form = () => {
    const [data, setData] = useState({nombre: '', apellido: ''});
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(data.nombre + ' ' + data.apellido);
    }
    
    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name] : event.target.value,
        });
    }

    return (
        <Fragment>
            <div className="container text-center">
                <h1>Formulario</h1>
                <form onSubmit={handleSubmit} className="row mt-5">
                    <div className="col-md-6">
                            <input 
                                onChange={handleInputChange} 
                                type="text"
                                name="nombre"
                                placeholder="Ingresa tu nombre"
                                className="form-control"
                                />
                        </div>
                        <div className="col-md-6">
                            <input
                                onChange={handleInputChange} 
                                type="text"
                                name="apellido"
                                placeholder="Ingresa tu apellido"
                                className="form-control"
                                />
                    </div>
                    <button className="btn btn-primary my-2" type="submit">Enviar</button>
                </form>
           </div>
        </Fragment>
    );
}
export default Form;