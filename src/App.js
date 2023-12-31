import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [input, setInput] = useState("");

  const todos = useSelector((state) => state);

  const dispatch = useDispatch();

  const removeBtn = (id) => {
    dispatch({
      type: "REMOVE",
      payload: id,
    });
  };

  const handlerChange = (e) => {
    setInput(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
  };

  const checkSwap = (id) => {
    dispatch({
      type: "SWAP",
      payload: id,
    });
  };

  const addTask = () => {
    setInput("");
    dispatch({
      type: "ADD",
      payload: input,
    });
  };
  return (
    <div className="container">
      <div className="todos">
        {todos.map((item, index) => {
          return (
            <div className="todo-item" key={index}>
              <div>
                <input
                  type="checkbox"
                  checked={item.done}
                  onClick={() => checkSwap(index)}
                />
              </div>
              <div className={item.done ? "stick" : ""}>{item.text}</div>
              <div>
                <button className="delete-btn" onClick={() => removeBtn(index)}>
                  x
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <form onSubmit={handlerSubmit}>
        <div className="input">
          <input type="text" value={input} onChange={(e) => handlerChange(e)} />
          <button onClick={addTask}>Add</button>
        </div>
      </form>
    </div>
  );
}

export default App;
