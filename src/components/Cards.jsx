import { useNavigate } from "react-router-dom";
import "../styles/Cards.css";

const Card = ({ id, name, image, price }) => {
  const navigate = useNavigate();
  console.log("ID recibido en Card:", id);

  return (
    <div
      className="card border rounded shadow-md p-4 flex flex-col justify-between items-center mt-1 w-60 h-auto cursor-pointer hover:shadow-lg transition"
      onClick={() => navigate(`/product/${id}`)} // Redirige al hacer clic
    >
      {/* Contenedor para la imagen */}
      <div className="flex items-center justify-center w-full mb-2 h-40">
        <img src={`http://localhost:5000${image}`} alt={name} />
      </div>

      {/* Contenedor para el texto, precio y botón */}
      <div className="flex flex-col items-center text-center">
        <h2 className="text-sm mb-1 text-gray-600 font-normal">{name}</h2>
        <p className="text-black-500 font-bold mb-2">${price}</p>
        <button
          className="bg-green-500 text-white px-4 py-2 hover:bg-green-600 transition"
          onClick={(e) => {
            e.stopPropagation(); // Evita que el clic en el botón active la redirección
          }}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default Card;
