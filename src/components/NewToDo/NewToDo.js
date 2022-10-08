import React, { useState } from "react";

const NewToDo = (props) => {
  const [todo, setTodo] = useState("");
  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    props.onToDo(todo);
    e.preventDefault();
  };
  return (
    <div>
      <h1>NewToDo</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="todo">
            New To Do :
          </label>
          <input
            className="form-control mb-2"
            type="text"
            id="todo"
            name="todo"
            placeholder="todo title"
            value={todo}
            onChange={handleInputChange}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Add To Do
        </button>
      </form>
    </div>
  );
};

export default NewToDo;
