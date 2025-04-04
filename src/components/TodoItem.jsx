/* eslint-disable react/prop-types */
import styles from "./TodoItem.module.css";
export default function TodoItem(props) {
  function handleclick() {
    props.setTodos(props.todos.filter((index) => index !== props.item));
  }
  function edit(){
    //edit todo item here
    const edited = prompt("Edit todo item", props.item);
    if (edited !== null && edited !== "") {
      props.setTodos(
        props.todos.map((todo) => (todo === props.item ? edited : todo))
      );
    }
  }

  return (
    <div className={styles.item}>
      <div className={styles.itemcontent}>
        <h3>{props.item} </h3>
        <span>
          <button onClick={edit}>Edit</button>
          <button onClick={() => handleclick(props.index)}>Delete</button>
        </span>
      </div>
    </div>
  );
}
