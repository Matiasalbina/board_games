import React, { useState, useContext } from "react";
import Products from "../../components/Products";
import { ProductsContext } from "../../context/ProductContext";

const Eurogames = () => {
  const { products } = useContext(ProductsContext); // Obtén los productos del contexto
  const [search, setSearch] = useState(""); // Estado para la búsqueda

  // Filtrar productos según la búsqueda
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex items-center justify-center mb-4 gap-4 mt-3"> {/* Contenedor con Flexbox */}
        <h1 className="text-2xl font-bold">Eurogames</h1> {/* Título */}
        <input
          type="text"
          placeholder="Buscar por nombre..."
          className="border rounded px-2 py-1 w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)} // Actualiza el estado con el valor del input
        />
      </div>
      <div>
        {/* Pasa los productos filtrados al componente Products */}
        <Products products={filteredProducts} />
      </div>
    </div>
  );
};

export default Eurogames;
