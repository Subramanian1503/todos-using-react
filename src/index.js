import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components";
import { TodoListInfoWrapper } from "./providers";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TodoListInfoWrapper>
      <App />
    </TodoListInfoWrapper>
  </React.StrictMode>
);
