/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";
export default function TodoList(props) {
  return (
    <div>
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
