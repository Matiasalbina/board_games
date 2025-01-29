import React, { useContext } from "react";
import { ProductsContext } from "../context/ProductContext";
import Card from "./Cards";

const Products = () => {
  const { products } = useContext(ProductsContext);
  console.log("🛒 Productos en el frontend:", products); // ✅ Verificar datos

  console.log(products);
  console.log(products.map((p) => p.image));

  return (
    <div className="flex justify-center">
      {/* Contenedor centrado */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-screen-lg">
        {products.map((product) => (
          <Card
            key={product.id}
            name={product.name}
            image={product.image_url}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
