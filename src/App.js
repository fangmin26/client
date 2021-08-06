import "./App.css";
import Inputtodo from "./components/InputTodo";
import ListTodos from "./components/ListTodo";
function App() {
  return (
    <div className="App">
      <Inputtodo />
      <ListTodos />
    </div>
  );
}

export default App;
