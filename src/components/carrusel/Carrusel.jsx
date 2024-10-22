import "./carrusel.scss";
import { useState } from "react";
export const Carrusel = () => {
  const [slides, setSlides] = useState([
    {
      id: 1,
      src: "../public/img/c1.png",
      alt: "Img Plamera areca",
      p: "Plamera areca",
    },
    {
      id: 2,
      src: "../public/img/c2.png",
      alt: "Img Cuna de moises",
      p: "Cuna de moises",
    },
    {
      id: 3,
      src: "../public/img/c3.png",
      alt: "Img Monstera adansoni",
      p: "Mostera adansoni",
    },
    { id: 4, src: "../public/img/c4.png", alt: "Img Musa", p: "Musa" },
    {
      id: 5,
      src: "../public/img/c5.png",
      alt: "Img Palo de agua",
      p: "Palo de agua",
    },
  ]);

  const siguienteSlide = () => {
    const newSlides = [...slides];
    const primerElemento = newSlides.shift();
    newSlides.push(primerElemento);
    setSlides(newSlides);
  };

  const anteriorSlide = () => {
    const newSlides = [...slides];
    const ultimoElemento = newSlides.pop();
    newSlides.unshift(ultimoElemento);
    setSlides(newSlides);
  };

  return (
    <section className="containerCarrusel">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        className="flechaIzquierda"
        viewBox="0 0 16 16"
        onClick={anteriorSlide}
      >
        <path
          fillRule="evenodd"
          d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
        />
      </svg>
      <div data-aos="fade-right">
        <div className="carrusel">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`slide ${index === 0 ? "activo" : ""}`}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className={`img ${index === 0 ? "imgActiva" : ""}`}
              />
              <div className="info">
                <p className="name">{slide.p}</p>
                {index === 0 ? (
                  <button className="btnCarrusel">
                    Ver Info{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="flechaBtn"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                      />
                    </svg>
                  </button>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        className="flechaDerecha"
        viewBox="0 0 16 16"
        onClick={siguienteSlide}
      >
        <path
          fillRule="evenodd"
          d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
        />
      </svg>
    </section>
  );
};
