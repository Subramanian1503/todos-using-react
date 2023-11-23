import { useState } from "react";

import todoCardStyles from "../styles/TodoCard.module.css";
import styles from "../styles/AddTodoWidget.module.css";
import { createTodo } from "../api";

function AddTodoWidget() {
  const [todoRequest, setTodoRequest] = useState("");

  const handleCreateTodo = () => {
    const createTodoItem = async () => {
      // Create todo
      const createTodoRequest = {
        title: todoRequest,
        id: 1,
        userId: 1,
        completed: "false",
      };

      const response = await createTodo(createTodoRequest);

      console.log("Response", response);

      // Add the request to the list
    };

    if (todoRequest) {
      createTodoItem();
    }
  };

  return (
    <div class={styles.addTodoWidgetContainer}>
      <div className={styles.leftPartition}>
        {/* todoList Icon */}
        <div className={styles.todo_icon_container}>
          <img
            className={styles.todo_icon}
            // src="https://cdn-icons-png.flaticon.com/128/3515/3515278.png"
            src="https://cdn-icons-png.flaticon.com/128/7246/7246748.png"
            alt="incomplete_icon"
          />
        </div>
        {/* Todo name */}
        <div className={styles.todo_input_container}>
          <input
            className={styles.todo_input_text}
            placeholder="Add a task"
            type="text"
            value={todoRequest}
            onChange={(event) => setTodoRequest(event.target.value)}
          />
        </div>

        {/* edit button */}
        <div className={styles.edit_button_container}></div>
      </div>

      <div className={styles.rightPartition}>
        <div className={styles.todo_icon_container}>
          <img
            className={styles.todo_icon}
            src="https://cdn-icons-png.flaticon.com/128/2111/2111055.png"
            alt="create_icon"
            onClick={handleCreateTodo}
          />

          {/* create todo */}
        </div>
      </div>
    </div>
  );
}

export default AddTodoWidget;
