import { Carrusel } from "./components/carrusel/Carrusel";
import { Header } from "./components/header/Header";
import { Top } from "./components/top/Top";
function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Top />
        <Carrusel />
      </main>
    </>
  );
}

export default App;
