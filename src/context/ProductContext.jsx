import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Crear el contexto
export const ProductsContext = createContext();

// Proveedor del contexto
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]); // Estado inicial vacío
  const [loading, setLoading] = useState(true); // Estado para manejar la carga
  const [error, setError] = useState(null); // Estado para manejar errores

  // Efecto para obtener los datos del backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:5000/api/games"); // Cambia a la URL de tu backend
        setProducts(response.data); // Actualiza el estado con los datos obtenidos
      } catch (err) {
        console.error("Error al cargar los productos:", err);
        setError(err.message); // Manejar errores
      } finally {
        setLoading(false); // Finalizar el estado de carga
      }
    };

    fetchProducts();
  }, []); // Se ejecuta solo al montar el componente

  return (
    <ProductsContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductsContext.Provider>
  );
};
