import React, { useState } from "react";
import NewToDo from "../NewToDo/NewToDo";
import ToDos from "../ToDos/ToDos";

const dummyToDos = ["todo1", "todo2", "todo3", "todo4", "todo5"];
const ToDoHome = () => {
  const [toDos, setToDos] = useState(dummyToDos);
  const handleNewToDo = (newToDo) => {
    setToDos([...toDos, newToDo]);
  };
  return (
    <div>
      <h1>ToDoHome</h1>
      <NewToDo onToDo={handleNewToDo} />
      <ToDos toDos={toDos} />
    </div>
  );
};

export default ToDoHome;
