import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ProductsProvider } from "./context/ProductContext.jsx"; // Importa el proveedor

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </React.StrictMode>
);
