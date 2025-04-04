/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./Form.module.css";
export default function Form(props) {
  const [todo, settodo] = useState("");
  function handlesubmit(e) {
    e.preventDefault();
    if (todo === "") {
      alert("Please enter a todo item");
      return;
    }

    if (props.todos.some((item) => item === todo)) {
      alert("Todo item already exists");
      return;
    }
    props.setTodos([...props.todos, todo]);
    settodo("");
  }
  return (
    <div>
      <form className={styles.form} onSubmit={handlesubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => settodo(e.target.value)}
          placeholder="Add new todo"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
