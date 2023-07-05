// importing bootstrap into project
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "jquery";
import "popper.js";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "./assets/css/index.css";
import "./assets/scss/custom.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
