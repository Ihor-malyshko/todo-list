import "./App.css";
import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import localStorage from "./utils/localStorage";
import tasks from "./tasks";

function App() {
  const [todoList, setTodoList] = useState();

  useEffect(() => {
    const localTasks = localStorage.readStorageItem("tasks");
    if (localTasks === null) {
      localStorage.writeStorageItem("tasks", tasks);
      setTodoList(tasks);
    }
    setTodoList(localTasks);
  }, []);

  const delItem = (id) => {
    const newList = todoList.filter((el) => el.id !== id);
    localStorage.writeStorageItem("tasks", newList);
    setTodoList(newList);
  };
  const addItem = (item) => {
    const newList = [...todoList, item];
    localStorage.writeStorageItem("tasks", newList);
    setTodoList(newList);
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1>Todo list:</h1>
        <TodoForm onSubmit={addItem} />
        <TodoList todoList={todoList} delItem={delItem} />
      </div>
    </div>
  );
}

export default App;
