import React from "react";
import s from "./TodoItem.module.css";

export default function TodoItem({ item, delItem }) {
  const { id, title, description } = item;
  return (
    <li key={id} className={s.item}>
      <p>{title}</p>
      <p>{description}</p>
      <button onClick={() => delItem(id)}>del</button>
    </li>
  );
}
