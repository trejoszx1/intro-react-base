//comunicacion entre componentes por medio de props 
import './TodoList.css'
// automaticamente crea la propiedad children  = props.children  

function TodoList({children}) {
  return (
    <ul className="TodoList">
        {children}
    </ul>
  )
}


export {TodoList}