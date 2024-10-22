import { Carrusel } from "./components/carrusel/Carrusel";
import { Header } from "./components/header/Header";
import { Top } from "./components/top/Top";
import { Info } from "./components/info/Info";
function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Top />
        <Carrusel />
        <Info />
      </main>
    </>
  );
}

export default App;
