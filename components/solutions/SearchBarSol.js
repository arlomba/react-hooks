import { useState, useEffect, useRef } from "react";

export default function SearchBarSol() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();

      setUsers(data);
    };

    fetchUsers();
  }, []);

  const handleChange = (value) => {
    const filteredUsers = users.filter(
      ({ username, email }) =>
        username.toLowerCase().includes(value) ||
        email.toLowerCase().includes(value)
    );

    setSearch(filteredUsers);
  };

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        onChange={(e) => handleChange(e.target.value.toLowerCase())}
      />
      <ul>
        {inputRef.current?.value !== ""
          ? search.map(({ id, username, email }) => (
              <li key={id}>
                <p>
                  <strong>Username:</strong> {username}
                </p>
                <p>
                  <strong>Email:</strong> {email}
                </p>
              </li>
            ))
          : users.map(({ id, username, email }) => (
              <li key={id}>
                <p>
                  <strong>Username:</strong> {username}
                </p>
                <p>
                  <strong>Email:</strong> {email}
                </p>
              </li>
            ))}
      </ul>
    </div>
  );
}
