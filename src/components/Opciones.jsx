import React from "react";

class Opcciones extends React.Component {
    render() {
        return (
            <div className="opciones">
                <div className="opcion">
                    <button id="A" className="botones" onClick={() => this.props.handleClick("a")} > A </button>
                    <h2> {this.props.opcionA} </h2>
                </div>

                <div className="opcion">
                    <button id="B" className="botones" onClick={() => this.props.handleClick("b")} > B </button>
                    <h2> {this.props.opcionB} </h2>
                </div>
            </div>
        );
    }
}

export default Opcciones;