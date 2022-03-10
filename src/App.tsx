import "./App.css";
import { CryptoContainer } from "./components/cryptoContainer/index";

import ParticleWrapper from "./components/Particles";

// import logo from "./components/img/logo.png"
import titano from "./components/img/titano.png"
import libero from "./components/img/libero.png"
import fino from "./components/img/fino.png"
import quantic from "./components/img/quantic.png"

function App() {
  return (
    <div className="App">
      <div className="container">
        <CryptoContainer token={"quantic"} img={quantic} />
        <CryptoContainer token={"titano"} img={titano} />
        <CryptoContainer token={"libero-financial"} img={libero} />
        <CryptoContainer token={"fino-dao"} img={fino} />
      </div>
      <ParticleWrapper  />      
    </div>
  );
}

export default App;
