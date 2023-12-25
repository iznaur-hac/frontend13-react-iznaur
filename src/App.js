import { useState } from "react";
import ToDo from "./components/ToDo";
import ToDoForm from "./components/ToDoForm";

function App() {

  const [todos, setTodos] = useState([])

  const addTask =(input) =>{
    if (input) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: input,
        compelete: false
      }
      setTodos([...todos, newItem])
    }
  }

  const removeTask = (id) =>{
    setTodos([
      ...todos.filter(todo => todo.id !== id)
    ])
  }

  const changeTask = (id) => {
    setTodos([
      ...todos.map((todo) =>{
      return  todo.id === id ? {...todo, compelete: !todo.compelete} : {...todo}
      })
    ])
  }

  return (
    <div className="container">
      <header className="app">
        <h1>Количество задач №{todos.length}</h1>
      </header>
      {todos.map(todo =>{
        return(
          <ToDo
          todo={todo}
          key={todo.id}
          removeTask={removeTask}
          changeTask={changeTask}
          />
        )
      })}
      <ToDoForm addTask={addTask}/>
    </div>
  );
}

export default App;