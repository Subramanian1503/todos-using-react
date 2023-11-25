import styles from "../styles/StatisticsWidget.module.css";
import TodoProgress from "./TodoProgress";
import QuoteDisplay from "./QuoteDisplay";

function StatisticsWidget() {
  return (
    <div className={styles.statisticsWidgetContainer}>
      {/* progress component */}
      <TodoProgress />

      {/* quotes component */}
      <QuoteDisplay />
    </div>
  );
}

export default StatisticsWidget;
