import React from "react";

const SingleToDo = (props) => {
  // console.log(props.toDo)
  return (
    <div>
      <h1>Single todo</h1>
      <p>{props.toDo}</p>
    </div>
  );
};

export default SingleToDo;
