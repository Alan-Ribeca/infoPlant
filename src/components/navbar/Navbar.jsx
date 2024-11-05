import { useState } from "react";
import "./navbar.scss";
export const Navbar = () => {
  const [buscador, setBuscador] = useState(false);

  const toggleBuscador = () => {
    setBuscador(!buscador);
  };

  const handleInputClick = (e) => {
    e.stopPropagation();
  };

  return (
    <nav className="navbar">
      <div data-aos="fade-right" className="containerNavbar">
        <img
          src="../img/logo.png"
          alt="logo de la web"
          className="imgLogo"
        />
        <ul className={buscador ? "ulNavbar corrido" : "ulNavbar"}>
          <li className="liNavbar">Inicio</li>
          <li className="liNavbar">Interior</li>
          <li className="liNavbar">Exterior</li>
          <li className="liNavbar">Contacto</li>
        </ul>

        <ul className="ulPerfil">
          <li className="liPerfil liLupa">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              fill="currentColor"
              className={buscador ? "lupaAbierta" : "lupa"}
              viewBox="0 0 16 16"
              onClick={toggleBuscador}
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </li>
          <li className="liPerfil">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="29"
              fill="currentColor"
              className="logoPerson"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
            </svg>
          </li>
        </ul>
        <input
          type="text"
          placeholder="Buscar..."
          className={buscador ? "inputBuscarActivo" : "inputBuscar"}
          onClick={handleInputClick}
        />
      </div>

      <div className="containerMovil">
        <div className="contenedorElementos">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            fill="currentColor"
            className="menuNav"
            viewBox="0 0 16 16"
          >
            <path d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
          </svg>
          <img
            src="../img/logo.png"
            alt="logo de la pagina"
            className={buscador ? "imgLogoCorrido" : "imgLogo"}
          />
          <ul className="ulPerfilMovil">
            <li className="liPerfilMovil movilLupa">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                fill="currentColor"
                className={buscador ? "lupaAbierta" : "lupa"}
                viewBox="0 0 16 16"
                onClick={toggleBuscador}
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </li>
            <li className="liPerfilMovil">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="29"
                fill="currentColor"
                className="logoPerson"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              </svg>
            </li>
          </ul>
          <input
            type="text"
            placeholder="Buscar..."
            className={buscador ? "inputBuscarActivoMovil" : "inputBuscarMovil"}
            onClick={handleInputClick}
          />
        </div>
      </div>
    </nav>
  );
};
