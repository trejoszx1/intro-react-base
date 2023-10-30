import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  // Aca se coloca la logica que quiere ser compartidda entre varios niveles de la app



  //con React.Fragment es invisible y pasa todos los elementos del componente en limpio sin algun div o li , tambien se puenden renderisar arrays
  // Esto <React.Fragment></React.Fragment> es igual a <></>
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSerchValue] = React.useState('');
  
  const [openModal, setOpenModal] = React.useState(false);
  
  
  
  
  const completedTodos = todos.filter(todo => !!todo.completed).length;

  const totalTodos = todos.length;

  //// EFECTOS ////

  //Los efectos se utilisan para encapsular peticiones que pueden demorar mucho tiempo, y cuando se hacen mas render este se mantiene el estado de la ejecuccion y no lo vuelve a ejecutar
  //   console.log("1");
  // React.useEffect(()=>{console.log("2")})

  // React.useEffect(()=>{
  //   console.log("2")
  // },[])    // si no tiene el array [] posiblemente entre en bucle
  //   React.useEffect(() => {
  //     console.log("totalTodos Actualizados");
  //   }, [totalTodos]); // se ejecuta cuando cambia unicamente totalTodos
  //   console.log("3");

  /////-------------------------/////

  const searchedTodos = todos.filter(todo => {
    const todoText = todo.text.toLocaleLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return todoText.includes(searchText); //Simpre se tiene que retornar
  });
  // console.log("Los usuarios buscan todos de " + searchValue);

  const addTodo = (text) => {
    const newTodos = [...todos];
   newTodos.push({
    text,
    completed: false,
   })
    
    saveTodos(newTodos)
  }


  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);

    newTodos[todoIndex].completed = true;
    //setTodos(newTodos);
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);

    // delete newTodos[todoIndex]
    newTodos.splice(todoIndex, 1);
    //setTodos(newTodos);
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        completedTodos,
        totalTodos,
        searchValue,
        setSerchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        loading,
        error,
        openModal,
        setOpenModal,
        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

{/* <TodoContext.Provider></TodoContext.Provider>
<TodoContext.Consumer></TodoContext.Consumer> */}

export { TodoContext, TodoProvider };


// // https://es.legacy.reactjs.org/docs/context.html

// https://platzi.com/blog/redux-no-esta-muerto/
// Recién tuve una entrevista con esa información. Es muy importante ver los términos ya que es algo que se ve comúnmente en react:
// Prop Drilling: es una paso del desarrollo que ocurre cuando necesitamos obtener datos que están en varias capas en el árbol de componentes React.
// Este se ve siempre cuando pasamos props entre hijos, luego ese a otros hijos y así sucesivamente... la solución es usar context:
// Context: es un elemento que podemos crear en React para establecer una comunicación directa entre un componente en un nivel muy alto y uno en un nivel mucho más bajo.
// Por ende context permite acceder a los valores de forma directa.






// Context permite compartir datos entre componentes. Para crear el contexto es necesario el método

// createContext()
// Existen dos componentes en el contexto: Provider y Consumer. El Provider es el componente que almacena y proporciona el valor, mientras que el Consumer es el componente que permite consumir los datos.

// Existen dos formas de acceder al valor del Provider:

// Usando el hook useContext()
// Usando el componente Consumer.