import React, { useState } from "react";

const EditTodo = ({ todo }) => {
  const [modal, setModal] = useState(false);

  /*showModal*/
  const showModal = () => {
    setModal(!modal);
  };
  return (
    <div>
      <button onClick={showModal}>Edit</button>
      {modal ? <Modal showModal={showModal} todo={todo} /> : null}
    </div>
  );
};

const Modal = ({ todo }) => {
  const [description, setDescription] = useState(todo.description);
  // edit
  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(
        `http://localhost:5000/todos/${todo.todo_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      window.location = "/";
      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div
      id="Modal"
      key={todo.todo_id}
      style={{
        background: "rgba(0,0,0,0.1)",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "60%",
          height: "60%",
          background: "white",
          position: "relative",
        }}
      >
        <h1>this is modal</h1>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          style={{ width: "80%", height: "60%", border: "1px solid black" }}
        />
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "20%",
              paddingTop: 30,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <button onClick={updateDescription}>편집</button>
            {/* <button onClick={() => setDescription(todo.description)}>
              저장
            </button> */}
            {/* showModal을 props로 가져올수가 없어 #Modal을 강제로 자바스크립트 구문으로 선택후 삭제해 주었다. */}
            <button
              onClick={() => {
                document.querySelector("#Modal").style.display = "none";
              }}
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditTodo;
