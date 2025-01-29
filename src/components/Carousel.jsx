// Importamos el componente Carousel desde react-bootstrap
import Carousel from "react-bootstrap/Carousel";
import Image1 from "../../../backend/uploads/bitoku_prueba.jpg";
import "../styles/Carousel.css";

// Importa más imágenes si las necesitas

// Importamos el componente ExampleCarouselImage que se usará para mostrar imágenes en cada slide
import ExampleCarouselImage from "./ExampleCarouselImage";

/**
 * Componente `CarouselGames`:
 * Este componente utiliza el componente `Carousel` de react-bootstrap para renderizar
 * un carrusel con múltiples diapositivas. Cada diapositiva contiene una imagen (representada
 * por el componente `ExampleCarouselImage`) y un texto de descripción.
 */
function CarouselGames() {
  return (
    // Renderiza el componente `Carousel` que sirve como contenedor del carrusel
    <Carousel className=" my-carousel relative z-10">
      {/* Primera diapositiva */}
      <Carousel.Item>
        {/* Componente personalizado para renderizar la imagen */}
        <ExampleCarouselImage src={Image1} />
        {/* Subtítulo y descripción de la diapositiva */}
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      {/* Segunda diapositiva */}
      <Carousel.Item>
        {/* Componente personalizado para renderizar la imagen */}
        <ExampleCarouselImage src={Image1} />
        {/* Subtítulo y descripción de la diapositiva */}
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      {/* Tercera diapositiva */}
      <Carousel.Item>
        {/* Componente personalizado para renderizar la imagen */}
        <ExampleCarouselImage src={Image1} />
        {/* Subtítulo y descripción de la diapositiva */}
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

// Exportamos el componente CarouselGames para que pueda ser utilizado en otras partes del proyecto
export default CarouselGames;
