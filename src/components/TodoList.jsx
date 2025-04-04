/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";
export default function TodoList(props) {
  return (
    <div className={styles.list}>
      {props.todos.map((item) => (
        <TodoItem
          key={item}
          item={item}
          todos={props.todos}
          setTodos={props.setTodos}
        />
      ))}
    </div>
  );
}
