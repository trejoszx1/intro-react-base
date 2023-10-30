//https://react-icons.github.io/react-icons/
import React from "react";

import { AppUI } from "./AppUI";

import "./App.css";
import { TodoProvider } from "../TodoContext";

function App() {
  return (
    <TodoProvider>
      <AppUI
      //   completedTodos={completedTodos}
      //   totalTodos={totalTodos}
      //   searchValue={searchValue}
      //   setSerchValue={setSerchValue}
      //   searchedTodos={searchedTodos}
      //   completeTodo={completeTodo}
      //   deleteTodo={deleteTodo}
      //   loading={loading}
      //   error={error}
      />
    </TodoProvider>
  );
  //con  <TodoItem key={todo.text} /> utilisando la key quitamos el error en la consola
}

export default App;

/*La diferencia entre los métodos toLowerCase() y toLocaleLowerCase() en JavaScript está relacionada con la forma en que se procesan los caracteres en mayúsculas y acentuados en diferentes idiomas.

toLowerCase() convierte una cadena de texto en minúsculas, utilizando las reglas de conversión que se aplican a los caracteres ASCII (caracteres en inglés y otros idiomas europeos que no tienen acentos)

Por otro lado, toLocaleLowerCase() también convierte una cadena de texto en minúsculas, pero utiliza las reglas de conversión específicas del idioma y la ubicación (localización) en la que se está ejecutando el código. Esto significa que, en función de la localización, algunos caracteres con acentos o diacríticos (como la letra "á" en español) pueden ser convertidos a su equivalente en minúsculas, mientras que otros caracteres pueden permanecer sin cambios.*/
