import { useTodo } from "../hooks";
import styles from "../styles/TodoProgress.module.css";

import { CircularProgress } from "@mui/joy";

function TodoProgress() {
  let progressValue = 0;
  const todoItemsProvider = useTodo();
  const todoItems = todoItemsProvider.todoList;

  const totalItemCount = todoItems.length;
  let completedItemsCount = 0;
  todoItems.forEach((element) => {
    if (element.completed) {
      completedItemsCount += 1;
    }
  });
  progressValue = (completedItemsCount / totalItemCount) * 100;
  var roundedProgressValue = progressValue.toFixed(1);

  return (
    <div className={styles.todoProgressContainer}>
      <CircularProgress
        size="lg"
        determinate
        value={roundedProgressValue}
        sx={{ "--CircularProgress-size": "150px" }}
      >
        {`${roundedProgressValue}%`}
      </CircularProgress>
    </div>
  );
}

export default TodoProgress;
