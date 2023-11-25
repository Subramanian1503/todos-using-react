import { useContext } from "react";
import {
  createTodoItem,
  getAllTodoItems,
  updateCompleteStatus,
  deleteTodoItem,
} from "../api";
import { TodoListContext } from "../providers/TodoListProvider";
import { useState, useEffect } from "react";

// Create a get method to get the state information from the stored context
export const useTodo = () => {
  return useContext(TodoListContext);
};

// Create a todo list provider hook which will provide the required information and its CRUD methods implementationx
export const UseTodoListProvider = () => {
  // Define the required states which this provider will return as informations
  const [todoItems, setTodoItems] = useState([]);
  //   const [loading, setLoading] = setLoading(true);

  // Define the useEffect method which will load required information to the state
  useEffect(() => {
    // Get all the todo list items
    const fetchTodoItems = async () => {
      //Set the loading component to true as we are now starting the loading of Todos from the API
      //   setLoading(true);

      // Load the required information from the server
      const response = await getAllTodoItems();

      setTodoItems(response.data);

      //Set the loading component to false as the loading of Todos from the API is done in the previous step
      //   setLoading(false);
    };

    // Fetch all the required information and load that into the state of the client
    fetchTodoItems();
  }, []);

  // Define the CRUD implementation methods which will make CRUD operations to the state of this provider

  // Create todo list implementation
  const createTodo = async (todoRequest) => {
    // Create todo request
    const createTodoRequest = {
      title: todoRequest,
      id: 201,
      userId: 1,
      completed: false,
    };

    // Add the request to the todo list state

    setTodoItems([createTodoRequest, ...todoItems]);

    await createTodoItem(createTodoRequest);
  };

  // Update complete status of the todo
  const updateTodoCompletedStatus = async (requestedtodoItem) => {
    const expectedTodoItemBody = {
      ...requestedtodoItem,
      completed: !requestedtodoItem.completed,
    };

    // Getting requested todoItem Id
    const requestedTodoItemId = requestedtodoItem.id;

    // Construct new todoItem
    const newTodoItems = todoItems.map((todoItem) => {
      if (requestedTodoItemId === todoItem.id) {
        return expectedTodoItemBody;
      }
      return todoItem;
    });

    // Set the updated todoItems
    setTodoItems(newTodoItems);

    // Make the API call to change complete status of todoItem in server
    await updateCompleteStatus(expectedTodoItemBody);
  };

  // Delete todo item from state
  const deleteTodoItemFromList = async (requestedTodoItem) => {
    // Filter the todo item which was not deleted
    const newTodoItems = todoItems.filter(
      (todoItem) => todoItem.id !== requestedTodoItem.id
    );

    // Set the new todoItemlist
    setTodoItems(newTodoItems);

    // Make the API call to change complete status of todoItem in server
    await deleteTodoItem(requestedTodoItem);
  };

  return {
    // loadingTodoList: loading,
    todoList: todoItems,
    createTodo: createTodo,
    updateTodoCompletedStatus: updateTodoCompletedStatus,
    deleteTodoItemFromList: deleteTodoItemFromList,
  };
};
