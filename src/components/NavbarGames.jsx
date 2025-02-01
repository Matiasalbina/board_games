import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../styles/NavbarStyle.css";

const Navbar = () => {
  // Estado para manejar si el menú principal está abierto o cerrado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Estado para manejar si el submenú "Juegos de Mesa" está abierto o cerrado
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // Función para alternar la visibilidad del menú principal
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Función para alternar la visibilidad del submenú "Juegos de Mesa"
  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <>
      {/* Barra superior con información adicional */}
      <div className="bg-white-200 py-2 text-sm z-50">
        <div className="container mx-auto flex items-center justify-between">
          {/* Sección de contacto */}
          <div className="flex items-center gap-2 ml-3 hover:bg-blue-100 p-1 rounded">
            {/* Ícono de Instagram */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
              className="w-5 h-5 object-contain"
            />
            <span className=" contact hidden sm:block">Contáctanos</span>
          </div>
          {/* Opciones de sesión y carrito */}
          <div className="flex items-center gap-6 mr-4">
            {/* Enlace para inicio de sesión */}
            <Link
              to="/login"
              className="flex items-center gap-1 hover:text-blue-500"
            >
              <FontAwesomeIcon icon={faUser} className="text-lg " />
              <span className="hidden sm:block font-normal">Inicio Sesión</span>
            </Link>
            {/* Slash separador */}
            <span className="slash text-gray-400">/</span>
            {/* Enlace para carrito de compras */}
            <a href="#" className="flex items-center gap-1 hover:text-blue-500">
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="text-lg "
              />
              <span className="hidden sm:block font-normal">Carrito de Compras</span>
            </a>
          </div>
        </div>
      </div>

      {/* Barra de navegación principal */}
      <nav className="bg-green-500 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          {/* Nombre de la empresa */}
          <Link to="/home" className="text-2xl font-bold">
            EmpresaX
          </Link>

          {/* Menú principal para pantallas grandes */}
          <div className="navbar-menu hidden lg:flex items-center gap-8">
            <Link to= "accesories" className="text-lg hover:bg-yellow-300 p-2 rounded">
              Accesorios
            </Link>
            <Link to= "sales" className="text-lg hover:bg-yellow-300 p-2 rounded">
              Ofertas
            </Link>
            {/* Submenú desplegable de "Juegos de Mesa" */}
            <div className="hover:bg-yellow-300 relative group p-2 rounded">
              <button className="games relative" aria-haspopup="true">
                Juegos de Mesa
              </button>
              {/* Contenedor del submenú */}
              <div
                className="absolute hidden group-hover:flex flex-col bg-white shadow-md rounded-md z-50 left-0"
                 // Ajusta el ancho automáticamente al contenido
              >
                <ul className="flex flex-col">
                  <li>
                    <Link
                      to="/eurogames"
                      className="block px-4 py-2 hover:bg-yellow-300"
                    >
                      Eurogames
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-yellow-300">
                      Familiares
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-yellow-300">
                      Parties
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-yellow-300">
                      Ver Todo
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Buscador para pantallas grandes */}
          <div className="hidden lg:flex">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-full py-1 px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Botón de menú hamburguesa para pantallas pequeñas */}
          <div className="lg:hidden">
            <button
              className="text-2xl focus:outline-none"
              aria-label="Toggle menu"
              onClick={toggleMenu}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Menú desplegable para pantallas pequeñas */}
        {isMenuOpen && (
          <div className="lg:hidden bg-gray-100 shadow-md">
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">
              Accesorios
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">
              Ofertas
            </a>
            {/* Submenú desplegable de "Juegos de Mesa" */}
            <button
              onClick={toggleServices}
              className="block px-4 py-2 text-left w-full hover:bg-gray-200"
            >
              Juegos de Mesa
            </button>
            {isServicesOpen && (
              <div className="ml-4">
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Eurogames
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Familiares
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Parties
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Ver Todo
                </a>
              </div>
            )}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
