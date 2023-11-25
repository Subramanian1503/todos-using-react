import TodoCard from "./TodoCard";
import styles from "../styles/TodoList.module.css";
import { useTodo } from "../hooks";

function TodoList() {
  const todoListProvider = useTodo();
  const todoItems = todoListProvider.todoList;

  return (
    <ul className={styles.todoListContainer}>
      {todoItems.map((todoItem) => (
        <li key={`todoItem-${todoItem.title}`}>
          <TodoCard
            todoItem={todoItem}
            updateTodoCompletedStatus={todoItem.updateTodoCompletedStatus}
          />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
