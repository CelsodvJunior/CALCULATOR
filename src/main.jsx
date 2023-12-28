import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Impoting the Global Style
import GlobalStyles from "./Global";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
