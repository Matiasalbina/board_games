import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductContext";
import "../../styles/ProductDetail.css";
import { AlertTriangle } from "lucide-react"; // Importar el icono de advertencia

const ProductDetail = () => {
  const { id } = useParams(); // Obtener el ID desde la URL
  const { products } = useContext(ProductsContext);

  // Convertir IDs a string para evitar problemas de comparación
  const product = products.find((p) => String(p.id) === String(id));

  if (!product) {
    return <p className="text-center text-xl">Producto no encontrado</p>;
  }

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between p-6 max-w-5xl mx-auto gap-8">
      {/* Imagen a la izquierda */}
      <div className="w-full lg:w-1/2 flex justify-center detail">
        <img
          src={`http://localhost:5000${product.image_url}`}
          alt={product.name}
          className="w-90 h-auto object-contain"
        />
      </div>

      {/* Información del producto a la derecha */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-2xl text-sky-600  font-bold">${product.price}</p>
        <div className="flex items-center gap-2 text-red-600 mb-2">
          <AlertTriangle className="w-5 h-5 text-orange-500" /> {/* Icono de advertencia */}
          <span className="text-sm">{product.stock} unidades disponibles</span>
        </div>
        <p className="text-2xl font-bold mb-0">Descripción</p>
        <p className="text-gray-700 text-left">{product.description}</p>
        <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
