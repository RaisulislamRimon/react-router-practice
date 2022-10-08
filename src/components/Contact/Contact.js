import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const handleNameChange = (e) => {
    setName(e.target.value)
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit btn clicked", name, password);
    // let userInfo = {
    //     name : name, 
    //     password: password
    // }
    let userInfo = { name, password }
    console.log('submit clicked', userInfo)
  };
  return (
    <div>
      <h1>This is contact component</h1>
      <form>
        <input onChange={handleNameChange} type="text" id="name" name="name" className="border border-primary rounded d-block my-8 p-2 mx-10" />
        <input onChange={handlePasswordChange} type="text" id="password" name="password" className="border border-primary rounded d-block my-8 p-2 mx-10" />
        <input onClick={handleSubmit} type="submit" value="Submit" id="submitBtn" className="mx-20 border px-10 py-2 rounded bg-blue-400 text-white " />
      </form>
      <div>
        <h3>{name}</h3>
        <h3>{password}</h3>
      </div>
    </div>
  );
};

export default Contact;
