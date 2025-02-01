import React, { useState, useContext } from "react";
import Products from "../../components/Products";
import { ProductsContext } from "../../context/ProductContext";

const Eurogames = () => {
  const { products } = useContext(ProductsContext); // Obtén los productos del contexto
  const [search, setSearch] = useState(""); // Estado para la búsqueda
  const [order, setOrder] = useState(""); // Estado para el ordenamiento

  // Filtrar productos según la búsqueda
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      {/* Contenedor principal de la cabecera con diseño responsive */}
      <div className="flex flex-wrap  sm:items-center items-center justify-center mb-4 gap-4 mt-3">
        
        {/* Título y buscador */}
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold">Eurogames</h1>
          <input
            type="text"
            placeholder="Buscar por nombre..."
            className="border rounded px-2 py-1 w-64"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Contador de productos y selector de ordenación */}
        <div className="flex items-center  sm:items-center gap-4">
          <p className="text-gray-700 text-sm">
            Hay <span className="font-bold">{filteredProducts.length}</span> productos.
          </p>
          <div className="flex items-center gap-2">
            <label htmlFor="order" className="text-gray-700 text-sm">Ordenar por:</label>
            <select
              id="order"
              className="border p-2 rounded text-gray-700"
              value={order}
              onChange={(e) => setOrder(e.target.value)}
            >
              <option value="">Seleccione</option>
              <option value="price">Precio</option>
              <option value="popularity">Popularidad</option>
              <option value="newest">Novedades</option>
            </select>
          </div>
        </div>
      </div>

      {/* Lista de productos */}
      <Products products={filteredProducts} />
    </div>
  );
};

export default Eurogames;
