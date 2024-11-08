import { Info } from "../info/Info";
import "./carrusel.scss";
import { useState } from "react";
export const Carrusel = () => {
  const [slides, setSlides] = useState([
    {
      id: 1,
      src: "../img/c1.png",
      alt: "Img Plamera areca",
      p: "Plamera areca",
      nombre: "Areca",
      imagenes: [
        {
          src: "../img/areca3.png",
          alt: "img de la planta araca",
        },
        {
          src: "../img/areca2.png",
          alt: "img de la planta araca",
        },
        {
          src: "../img/areca1.png",
          alt: "img de la planta araca",
        },
        {
          src: "../img/areca4.png",
          alt: "img de la planta araca",
        },
        {
          src: "../img/areca5.png",
          alt: "img de la planta araca",
        },
      ],

      nivelCuidado: "Facil de cuidar",

      aire: "Purifica el aire",

      riego: "Riego moderado",

      luz: "la Areca prefiere luz brillante indirecta, Evita la luz solar directa, ya que puede dañar sus hojas.",

      riegoAvanzado:
        "mantén el sustrato ligeramente húmedo, pero no encharcado. Riega de manera regular y asegúrate de que la maceta tenga un buen drenaje para evitar el encharcamiento. Deja que la capa superior del sustrato se seque antes de volver a regar.",

      temperatura:
        "la temperatura ideal para una palmera areca está entre los 18°C y 24°C. Estas plantas tropicales prefieren un ambiente cálido y húmedo, y no toleran bien las temperaturas frías.",

      tips: "retira cualquier tallo seco para ayudar a mantener la planta sana. Las puntas marrones son comunes, se pueden quitar si es necesario.",

      crecimiento:
        "puede crecer hasta una altura de 1,5 a 2,5 metros en interiores, dependiendo de las condiciones y el cuidado.",

      apodos:
        "palma de frutos de oro, Palmera común, Areca, Dypsis lutescens, Butterfly palm, Yellow palm o Golden cane.",
    },
    {
      id: 2,
      src: "../img/c2.png",
      alt: "Img Cuna de moises",
      p: "Cuna de moises",
      nombre: "Cuna de moises",
      imagenes: [
        { src: "../img/cuna3.png", alt: "img de la planta Cuna de Moises" },
        { src: "../img/cuna5.png", alt: "img de la planta Cuna de Moises" },
        { src: "../img/cuna4.png", alt: "img de la planta Cuna de Moises" },
        { src: "../img/cuna1.png", alt: "img de la planta Cuna de Moises" },
        { src: "../img/cuna2.png", alt: "img de la planta Cuna de Moises" },
      ],

      nivelCuidado: "Fácil de cuidar",
      aire: "Purifica el aire",
      riego: "Riego moderado",

      luz: "prefiere luz indirecta brillante, pero también puede adaptarse a condiciones de luz baja. Evita la luz solar directa, ya que puede quemar las hojas.",

      riegoAvanzado:
        "mantén el sustrato ligeramente húmedo, regando cuando la capa superior esté seca al tacto. Evita el exceso de agua para evitar pudrición de raíces.",

      temperatura:
        "le gusta un ambiente cálido, con temperaturas entre 18°C y 24°C. No tolera temperaturas por debajo de 10°C ni corrientes de aire frío.",

      tips: "limpiar sus hojas con un paño húmedo ayudará a la planta a realizar mejor la fotosíntesis y mantener su apariencia saludable.",

      crecimiento:
        "puede alcanzar hasta 50-70 cm de altura, dependiendo de las condiciones de cuidado.",

      apodos: "lirio de la paz, Espatifilo, Bandera blanca, Vela del viento.",
    },
    {
      id: 3,
      src: "../img/c5.png",
      alt: "Img Palo de agua",
      p: "Palo de agua",
      nombre: "Palo de agua",
      imagenes: [
        { src: "../img/palo4.png", alt: "img de la planta Palo de Agua" },
        { src: "../img/palo2.png", alt: "img de la planta Palo de Agua" },
        { src: "../img/palo1.png", alt: "img de la planta Palo de Agua" },
        { src: "../img/palo5.png", alt: "img de la planta Palo de Agua" },
        { src: "../img/palo3.png", alt: "img de la planta Palo de Agua" },
      ],

      nivelCuidado: "Fácil de cuidar",
      aire: "Purifica el aire",
      riego: "Riego moderado",

      luz: "prefiere luz brillante indirecta. Evita la luz solar directa intensa, ya que puede dañar las hojas.",

      riegoAvanzado:
        "mantén el sustrato ligeramente húmedo, pero no empapado. Riega cuando la capa superior del sustrato esté seca al tacto.",

      temperatura:
        "mantén la planta a temperaturas entre 18°C y 24°C. Evita corrientes de aire frío y temperaturas por debajo de 10°C.",

      tips: "rociar sus hojas una vez a la semana la ayudará a crecer de maravilla.",

      crecimiento: "puede alcanzar hasta 2 metros de alto.",

      apodos:
        "palo de Brasil, Dracena, Dragonera, Carey, Palo de agua, Planta palo de Brasil, Tronco de Brasil, Planta de la felicidad, Árbol de la felicidad.",
    },
    {
      id: 4,
      src: "../img/c4.png",
      alt: "Img Musa",
      p: "Musa",
      nombre: "Musa",
      imagenes: [
        { src: "../img/musa1.png", alt: "img de la planta Musa" },
        { src: "../img/musa5.png", alt: "img de la planta Musa" },
        { src: "../img/musa4.png", alt: "img de la planta Musa" },
        { src: "../img/musa3.png", alt: "img de la planta Musa" },
        { src: "../img/musa2.png", alt: "img de la planta Musa" },
      ],

      nivelCuidado: "Fácil de cuidar",
      aire: "Feliz con sol/luz",
      riego: "Riego moderado",

      luz: "lecesita luz brillante o sol para crecer adecuadamente. Evita la exposición directa durante las horas centrales del día.",

      riegoAvanzado:
        "procura que el sustrato siempre esté un poco húmedo, pero no encharcado. En épocas calurosas, riega hasta 2-3 veces por semana.",

      temperatura: "entre 15 y 25ºC.",

      tips: "pásale un trapo seco para eliminar el polvo de sus hojas y pulverízala a menudo.",

      crecimiento: "crece entre 1.5 y 3 metros de altura.",

      apodos:
        "banano Enano, Plátano Enano, Banana Dwarf, Platanito, Enano del Jardín, Musa Nana.",
    },
    {
      id: 5,
      src: "../img/mosteraP1.png",
      alt: "Img Monstera adansoni",
      p: "Mostera adansoni",
      nombre: "Monstera adansoni",
      imagenes: [
        {
          src: "../img/moste5.png",
          alt: "img de la planta Monstera Adansoni",
        },
        {
          src: "../img/moste2.png",
          alt: "img de la planta Monstera Adansoni",
        },
        {
          src: "../img/moste1.png",
          alt: "img de la planta Monstera Adansoni",
        },
        {
          src: "../img/moste4.png",
          alt: "img de la planta Monstera Adansoni",
        },
        {
          src: "../img/moste3.png",
          alt: "img de la planta Monstera Adansoni",
        },
      ],

      nivelCuidado: "Fácil de cuidar",
      aire: "Purifica el aire",
      riego: "Riego moderado",

      luz: "prefiere luz brillante e indirecta. Evita la luz solar directa.",

      riegoAvanzado:
        "riega una vez a la semana, cuando el suelo haya comenzado a secarse.",

      temperatura:
        "ideal entre 20-27° C. Mantén alejada de corrientes de aire frío.",

      tips: "pulveriza sus hojas con agua una vez a la semana para que crezca mejor. Si los bordes de sus hojas se secan, es señal de falta de humedad.",

      crecimiento:
        "alcanza entre 1 y 2 metros de altura y sus hojas pueden crecer hasta 15-25 cm de largo.",

      apodos: "filodendro, Monkey plant, Mini Swiss cheese plant.",
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
    <>
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
                <div className={` ${index === 0 ? "puntosContenedor" : ""}`}>
                  <span className="puntosCarrusel"></span>
                  <span className="puntosCarrusel"></span>
                  <span className="puntosCarrusel"></span>
                  <span className="puntosCarrusel"></span>
                  <span className="puntosCarrusel"></span>
                  <span className="puntosCarrusel"></span>
                  <span className="puntosCarrusel"></span>
                  <span className="puntosCarrusel"></span>
                  <span className="puntosCarrusel"></span>
                  <span className="puntosCarrusel"></span>
                  <span className="puntosCarrusel"></span>
                  <span className="puntosCarrusel"></span>
                </div>
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

        <article className="containerCuidados">
          <div data-aos="fade-up">
            <h2 className="tituloCuidados">Plantas sanas, hogar feliz</h2>
          </div>
        </article>
      </section>
      <Info datos={slides} />
    </>
  );
};
