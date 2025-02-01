import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductContext";

const ProductDetail = () => {
  const { id } = useParams(); // Obtener el ID desde la URL
  const { products } = useContext(ProductsContext);

  console.log("Productos en el frontend:", products); // Debugging
  console.log("ID recibido desde la URL:", id); // Debugging
  


  // Convertir IDs a string para evitar problemas de comparación
  const product = products.find((p) => String(p.id) === String(id));
  console.log("Imagen del producto:", product.image_url);

  if (!product) {
    return <p className="text-center text-xl">Producto no encontrado</p>;
  }

  return (
    <div className="flex flex-col items-center p-6">
      <img src={`http://localhost:5000${product.image_url}`} alt={product.name} className="w-80 h-auto" />
      <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
      <p className="text-lg text-gray-600 mt-2">${product.price}</p>
      <p className="mt-4 text-center w-2/3">{product.description}</p>
      <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
        Agregar al carrito
      </button>
    </div>
  );
};

export default ProductDetail;

