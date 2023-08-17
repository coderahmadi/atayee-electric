// importing bootstrap into project
import "bootstrap/dist/css/bootstrap.min.css";
// import "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "./assets/css/index.css";
import "./assets/scss/custom.scss";
import "./assets/js/i18n";
import { Suspense } from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback="loading">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>
);
