import styles from "../styles/TaskDashboard.module.css";
import AddTodoWidget from "./AddTodoWidget";
import DateMenu from "./DateMenu";
import TodoList from "./TodoList";

function TasksDashboard() {
  return (
    <div className={styles.tasksDashboardContainer}>
      {/* Day information */}
      <DateMenu />

      {/* Created todo tasks */}
      <TodoList />

      {/* create todo task widgets */}
      <AddTodoWidget />
    </div>
  );
}

export default TasksDashboard;
