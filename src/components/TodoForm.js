import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (title.trim() === "") {
      return;
    }
    const item = { id: uuidv4(), title, description };
    setTitle("");
    setDescription("");
    return onSubmit(item);
  };
  return (
    <form onSubmit={submit}>
      <h2>add task</h2>
      <label>
        title
        <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
      </label>
      <label>
        description
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
      </label>
      <button onSubmit={submit}>Submit</button>
    </form>
  );
}
