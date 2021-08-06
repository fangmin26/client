import React, { useEffect, useState } from "react";
import EditTodo from "./EditTodo";

const ListTodo = () => {
  const [todos, setTodos] = useState([]);
  // const [modal, setModal] = useState(false);
  //delete todofunction
  const deleteOnClick = async (id) => {
    try {
      // const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
      //   method: "DELETE",
      // });
      // console.log(deleteTodo);
      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };
  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const jsonData = await response.json();
      console.log(jsonData);
      /*edit 실행시 배열 순서 변경되는 부분 todo_id기준으로 배열 sort 해서 해결*/
      function idSort(a, b) {
        if (b.todo_id == a.todo_id) {
          return 0;
        }
        return b.todo_id > a.todo_id ? 1 : -1;
      }
      jsonData.sort(idSort);
      console.log(jsonData);

      setTodos(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    getTodos();
  }, []);
  console.log(todos);

  return (
    <div style={{ width: "100%" }}>
      <h1>list todos</h1>
      <table>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td
                style={{
                  padding: "20px",
                  width: "25%",
                  borderBottom: "1px solid red",
                }}
              >
                {todo.description}
              </td>
              <td
                style={{
                  padding: "20px",
                  width: "25%",
                  borderBottom: "1px solid red",
                }}
              >
                <EditTodo todo={todo} />
              </td>
              <td
                style={{
                  padding: "20px",
                  width: "25%",
                  borderBottom: "1px solid red",
                }}
              >
                <button onClick={() => deleteOnClick(todo.todo_id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTodo;
