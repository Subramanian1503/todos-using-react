import React from "react";
import styles from "../styles/Home.module.css";
import TasksDashboard from "./TaskDashboard";

class Home extends React.Component {
  render() {
    return (
      <div className={styles.homeContainer}>
        {/* left statistics area */}
        <div className={styles.statisticsContainer}></div>

        {/* right tasks area */}
        <TasksDashboard />
      </div>
    );
  }
}

export default Home;
