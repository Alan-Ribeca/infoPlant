/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./info.scss";

export const Info = ({ datos }) => {
  {
    datos.map((cuidado) => {
      const {
        nivelCuidado,
        aire,
        riego,
        luz,
        riegoAvanzado,
        temperatura,
        tips,
        crecimiento,
        apodos,
        nombre,
      } = cuidado;
      console.log(nivelCuidado, aire, riego);
    });
  }
  return (
    <>
      <section className="infoContainer">
        <article data-aos="fade-right" className="containerImgs">
          <img
            src="../img/areca3.png"
            alt="img de la planta araca"
            className="imgInfoTop"
          />
          <img
            src="../img/areca2.png"
            alt="img de la planta araca"
            className="imgInfoTop"
          />

          <img
            src="../img/areca1.png"
            alt="img de la planta araca"
            className="imgInfo"
          />
          <img
            src="../img/areca4.png"
            alt="img de la planta araca"
            className="imgInfo"
          />
          <img
            src="../img/areca5.png"
            alt="img de la planta araca"
            className="imgInfo"
          />
        </article>
        <article data-aos="fade-left" className="infoTexto">
          <h2 className="titleCuidado">Cuidados basicos para tu Areca</h2>
          <ul className="datos">
            <li className="liCuidados">
              <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -110 500 1000"
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
              <span className="cuidadosP">Facil de cuidar</span>
            </li>
            <li className="liCuidados">
              <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -100 700 1000"
                className="svgIcons"
              >
                <defs>
                  <style>{`.cls-1{fill:#91b29b;}`}</style>
                </defs>
                <path
                  className="cls-1"
                  d="M688.18,164a17,17,0,0,0-15.11-15.15c-41.61-4.3-89.79,15.4-125.86,51.46-33.39,33.39-54.11,84.11-51.83,126.6-17,20.7-22.7,45.53-24.31,64.12a103,103,0,0,0-9.17-11.86c1.94-36.95-16-81-45-109.92-31.32-31.32-73.07-48.41-109.39-44.67a15.94,15.94,0,0,0-14.09,14.11C289.68,274.81,306.8,316.72,338.1,348c28.3,28.31,65.35,45.21,99.12,45.21,1.45,0,8.37-.1,13-.2,14.43,17.1,20.38,38.88,21.13,41.83V851.75h17.89l-.09-434.48c-.08-.5-6-43.68,17.49-75.72,3.34.14,13.68.33,15.94.33,38.82,0,81.48-19.47,114.09-52.07C672.79,253.73,692.51,205.5,688.18,164ZM350.64,335.49c-27.16-27.18-42.27-62.83-39.7-93.43,30.15-2.57,66.67,13,93.44,39.71,24.47,24.48,40.52,62.42,39.91,93.64-3.2,0-6.2.08-7.07.08C408.06,375.49,375.69,360.54,350.64,335.49Zm273.54-58.22c-29.37,29.34-67.33,46.87-101.55,46.87-1.32,0-5.68-.06-9.47-.15l-.15-.17c-1.18-36.81,17.74-82,46.74-111,31.92-31.91,75.78-50.06,110.79-47.05C674.31,202.16,656.54,244.87,624.18,277.27Z"
                />
                <path
                  className="cls-1"
                  d="M198.12,516.45a12.4,12.4,0,1,0-12.4-12.4A12.4,12.4,0,0,0,198.12,516.45Z"
                />
                <path
                  className="cls-1"
                  d="M264.61,516.45a12.4,12.4,0,1,0-12.39-12.4A12.4,12.4,0,0,0,264.61,516.45Z"
                />
                <path
                  className="cls-1"
                  d="M328.86,498a12.4,12.4,0,1,0,12.39,12.39A12.4,12.4,0,0,0,328.86,498Z"
                />
                <path
                  className="cls-1"
                  d="M393.1,516.45a12.4,12.4,0,1,0,12.4,12.4A12.4,12.4,0,0,0,393.1,516.45Z"
                />
                <path
                  className="cls-1"
                  d="M198.12,673.36A12.4,12.4,0,1,0,185.72,661,12.4,12.4,0,0,0,198.12,673.36Z"
                />
                <path
                  className="cls-1"
                  d="M264.61,673.36A12.4,12.4,0,1,0,252.22,661,12.4,12.4,0,0,0,264.61,673.36Z"
                />
                <path
                  className="cls-1"
                  d="M341.25,667.33a12.4,12.4,0,1,0-12.39,12.4A12.4,12.4,0,0,0,341.25,667.33Z"
                />
                <path
                  className="cls-1"
                  d="M393.1,673.36a12.4,12.4,0,1,0,12.4,12.4A12.4,12.4,0,0,0,393.1,673.36Z"
                />
                <path
                  className="cls-1"
                  d="M627.94,534.92c21.34-8.29,43.13-15.6,63.07-27,20.9-9.56,39.58-22.85,58.63-35.53,9.13-5.24,21.44-16.82,18.7-14.19l2-1.68,9.36,11.74q9-22.9,16.5-44.62-23.64,4.54-45.84,7.83l9.36,11.74-1.92,1.62c2.64-2.55-9.24,8.69-18,13.71-18.38,12.19-36.37,25.06-56.49,34.23-19.18,11-40.16,18-60.67,26-21.18,5.9-42.23,12.86-64.15,15.71-4.28.76-8.58,1.44-12.89,2.07v17.19q7.9-1.12,15.79-2.48C584.05,548.27,606,541.09,627.94,534.92Z"
                />
                <path
                  className="cls-1"
                  d="M627.94,697.23c21.34-8.29,43.13-15.6,63.07-27,20.9-9.56,39.58-22.86,58.63-35.53,9.13-5.24,21.44-16.82,18.7-14.2l2-1.67,9.36,11.74q9-22.92,16.5-44.62-23.64,4.53-45.84,7.83l9.36,11.73-1.92,1.63c2.64-2.55-9.24,8.69-18,13.71-18.38,12.19-36.37,25.06-56.49,34.22-19.18,11-40.16,18-60.67,26-21.18,5.9-42.23,12.86-64.15,15.7-4.28.77-8.58,1.45-12.89,2.08V716q7.9-1.11,15.79-2.47C584.05,710.58,606,703.4,627.94,697.23Z"
                />
              </svg>
              <span className="cuidadosP">Purifica el aire</span>
            </li>
            <li className="liCuidados">
              <svg
                viewBox="390 -70 5 750"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="svgIcons riego"
              >
                <path
                  d="M750.57 76.15l-.17-.08C707.69 30 642.93 2.33 572.74.15c-6.33-.19-13.33-.2-20.24 0-5.88.14-11.82.49-18.14 1.07-55.8 5.55-103.93 25.62-143 59.65-26.52 22.99-51.22 63.58-75.52 124.1l-.7 1.76-1.9.11c-10.5.64-18 2.67-24.21 6.57a19.225 19.225 0 00-9 13.69c-2.71 19-4.67 32.78 10.6 46.15 1.98 1.69 4.28 2.97 6.75 3.78l6.13 1.92-5.41 3.47a37.906 37.906 0 00-9.49 8.5l-.26.29c-1.7 1.69-3.12 3.64-4.21 5.78l-.81 1.59-71 1.75-.93-1.2c-18.73-24-54.56-81.27-59.56-92.85l-.34-.8.13-.86c.59-3.69 3.68-9.09 7-14.8l.18-.32c1.79-3 3.85-6.53 5.72-10.24 5-9.69 12.49-28.28 7-44a30.124 30.124 0 00-16.48-17.87c-3.93-1.8-8.23-2.65-12.55-2.5-8.59.22-21.11 7.06-40.59 22.18l-.12.09-8 5.58c-80.51 55.68-95.31 74-93.67 86.89v.23c3.67 27.18 31.43 28.67 39.86 28.48 6.68-.29 13.34-.96 19.95-2l3.25-.46c4.64-.75 9.31-1.24 14-1.46h2l1.11-.27 1.12.8c4.2 3 11.75 13.89 17.85 23.05l.15.22c.8 1.25 11.12 17.62 25.53 40.51 103.14 163.64 142.44 225.69 145 229 3.77 4.84 9.15 9.69 14.36 14.38l.3.27c6.36 5.75 9.52 8.64 10.24 9.5l.47.55.16.71c2 8.64 1.28 21.7.56 35.53v.19c-1.44 26.39-3.07 56.24 17.19 71.55 1.57 1 11.32 3.41 67.37 3.41 106.37 0 293.34-8.33 294.75-8.41 4.66-.31 9.05-2.28 12.39-5.55 19-18.84 17.65-42.59 16.19-67.75l-.07-1.08c-.26-4.56-.53-9.28-.64-13.91-.24-10.18-1.13-21-2.08-32.49v-.28c-1.36-17.27-2.9-36.83-.83-46.27l.06-.29.12-.27c.39-.87 2.06-3.92 9.28-13.36l1.73-2.33c1.2-1.58 2.42-3.19 3.36-4.56 22.72-31.83 40.18-60.06 51.91-84 19.93-40.46 38.68-85.75 41-142.79 2.71-64.4-17.07-121.23-57.19-164.33zm39.67 163.56c-2.15 53.8-20.1 97.08-39.18 135.83-11.31 23-28.32 50.5-50.57 81.68-.93 1.36-2 2.77-2.95 4l-1.81 2.42c-9.11 11.9-11.35 16.1-12.15 19.33-3 13.21-1.44 33 .22 53.88.84 10.12 1.71 20.6 2 30.58.12 5.15.42 10.45.77 16.35 1.43 25 1.69 40.91-10.41 53.28l-.81.82-1.15.07c-45 2.74-232.12 8.62-314.45 8.62-18 0-30.92-.28-36.34-.93l-1-.13-.73-.71c-10.86-10.61-9.59-33.6-8.36-55.83v-.36c.72-14 1.46-28.51-1-39.49-1.53-6.56-8.12-12.51-16.47-20-4.4-4-9.4-8.47-12.14-12l-.07-.09c-5.08-7.07-102-160.84-143.36-226.5l-7-11.05c-11.12-17.65-19.16-30.4-19.57-31-12.18-18.31-20.3-28.62-28.31-30.71-2.86-.69-5.81-.95-8.74-.76-5.69.29-11.37.88-17 1.78l-3.19.44c-5.63.91-11.3 1.5-17 1.75-16.29.54-21-6.29-22-12.13l-.16-.9.37-.85c4.51-10.07 34.2-34.3 85.89-70.06l9.7-6.84c20.46-15.87 27.63-17.71 29.34-17.9 1.79-.22 3.61.11 5.22.94 3.41 1.41 6.04 4.23 7.2 7.73 2.43 6.92.19 18.31-6 30.45-1.67 3.31-3.52 6.45-5.48 9.78-5 8.75-9.82 17-9.35 26.12.73 11.44 52.62 89.86 67.55 107.45l2.69 3.16 93.24-2.29 1-7.27c.34-2.29 1-3.82 1.93-4.79l1.47-1.6c3-4 7.78-6.9 14.66-9l6.32-1.92-.69-28.06-7.61-.78c-3.95-.4-7.94-1-11.32-1.47l-.87-.13-.66-.58c-7.27-6.37-7.45-10.64-5.11-29.62l.17-1.42 1.21-.76c5.4-3.38 13.32-4 21.08-4.21l7.92-.25 2.07-5.33c24.12-61.74 48.16-102.45 73.5-124.46 36.37-31.63 81.22-50.29 133.3-55.46 5.85-.54 11.37-.87 16.9-1 6.62-.17 13.3-.16 19.3 0 65.56 2 125.86 27.68 165.46 70.37 36.86 39.62 55.04 92.12 52.53 151.81zM294.16 394.06l.38 11.93-6.7-11.57c-.34-.59-.68-1.19-1-1.78-8.92-15.53-17.5-30.43-24.39-42.07l-2.6-4.4 32.68-.81.1 3c.38 11.27 1 28.91 1.53 45.7zm440.35-143.88c-4.48 34.28-15.27 73.13-30.38 109.37l-5.8 13.92v-15.08c.15-74.3-9.45-97.71-17.54-104.3-.4-.35-.76-.63-1.11-.9l-3.65-2.77 4-2.24c2.35-1.3 4.4-3.09 6-5.25 10.76-14.33 11.81-33.83 2.81-52.17a19.144 19.144 0 00-17-10.9c-25-.43-181.32 3.18-256.44 4.91l-27.08.62 1.68-4.22c30.8-76.91 91.61-116.68 180.61-118.18 26.92-.22 57.91 9.79 87.23 28.21 26.65 16.74 50 39.15 64.09 61.47 13.82 22.12 18.05 54.94 12.58 97.51zm2.01-106.81c-30.4-48.22-100.28-97.76-165.06-97.76h-1.24c-69.45 1.17-160.63 26.44-200.54 140.09l-.34 1c-.63 1.78-1.08 3.07-1.49 4l-5.91 12.6 13.9-.22c1.67 0 11.89-.26 27.83-.63l4.74-.11c71.06-1.63 237.47-5.46 262-5.6h1.88l.83 1.69c2.27 4.63 9 20.72-.23 33.65l-.83 1.17-17 1.07.71 28.2 6.46 1.57c2.61.52 5.06 1.63 7.17 3.26l.26.24c6.79 7.21 11.5 47 11.21 94.56v10l.63 25.63c-39.38 6.36-116.88 8-207.77-2.84-74-8.82-135.95-1.64-162.07 2.46l-.4-12c-.78-23.42-1.51-45.54-1.7-49.3l-.4-8.48-81.06 2 9.17 13.24c5.06 7.32 20.91 34.87 33.65 57l.86 1.49c14 24.32 22.69 39.38 25.53 43.37l17.24 24.14-1.49-29.71c-.07-1.16-.39-10.85-.83-24.4 20.73-3.46 83.39-11.91 157.71-3 43.81 5.26 87.88 7.98 132 8.14 30.83 0 58.4-1.58 80-4.74l.54 21.88 14.69-24.6.6-.13-.22-.52.31-.51c14.64-24.45 35.69-73.33 47.3-122.87 18.5-79.03 5.52-122.47-8.64-145.03z"
                  fill="#93B49C"
                ></path>
              </svg>
              <span className="cuidadosP">Riego moderado</span>
            </li>
          </ul>
          <h3 className="guiaCuidados">Como cuidarla</h3>
          <ul className="cuidadoGuia">
            <li className="gia">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0,0,256,256"
                className="iconGuia"
              >
                <g fill="#91b29b">
                  <g transform="scale(8.53333,8.53333)">
                    <path d="M14.98438,0.98633c-0.55152,0.00862 -0.99193,0.46214 -0.98437,1.01367v3c-0.0051,0.36064 0.18438,0.69608 0.49587,0.87789c0.3115,0.18181 0.69676,0.18181 1.00825,0c0.3115,-0.18181 0.50097,-0.51725 0.49587,-0.87789v-3c0.0037,-0.2703 -0.10218,-0.53059 -0.29351,-0.72155c-0.19133,-0.19097 -0.45182,-0.29634 -0.72212,-0.29212zM5.79688,4.79883c-0.40657,0.0009 -0.77213,0.24784 -0.92475,0.62467c-0.15262,0.37684 -0.06192,0.80856 0.22944,1.09212l2.12109,2.12109c0.25082,0.26123 0.62326,0.36646 0.9737,0.2751c0.35044,-0.09136 0.62411,-0.36503 0.71546,-0.71546c0.09136,-0.35044 -0.01387,-0.72288 -0.2751,-0.9737l-2.12109,-2.12109c-0.18874,-0.19402 -0.44807,-0.30325 -0.71875,-0.30273zM24.17188,4.79883c-0.2598,0.00774 -0.50638,0.11632 -0.6875,0.30273l-2.12109,2.12109c-0.26123,0.25082 -0.36645,0.62326 -0.2751,0.9737c0.09136,0.35043 0.36503,0.6241 0.71546,0.71546c0.35043,0.09136 0.72288,-0.01387 0.9737,-0.2751l2.12109,-2.12109c0.29576,-0.28749 0.38469,-0.72707 0.22393,-1.10691c-0.16075,-0.37985 -0.53821,-0.62204 -0.9505,-0.60988zM15,8c-3.86599,0 -7,3.13401 -7,7c0,3.86599 3.13401,7 7,7c3.86599,0 7,-3.13401 7,-7c0,-3.86599 -3.13401,-7 -7,-7zM2,14c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h3c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587zM25,14c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h3c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587zM7.91016,21.06055c-0.2598,0.00774 -0.50638,0.11632 -0.6875,0.30273l-2.12109,2.12109c-0.26123,0.25082 -0.36646,0.62326 -0.2751,0.9737c0.09136,0.35044 0.36503,0.6241 0.71546,0.71546c0.35044,0.09136 0.72288,-0.01387 0.9737,-0.2751l2.12109,-2.12109c0.29576,-0.28749 0.38469,-0.72707 0.22393,-1.10691c-0.16075,-0.37985 -0.53821,-0.62204 -0.9505,-0.60988zM22.06055,21.06055c-0.40692,0.00011 -0.77321,0.24676 -0.92633,0.62377c-0.15312,0.37701 -0.06255,0.80922 0.22907,1.09303l2.12109,2.12109c0.25082,0.26123 0.62326,0.36645 0.9737,0.27509c0.35043,-0.09136 0.6241,-0.36502 0.71546,-0.71546c0.09136,-0.35043 -0.01386,-0.72288 -0.27509,-0.9737l-2.12109,-2.12109c-0.18827,-0.19353 -0.4468,-0.30272 -0.7168,-0.30273zM14.98438,23.98633c-0.55152,0.00862 -0.99193,0.46214 -0.98437,1.01367v3c-0.0051,0.36064 0.18438,0.69608 0.49587,0.87789c0.3115,0.18181 0.69676,0.18181 1.00825,0c0.3115,-0.18181 0.50097,-0.51725 0.49587,-0.87789v-3c0.0037,-0.2703 -0.10218,-0.53059 -0.29351,-0.72155c-0.19133,-0.19097 -0.45182,-0.29634 -0.72212,-0.29212z"></path>
                  </g>
                </g>
              </svg>
              <span className="guiaTexto">
                Luz: La Areca prefiere luz brillante indirecta. Evita la luz
                solar directa, ya que puede dañar sus hojas.
              </span>
            </li>
            <li className="gia">
              <img
                src="../img/riego.png"
                alt="svg de una planta regandose"
                className="iconGuia"
              />
              <span className="guiaTexto">
                Riego: Mantén el sustrato ligeramente húmedo, pero no
                encharcado. Riega de manera regular y asegúrate de que la maceta
                tenga un buen drenaje para evitar el encharcamiento. Deja que la
                capa superior del sustrato se seque antes de volver a regar.
              </span>
            </li>
            <li className="gia">
              <img
                src="../img/temperatura.png"
                alt="svg de temperatura"
                className="iconGuia"
              />
              <span className="guiaTexto">
                Temperatura: La temperatura ideal para una palmera areca está
                entre los 18°C y 24°C. Estas plantas tropicales prefieren un
                ambiente cálido y húmedo, y no toleran bien las temperaturas
                frías. Es recomendable mantenerla en un lugar donde la
                temperatura no baje de 15°C, ya que temperaturas más bajas
                pueden afectar su crecimiento y salud.
              </span>
            </li>
            <li className="gia">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0,0,256,256"
                className="iconGuia"
              >
                <g fill="#91b29b">
                  <g transform="scale(5.12,5.12)">
                    <path d="M25,3c-8.26953,0 -15,6.73047 -15,15c0,6.16797 2.78516,9.14063 4.8125,11.3125c1.27734,1.37109 2.1875,2.35547 2.1875,3.6875v5h7v-14.59375l-3.71875,-3.6875c-0.39062,-0.39062 -0.39062,-1.04687 0,-1.4375c0.39063,-0.39062 1.04688,-0.39062 1.4375,0l3.28125,3.3125l3.28125,-3.3125c0.39063,-0.39062 1.04688,-0.39062 1.4375,0c0.39063,0.39063 0.39063,1.04688 0,1.4375l-3.71875,3.6875v14.59375h7v-5c0,-1.91406 1.10547,-3.07422 2.5,-4.53125c2.00781,-2.09766 4.5,-4.69531 4.5,-10.46875c0,-8.26953 -6.73047,-15 -15,-15zM17,40v3c0,1.65234 1.34766,3 3,3h1.15625c0.44531,1.72266 1.98438,3 3.84375,3c1.85938,0 3.39844,-1.27734 3.84375,-3h1.15625c1.65234,0 3,-1.34766 3,-3v-3z"></path>
                  </g>
                </g>
              </svg>
              <span className="guiaTexto">
                Tips: Retira cualquier tallo seco para ayudar a mantener la
                planta sana. Las puntas marrones son comunes, se pueden quitar
                si es necesario.
              </span>
            </li>
            <li className="gia">
              <img
                src="../img/crecimiento.png"
                alt="svg de crecimiento"
                className="iconGuia"
              />
              <span className="guiaTexto">
                Crecimiento: Puede crecer hasta una altura de 1,5 a 2,5 metros
                en interiores, dependiendo de las condiciones y el cuidado.
              </span>
            </li>
            <li className="gia">
              <img
                src="../img/huellaDigital.png"
                alt="svg de icon de huella digital"
                className="iconGuia"
              />
              <span className="guiaTexto">
                Apodos: Palma de frutos de oro, Palmera común, Areca, Dypsis
                lutescens, Butterfly palm, Yellow palm o Golden cane.
              </span>
            </li>
          </ul>
        </article>
      </section>
      ;
    </>
  );
};
