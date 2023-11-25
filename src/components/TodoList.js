import TodoCard from "./TodoCard";
import styles from "../styles/TodoList.module.css";
import { useTodo } from "../hooks";
import Loader from "./Loader";

function TodoList() {
  const todoListProvider = useTodo();
  const todoItems = todoListProvider.todoList;
  const todoListLoading = todoListProvider.loadingTodoList;

  if (todoListLoading || !todoItems) {
    return <Loader />;
  } else {
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
}

export default TodoList;
