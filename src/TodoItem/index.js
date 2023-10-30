import {CompleteIcon} from '../TodoIcon/CompleteIcon'
import {DeleteIcon} from '../TodoIcon/DeleteIcon'
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="TodoItem">
    <CompleteIcon
      completed={props.completed}
      onComplete={props.onComplete}
    />
      {/* <span
        className={`IconIcon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        V 
      </span> */}
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"} `}>
        {props.text}
      </p>


      <DeleteIcon
        onDelete={props.onDelete}       // Problemas de Prop drilling   ////https://frontend.adaitw.org/docs/react/react23
      />

      
      {/* <span 
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >X</span> */}
    </li>
  );
}

export { TodoItem };

