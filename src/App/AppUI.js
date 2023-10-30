import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { TodoForm } from "../TodoForm";
import { Modal } from "../Modal";
import { TodoContext } from "../TodoContext";

function AppUI() {
  // {
  //   //  completedTodos,
  //   //  totalTodos,
  //   //  searchValue,
  //   //  setSerchValue,
  //   //  searchedTodos,
  //   //  completeTodo,
  //   //  deleteTodo,
  //   //  loading,
  //   // error,
  // }

  const {
    searchedTodos,
    completeTodo,
    deleteTodo,
    loading,
    error,

    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      {/* <TodoContext.Consumer>
        {({ 
          searchedTodos, 
          completeTodo, 
          deleteTodo, 
          loading, 
          error 
          }) => ( */}
      <TodoList>
        {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        {error && <TodosError />}
        {!loading && searchedTodos.length === 0 && <EmptyTodos />}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      {/* )}
      </TodoContext.Consumer> */}
      <CreateTodoButton   setOpenModal={setOpenModal}

      />

      {openModal &&( <Modal>
        <TodoForm/>
      </Modal>)}
    </>
  );
}

// localStorage
// localStorage.setItem("Prueba", 'bauishbdipjwo')
// localStorage.getItem('Prueba')
// localStorage.removeItem('TODOS_V1')

// Todo lo de local storage tiene que ser un string//
// Con JSON.stringify() conbierte cual quiere objeto json a un string
// Con JSON.parse()  pasa de string a un objeto
//    const defaultTodos = [
//      { text: "accion1", completed: false },
//      { text: "accion2", completed: true },
//      { text: "accion3", completed: false },
//      { text: "accion4", completed: true },
//      { text: "Derivado", completed: false },
//      { text: "David", completed: false },
//    ];

//  localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))

export { AppUI };

// return (
//   <>
//     <TodoCounter
//     // completed={completedTodos} total={totalTodos}
//     />
//     <TodoSearch

//     // searchValue={searchValue}
//     // setSerchValue={setSerchValue}
//     // onComplete={completeTodo}

//     />
//     <TodoContext.Consumer>
//       {({
//         searchedTodos,
//         completeTodo,
//         deleteTodo,
//         loading,
//         error
//         }) => (
//         <TodoList>
//           {loading && (
//             <>
//               <TodosLoading />
//               <TodosLoading />
//               <TodosLoading />
//             </>
//           )}
//           {error && <TodosError />}
//           {(!loading && searchedTodos.length == 0) && <EmptyTodos />}
//           {searchedTodos.map(todo => (
//             <TodoItem
//               key={todo.text}
//               text={todo.text}
//               completed={todo.completed}
//               onComplete={() => completeTodo(todo.text)}
//               onDelete={() => deleteTodo(todo.text)}
//             />
//           ))}
//         </TodoList>
//       )}
//       //Componetes con render function
//     </TodoContext.Consumer>
//     <CreateTodoButton />
//   </>
// );
// }
