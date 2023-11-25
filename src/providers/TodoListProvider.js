import { createContext } from "react";
import { UseTodoListProvider } from "../hooks";

// Define initial state
const initialTodoListState = {
  loadingTodoList: true,
  todoList: [],
  createTodo: () => {},
  updateTodoCompletedStatus: () => {},
  deleteTodoItemFromList: () => {},
};

// Create context
export const TodoListContext = createContext(initialTodoListState);

// Create provider which will get the children to wrap up with required information which is the provider information
export const TodoListInfoWrapper = ({ children }) => {
  // Get required information from the hook
  const todoListProviderImpl = UseTodoListProvider();

  // return the children with the provider wrapper which contains the required information
  return (
    <TodoListContext.Provider value={todoListProviderImpl}>
      {children}
    </TodoListContext.Provider>
  );
};
