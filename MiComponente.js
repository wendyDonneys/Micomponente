import React from "react";

Class MiComponente extends React.Component {
    constructor (props){
        super (props);
        this.state = {mensaje}"Hola , Mundo"};
    }
    render (){
        return <div>{this.state.mensaje}</div>;  
    }
}
componentDidMount(){
    console.log ("El componente se ha montado en la pantalla");
}
componentDidUpdate (prevProvs,prvState){
    console.log ("El componente se ha actualizado");

}
render(){
    return <div>{this.state.mensaje</div>;
}
 }
export default MiComponente;

