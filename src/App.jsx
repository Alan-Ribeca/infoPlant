import { Carrusel } from "./components/carrusel/Carrusel";
import { Header } from "./components/header/Header";
import { Top } from "./components/top/Top";
import { Info } from "./components/info/Info";
import { Comentarios } from "./components/comentarios/Comentarios";
import { Footer } from "./components/footer/Footer";
function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Top />
        <Carrusel />
        <Info />
        <Comentarios />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}

export default App;
