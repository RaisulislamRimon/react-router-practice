import React, { useState } from "react";

const Contact2 = () => {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  const {name, password} = user;
  const handleNameChange = (e) => {
    setUser({name: e.target.value, password});
  }
  const handlePasswordChange = (e) => {
    setUser({name, password: e.target.value});
  }
  const handleSubmit = (e) => {
    console.log('form submitted');
    console.log(user);
    e.preventDefault();
  }
  return (
    <div>
      <h1>Contact2</h1>
      <form action="">
        <input onChange={handleNameChange} type="text" name="name" id="name" placeholder="enter your name" className="border border-primary rounded d-block my-8 p-2 mx-10 text-dark" />
        <input onChange={handlePasswordChange} type="password" name="password" id="password" placeholder="enter your password"  className="border border-primary rounded d-block my-8 p-2 mx-10 text-dark" />
        <input onClick={handleSubmit} type="submit" value="Login" id="loginBtn" className="mx-20 border px-10 py-2 rounded bg-blue-400 text-white "/>
      </form>
    </div>
  );
};

export default Contact2;
