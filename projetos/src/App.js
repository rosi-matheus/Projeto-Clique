import "./styles.css";
import { useState } from "react";
import imagemCachorro from "./assets/cachorro.jpg";
import imagemGato from "./assets/gato.jpg";

export default function App() {
  let imagemAnimal = "";
  let informacaoAnimal = "";
  let tipoAnimal = "Cachorro";

  const [tipoDoComponenteCard, setTipoDoComponenteCard] = useState("cachorro");

  const alterarState = () => {
    if (tipoDoComponenteCard === "cachorro") {
      setTipoDoComponenteCard("gato");
    } else {
      setTipoDoComponenteCard("cachorro");
    }
  };

  if (tipoDoComponenteCard === "cachorro") {
    imagemAnimal = imagemCachorro;
    informacaoAnimal = "É um mamífero carnívoro da família dos canídeos.";
    tipoAnimal = "Cachorro";
  } else {
    imagemAnimal = imagemGato;
    informacaoAnimal = "É um mamífero carnívoro da família dos felídeos.";
    tipoAnimal = "Gato";
  }

  return (
    <div className="App">
      {/* componente Topo */}
      <header>
        <h1>Projeto Props + useState</h1>
        <p>Clique no botão para mudar os componentes abaixo</p>
        <button onClick={alterarState}>Mudar Animal</button>
      </header>

      {/* Compomente CardAnimal */}
      <div id="CardAnimal">
        <img src={imagemAnimal} alt="animal" />
      </div>

      {/* Componente CardInformacoes */}
      <div className="CardInformacao">
        <h3>Informação sobre o {tipoAnimal}</h3>
        <p>{informacaoAnimal}</p>
      </div>
    </div>
  );
}
