import styles from "../styles/TaskDashboard.module.css";
import DateMenu from "./DateMenu";

function TasksDashboard() {
  return (
    <div class={styles.tasksDashboardContainer}>
      {/* Day information */}
      <DateMenu />

      {/* Created todo tasks */}

      {/* create todo task widgets */}
    </div>
  );
}

export default TasksDashboard;
