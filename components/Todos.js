import { useState, useRef } from "react";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  const handleTodos = () => {
    setTodos((todos) =>
      todos.concat({ id: Date.now(), text: inputRef.current.value })
    );
  };

  const deleteTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleTodos}>Add Todo</button>
      <ul>
        {todos.map(({ id, text }) => (
          <li key={id}>
            <span>{text}</span>{" "}
            <button onClick={() => deleteTodo(id)}>&times;</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
