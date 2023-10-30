import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue); // en referencia al local storage

  const [loading, setLoading] = React.useState(true);

  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItems = localStorage.getItem(itemName);
      
        let parsedItem;
        if (!localStorageItems) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = [];
        } else {
          parsedItem = JSON.parse(localStorageItems);
          setItem(parsedItem)
        }
      
        setLoading(false);
      } catch (error) {
        setLoading(false)
        setError(true)
      }
      
    }, 2000);

  },[]);

  //let parsedTodos =  JSON.parse(localStorageTodos);

  const saveItem = (newItem) => {
    //Esta funcion sirve para actualizar el estado y matener la persistencia
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item,
    saveItem,
    loading,
    error,
  }; // Los custom hooks tiene que retornar o un objeto array
} //la comvencion nomenclatura dice que simpre se tiene que comensar con use para que sepa que es una funcion y cual un custom hooks

export { useLocalStorage };
