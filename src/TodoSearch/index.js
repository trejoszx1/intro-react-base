import "./TodoSearch.css";

import React from "react";
import { TodoContext } from "../TodoContext";

function TodoSearch(/*{searchValue,setSerchValue}*/) {
  const {
    searchValue,
    setSerchValue,
  } = React.useContext(TodoContext)  // React hook
  return (
    <input
      placeholder="input"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setSerchValue(event.target.value)
        console.log("Se escribio en el TodoSearch");
        console.log(event);
        console.log(event.target);
        console.log(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
