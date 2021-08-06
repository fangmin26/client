import React, { useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
      //window.location.href="주소":이전페이지 기록을 남김,뒤로가기가능
      // window.location.replace("주소")=뒤로가기불가능
      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div id="inputtodo">
      <h1>perntodolist</h1>
      <form onSubmit={onSubmitForm} style={{ disaplay: "flex" }}>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>add</button>
      </form>
    </div>
  );
};

export default InputTodo;
