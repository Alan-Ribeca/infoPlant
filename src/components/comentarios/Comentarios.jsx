import "./comentarios.scss";
import { useState, useEffect } from "react";
export const Comentarios = () => {
  const comentarios = [
    {
      id: 1,
      nombre: "María S.",
      comentario:
        "¡Esta página es increíble! Antes no sabía cómo cuidar bien mis plantas de interior, pero gracias a los consejos sobre riego y luz, ¡mis suculentas han crecido muchísimo! Me encanta cómo explican todo de manera simple y detallada.",
    },
    {
      id: 2,
      nombre: "Carlos M.",
      comentario:
        "Siempre he tenido problemas para mantener vivas mis plantas, pero desde que encontré esta página, he aprendido a identificar cuándo necesitan agua o más luz. Ahora mis plantas están mucho más saludables, ¡gracias!",
    },
    {
      id: 3,
      nombre: "Lucía G.",
      comentario:
        "Es mi sitio de referencia cada vez que tengo una duda sobre mis plantas. La información sobre el tipo de suelo adecuado para cada planta me ha ayudado a revivir una que estaba prácticamente muerta. ¡Súper útil!",
    },
    {
      id: 4,
      nombre: "Javier R.",
      comentario:
        "Me encanta lo completa que es esta página. He aprendido a cómo trasplantar mis plantas sin dañarlas y a mantener el ambiente adecuado en casa. Mis plantas nunca habían estado tan verdes y llenas de vida.",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % comentarios.length);
    }, 3000);
    return () => clearInterval(intervalo);
  }, [comentarios.length]);

  return (
    <aside className="containerComentarios">
      <div className="comentario">
        <p className="textComentario">{comentarios[index].comentario}</p>
        <h3 className="nameComentario">{comentarios[index].nombre}</h3>
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 1000"
          className="svgIcons"
        >
          <defs>
            <style>{`.cls-1 { fill: #91b29b; }`}</style>
          </defs>
          <path
            className="cls-1"
            d="M590.22,219.38l-.57-1.51A61.29,61.29,0,0,0,539.09,178a62.34,62.34,0,0,0-55.18,23.1A62.51,62.51,0,0,0,428.69,178a60.42,60.42,0,0,0-50.51,39.8l-.58,1.57a67.76,67.76,0,0,0,15.51,70.65c85,86.06,87.15,86.08,90.76,86.11H484c3.7,0,5.75,0,90.69-86.1A67.77,67.77,0,0,0,590.22,219.38Zm-25.8,60.51h0c-25.82,26.16-67.31,67.72-80.5,79.76C470.7,347.58,429.2,306,403.38,279.88a53.26,53.26,0,0,1-12.22-55.5l.59-1.59a46.07,46.07,0,0,1,38.49-30.39,47.66,47.66,0,0,1,45.09,21.51l8.59,12.89,8.62-13a47.41,47.41,0,0,1,45-21.45,46.78,46.78,0,0,1,38.55,30.46l.56,1.51A53.24,53.24,0,0,1,564.42,279.89Z"
          />
          <path
            className="cls-1"
            d="M704.47,335.45a17,17,0,0,0-15.11-15.15c-41.6-4.3-89.78,15.4-125.85,51.46-33.4,33.39-54.11,84.11-51.83,126.6-17,20.7-22.71,45.53-24.31,64.12a102.28,102.28,0,0,0-9.18-11.86c1.95-37-16-81-45-109.92-31.32-31.32-73.07-48.41-109.38-44.67a15.94,15.94,0,0,0-14.1,14.11C306,446.28,323.09,488.19,354.4,519.5c28.29,28.31,65.34,45.21,99.11,45.21,1.45,0,8.37-.1,13.06-.21C481,581.61,487,603.39,487.69,606.34V827h17.89l-.09-238.27c-.07-.49-6-43.67,17.49-75.71,3.34.14,13.69.33,15.95.33,38.81,0,81.47-19.47,114.08-52.07C689.08,425.2,708.81,377,704.47,335.45ZM366.94,507c-27.17-27.18-42.28-62.84-39.71-93.43,30.15-2.57,66.68,13,93.44,39.71,24.47,24.48,40.53,62.42,39.91,93.64l-7.07.08C424.36,547,392,532,366.94,507Zm273.53-58.22c-29.36,29.34-67.32,46.86-101.54,46.86-1.33,0-5.69-.06-9.48-.14l-.15-.17c-1.18-36.81,17.74-82,46.75-111,31.91-31.91,75.78-50.06,110.78-47.06C690.6,373.62,672.84,416.34,640.47,448.74Z"
          />
        </svg>
        <div className="contenedorMarcador">
          {comentarios.map((comentario, i) => (
            <span
              className={`marcador ${i === index ? "activo" : ""}`}
              key={comentario.id}
            ></span>
          ))}
        </div>
      </div>
    </aside>
  );
};
