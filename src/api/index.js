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

const getFormBody = (params) => {
  let formBody = [];

  for (let property in params) {
    let encodedKey = encodeURIComponent(property); // 'user name' => 'user%20name'
    let encodedValue = encodeURIComponent(params[property]); // aakash 123 => aakash%2020123

    formBody.push(encodedKey + "=" + encodedValue);
  }

  return formBody.join("&"); // 'username=aakash&password=123213'
};

// Get all todos
export const getAllTodos = () => {
  return customFetch("https://jsonplaceholder.typicode.com/todos", {
    method: "GET",
  });
};

// Create todo
export const createTodo = (createTodoRequest) => {
  return customFetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: JSON.stringify(createTodoRequest),
  });
};
