import React from "react";
import "./App.css";
import { CryptoContainer } from "./components/CryptoContainer";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

function App() {
  return (
    <div className="App">
      <div className="left">
        <p>*Token logo*</p>
        <p>Libero Finance</p>
        <CryptoContainer token={"libero-financial"} />
      </div>
      <div className="center">
        <p>*Token logo*</p>
        <p>Titano Finance</p>
        <CryptoContainer token={"titano"} />
      </div>
      <div className="right">      
        <p>*Token logo*</p>
        <p>Fino Dao Finance</p>
        <CryptoContainer token={"fino-dao"} />
      </div>
    </div>
  );
}

export default App;
