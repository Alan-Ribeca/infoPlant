import "./carrusel.scss";

export const Carrusel = () => {
  return (
    <section className="containerCarrusel">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        className="flechaIzquierda"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
        />
      </svg>
      <div className="carrusel">
        <div className="slide activo">
          <img
            src="../public/img/c1.png"
            alt="img de una plata"
            className="imgActiva"
          />
          <div className="info">
            <p className="name">Plamera areca</p>
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
          </div>
        </div>
        <div className="slide">
          <img src="../public/img/c2.png" alt="img de una plata" />
          <div className="info">
            <p className="name">Cuna de moises</p>
          </div>
        </div>
        <div className="slide">
          <img src="../public/img/c5.png" alt="img de una plata" />
          <div className="info">
            <p className="name">Monstera adansoni</p>
          </div>
        </div>
        <div className="slide">
          <img src="../public/img/c4.png" alt="img de una plata" />
          <div className="info">
            <p className="name musa">Musa</p>
          </div>
        </div>
        {/* <div className="slide">
          <img src="../public/img/c5.png" alt="img de una plata" />
          <div className="info">
            <p className="name">Palo de agua</p>
            <button className="btnCarrusel">Ver Info</button>
          </div>
        </div> */}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        className="flechaDerecha"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
        />
      </svg>
    </section>
  );
};
