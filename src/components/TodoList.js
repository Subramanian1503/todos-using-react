import { useEffect, useState } from "react";

import TodoCard from "./TodoCard";
import styles from "../styles/TodoList.module.css";
import { getAllTodos } from "../api";

function TodoList() {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    // Get all the todo list items
    const fetchTodoItems = async () => {
      const response = await getAllTodos();

      setTodoItems(response.data);
    };

    fetchTodoItems();
  }, []);

  return (
    <ul className={styles.todoListContainer}>
      {todoItems.map((todoItem) => (
        <li key={`todoItem-${todoItem.id}`}>
          <TodoCard todoItem={todoItem} />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
