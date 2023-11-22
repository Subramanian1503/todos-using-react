import TodoCard from "./TodoCard";
import styles from "../styles/TodoList.module.css";

function TodoList() {
  return (
    <ul className={styles.todoListContainer}>
      <li>
        <TodoCard />
      </li>
      <li>
        <TodoCard />
      </li>
      <li>
        <TodoCard />
      </li>
      <li>
        <TodoCard />
      </li>
    </ul>
  );
}

export default TodoList;
