import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./app/auth/AuthContext";
import App from "./app/App";

import "./styles/theme.css";
import "./styles/index.css";
import "leaflet/dist/leaflet.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
);
