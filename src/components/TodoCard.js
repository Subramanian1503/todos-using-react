import styles from "../styles/TodoCard.module.css";

function TodoCard() {
  return (
    <div className={styles.todoCardContainer}>
      <div className={styles.leftPartition}>
        {/* todoList Icon */}
        <div className={styles.todo_icon_container}>
          <img
            className={styles.todo_icon}
            src="https://cdn-icons-png.flaticon.com/128/8968/8968524.png"
          />
        </div>
        {/* Todo name */}
        <div className={styles.todo_content}>
          <span>Go to Gym</span>
        </div>

        {/* edit button */}
        <div className={styles.edit_button_container}></div>
      </div>

      <div className={styles.rightPartition}>
        <div className={styles.todo_icon_container}>
          <img
            className={styles.todo_icon}
            src="https://cdn-icons-png.flaticon.com/128/3719/3719216.png"
          />
        </div>
      </div>
    </div>
  );
}

export default TodoCard;
