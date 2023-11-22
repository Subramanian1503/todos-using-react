import styles from "../styles/TaskDashboard.module.css";
import DateMenu from "./DateMenu";
import TodoList from "./TodoList";

function TasksDashboard() {
  return (
    <div class={styles.tasksDashboardContainer}>
      {/* Day information */}
      <DateMenu />

      {/* Created todo tasks */}
      <TodoList />

      {/* create todo task widgets */}
    </div>
  );
}

export default TasksDashboard;
