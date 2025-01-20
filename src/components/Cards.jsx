const Card = ({ name, image, price }) => {
  return (
    <div className="border rounded shadow-md p-4 flex flex-col justify-between items-center mt-1 w-60 h-100"> {/* Altura fija */}
      {/* Contenedor para la imagen */}
      <div className="flex items-center justify-center w-full mb-2 h-40"> {/* Div exclusivo para la imagen */}
        <img src={image} alt={name} className="w-36 h-36 object-contain" /> {/* Imagen ajustada */}
      </div>

      {/* Contenedor para el texto, precio y botón */}
      <div className="flex flex-col items-center text-center">
        <h2 className="text-lg font-bold mb-1">{name}</h2> {/* Nombre del producto */}
        <p className="text-green-500 font-semibold mb-2">${price}</p> {/* Precio */}
        <button className="rounded bg-green-500 text-white px-4 py-2 hover:bg-green-600 transition">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default Card;
