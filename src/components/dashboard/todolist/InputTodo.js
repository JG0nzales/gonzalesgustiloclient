import React, { Fragment, useState } from "react";

const InputTodo = ({ setTodosChange }) => {
  const [description, setDescription] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const myHeaders = new Headers();

      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("jwt_token", localStorage.token);

      const body = { description, day, time};
      const response = await fetch(`https://testtodoappserver.herokuapp.com/dashboard/todos`, {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(body)
      });

      const parseResponse = await response.json();

      console.log(parseResponse);

      setTodosChange(true);
      setDescription("");
      setDay("");
      setTime("");
      // window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      <h1 className="text-center my-5">Create your Todos</h1>
      <form className="d-flex" onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="add todo"
          className="form-control mr-4"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />

        <input 
        placeholder="Day" 
        type="text" 
        className="form-control mr-4" 
        value = {day} 
        onChange = {e => setDay(e.target.value)}
        /> 

        <input placeholder="Time" type="text" className="form-control mr-4" value = {time} onChange = {e => 
      setTime(e.target.value)}/> 

        <button className="btn btn-success ">Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
