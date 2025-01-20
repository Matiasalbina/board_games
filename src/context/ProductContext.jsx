import React, { createContext, useState } from "react";
import gamesData from "../data/DataGames.json"; // Importa el archivo con los datos

// Crear el contexto
export const ProductsContext = createContext();

// Proveedor del contexto
export const ProductsProvider = ({ children }) => {
  const [products] = useState(gamesData); // Carga los datos como estado inicial

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};
