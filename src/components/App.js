import React from "react";
import "../styles/App.css";
import axios from "axios";
import { useState, useEffect } from "react";
const App = () => {
  //code here
  const [input, setInput] = useState("");
  const [name, setName] = useState("");

  const changeInput = (e) => {
    setInput(e.target.value);
  };

  const callapi = async () => {
    const userid = parseInt(input);
    console.log(userid);
    const response = await axios.get(
      `https://content.newtonschool.co/v1/pr/main/users/${input}`
    );
    console.log(response.data);
    setName(response.data.name);
  };

  useEffect(() => {
    callapi();
  }, [input]);

  return (
    <div className="App">
      <h1 id="text">Type a number between 1 and 10</h1>
      <input id="input" onChange={changeInput} />
      <p id="name">{name}</p>
    </div>
  );
};

export default App;
