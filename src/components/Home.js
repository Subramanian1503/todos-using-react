import React from "react";
import styles from "../styles/Home.module.css";
import TasksDashboard from "./TaskDashboard";

class Home extends React.Component {
  render() {
    return (
      <div class={styles.homeContainer}>
        {/* left statistics area */}
        <div class={styles.statisticsContainer}></div>

        {/* right tasks area */}
        <TasksDashboard />
      </div>
    );
  }
}

export default Home;
