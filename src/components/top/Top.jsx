import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./top.scss";
export const Top = () => {
  useEffect(() => {
    AOS.init({ duration: 2300 });
  }, []);
  return (
    <section className="top">
      <div data-aos="fade-down" className="containerTitle">
        <h1 className="titleImpresa">Nursery Plant</h1>
        <h2 className="titleCursiva">Nursery</h2>
        <h2 className="titlePrincipal">Guia de cuidado</h2>
        <button className="btn">Ver consejos</button>
      </div>
    </section>
  );
};
