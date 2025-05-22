import React from "react";
import ReactDOM from "react-dom/client";
import CartProvider from "./Providers/CartContext.jsx"; // Adjust the path to where you saved CartContext.js

// import App from './App.jsx'
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import AuthProvider from "./Providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);
