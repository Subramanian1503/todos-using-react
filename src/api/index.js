const customFetch = async (url, { body, ...customConfig }) => {
  // Construct required headers
  const headers = {
    "Content-type": "application/json; charset=UTF-8",
  };

  // Construct the required config with the passed headers
  const config = {
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  // If body is present encode the body content
  // if (body) {
  //   config.body = getFormBody(body);
  // }
  try {
    // Fetch data from server using URL and configurations passed
    const response = await fetch(url, config)
      .then((response) => response.json())
      .then((data) => {
        return {
          data: data,
          success: true,
        };
      });

    return response;

    // If response is success then return the data
  } catch (error) {
    // Logging the error message
    console.log(error);

    // Return failure error response with success status as false
    return {
      message: error.message,
      success: false,
    };
  }
};

// Get all todos
export const getAllTodoItems = () => {
  return customFetch("https://jsonplaceholder.typicode.com/todos", {
    method: "GET",
  });
};

// Create todo
export const createTodoItem = (createTodoRequest) => {
  return customFetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: JSON.stringify(createTodoRequest),
  });
};

// Update complete status of Todo
export const updateCompleteStatus = (expectedTodoItemBody) => {
  return customFetch(
    `https://jsonplaceholder.typicode.com/todos/${expectedTodoItemBody.id}`,
    {
      method: "PATCH",
      body: JSON.stringify(expectedTodoItemBody),
    }
  );
}

  // Delete a todo item
  export const deleteTodoItem = (requestedTodoItem) => {
    return customFetch(
      `https://jsonplaceholder.typicode.com/todos/${requestedTodoItem.id}`,
      {
        method: "DELETE",
      }
    ); 
  }
