/* eslint-disable react/prop-types */
export default function TodoItem(props) {
  function handleclick() {
    props.setTodos(props.todos.filter((todo) => todo !== props.item));
  }

  return (
    <div>
      <h3>
        {props.item}
        <span>
          <button onClick={() => handleclick(props.item)}>Delete</button>
        </span>
      </h3>
    </div>
  );
}
