import React from "react";
import SingleToDo from "../SingleToDo/SingleToDo";

const ToDos = (props) => {
  const toDos = props.toDos;
  return (
    <div>
      <h1>ToDos</h1>
      {toDos.map((toDo, idx) => (
        <SingleToDo key={idx} toDo={toDo} />
      ))}
    </div>
  );
};

export default ToDos;
