import styles from "../styles/TodoCard.module.css";

function TodoCard({ todoItem }) {
  return (
    <div className={styles.todoCardContainer}>
      <div className={styles.leftPartition}>
        {/* todoList Icon */}
        <div className={styles.todo_icon_container}>
          {todoItem.completed ? (
            <img
              className={styles.todo_icon}
              // src="https://cdn-icons-png.flaticon.com/128/8968/8968524.png"
              src="https://cdn-icons-png.flaticon.com/128/190/190411.png"
              alt="complete_icon"
            />
          ) : (
            <img
              className={styles.todo_icon}
              // src="https://cdn-icons-png.flaticon.com/128/3515/3515278.png"
              src="https://cdn-icons-png.flaticon.com/128/7246/7246748.png"
              alt="incomplete_icon"
            />
          )}
        </div>
        {/* Todo name */}
        <div className={styles.todo_content}>
          <span className={styles.todo_title}>{todoItem.title}</span>
        </div>

        {/* edit button */}
        <div className={styles.edit_button_container}></div>
      </div>

      <div className={styles.rightPartition}>
        <div className={styles.todo_icon_container}>
          <img
            className={styles.todo_icon}
            src="https://cdn-icons-png.flaticon.com/128/2111/2111056.png"
            alt="delete_icon"
          />
        </div>
      </div>
    </div>
  );
}

export default TodoCard;
