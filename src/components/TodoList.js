import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import s from "./TodoList.module.css";

export default function TodoList({ todoList, delItem }) {
  return (
    <>
      <h2>list:</h2>
      <ul className={s.list}>
        {todoList &&
          todoList.map((el) => (
            <TodoItem key={el.id} item={el} delItem={delItem} />
          ))}
      </ul>
    </>
  );
}
