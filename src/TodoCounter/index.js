import "./TodoCounter.css";
import React from 'react'

import {TodoContext} from '../TodoContext'

function example(props) {
  //props.children
  return <h1>Example</h1>;
} //se puede utilisar como para metro props o la extrocturacion {}

//se utilisa de camel case en ves del clasico sanake case del css
const estilos = {
  backgroundColor: "grey",
  fontSize: "24px",
  textAlign: "center",
  margin: 0,
  padding: "48px",
};

// Los estilos style  se intro ducen en formato de objeto por eso las {{ }} sobles llaves , en la etiqueta ejemplo <h1   style={estilos}>  > para mencionar el objeto en cuestion

function TodoCounter(/*{ total, completed }*/) {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext)   // Recivimos la informacion del contexto

  if (totalTodos == completedTodos) {
    return <h1 className="TodoCounter">Completaste todos los todos</h1>;
  } else {
    return (
      <h1 className="TodoCounter">
        Has Completado <span>{completedTodos}</span> de <span>{totalTodos} </span> TODOs
      </h1>
    );
  }
}

export { TodoCounter };
