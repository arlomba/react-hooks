import { useState, useRef } from "react";

export default function TodosSol() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const inputRef = useRef();

  const addTodo = () => {
    if (input.trim() === "") {
      return;
    }

    setTodos((todos) => todos.concat([{ id: Date.now(), text: input }]));
    setInput("");
    inputRef.current.focus();
  };

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        ref={inputRef}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map(({ id, text }) => (
          <li key={id}>
            <span>{text}</span>{" "}
            <button onClick={() => removeTodo(id)}>&times;</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
