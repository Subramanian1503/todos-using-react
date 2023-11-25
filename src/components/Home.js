import React from "react";
import styles from "../styles/Home.module.css";
import TasksDashboard from "./TaskDashboard";
import StatisticsWidget from "./StatisticsWidget";

class Home extends React.Component {
  render() {
    return (
      <div className={styles.homeContainer}>
        {/* left statistics area */}
        <TasksDashboard />

        {/* right tasks area */}
        {/* <div className={styles.statisticsContainer}></div> */}
        <StatisticsWidget />
      </div>
    );
  }
}

export default Home;
