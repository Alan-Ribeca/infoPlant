import "./top.scss";
export const Top = () => {
  return (
    <section className="top">
      <div className="containerImg">
        <img
          src="../public/img/princi3.png"
          alt="imagen de una plata"
          className="imgPrinci"
        />
      </div>
      <div className="containerTitle">
        <h1 className="titleImpresa">Nursery</h1>
        <h2 className="titleCursiva">Nursery</h2>
        <h2 className="titlePrincipal">Guia de cuidado</h2>
      </div>
    </section>
  );
};
