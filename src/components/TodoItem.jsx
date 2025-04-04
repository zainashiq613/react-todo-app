/* eslint-disable react/prop-types */
import styles from "./TodoItem.module.css";
export default function TodoItem(props) {
  function handleclick() {
    props.setTodos(props.todos.filter((todo) => todo !== props.item));
  }

  return (
    <div className={styles.item}>
      <div className={styles.itemcontent}>
        <h3>{props.item} </h3>
        <span>
          <button onClick={() => handleclick(props.item)}>Delete</button>
        </span>
      </div>
    </div>
  );
}
