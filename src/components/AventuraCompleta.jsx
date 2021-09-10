import React from 'react';
import Historia from './Historia';
import Opciones from './Opciones'
import Historial from './Historial';
import data from "./data.json";

class AventuraCompleta extends React.Component {

    //Declaramos el constructor de la clase con las propiedades 
    constructor(props) {
        //Utilizamos el constructor del componente padre
        super(props);
        //En el array historial guardaremos los datos una vez se actualizan los cambios del componente
        this.historial = [];
        //Definimos los estados de este componente
        this.state = {
            opcion: '',
            contador: 1,
        };
        this.handleClick = this.handleClick.bind(this);
    }
    //Metodo que se ejecuta después que un componente se actualiza y se vuelve a renderizar
    componentDidUpdate() {
        this.historial.push(this.state.opcion.toUpperCase());

    }

    //Metodo que modifica los estados declarados anteriormente una vez el usuario ejecute el evento click
    handleClick = (e) => {
        //Si el contador es igual a cero no se sigue cambiando el estado 
        if (this.state.contador === 5) {
            alert("Llegaste al Final de esta aventura ❤ Espero te hayas divertido.");

        } else {
            //Se debe utilizar setState para que el componente se siga renderizando
            this.setState({
                contador: this.state.contador + 1,
                opcion: e,
            })
        }
    }

    render() {
        //Accedemos a los datos del JSON
        const find = data.find(element => element.id === this.state.contador + this.state.opcion);
        return (
            <div className="layout">
                <Historia historia={find.historia} />
                <Opciones handleClick={this.handleClick} opcionA={find.opciones.a} opcionB={find.opciones.b} />
                <Historial seleccion={this.state.opcion.toUpperCase()} historial={this.historial.map((element, index) => (<li key={index}>{element}</li>))} />
            </div>
        )
    }
}

export default AventuraCompleta;