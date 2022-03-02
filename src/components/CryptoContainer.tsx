import React, { useState, useEffect } from "react";
import axios from "axios";

type crypto = {
  token: string;
};

export const CryptoContainer = ({ token }: crypto) => {
  const [currentPrice, setCurrentPrice] = useState(0);
  const [twentyfourhrChange, setTwentyfourhrChange] = useState(0);
  const [message, setMessage] = useState("");
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((timer) => (timer !== 0 ? timer - 1 : timer));
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  useEffect(() => {
    if (timer === 0) {
      axios
        .get(
          `https://api.coingecko.com/api/v3/simple/price?ids=${token}&vs_currencies=usd&include_24hr_change=true`
        )
        .then((res) => {
          setMessage("");
          if (res.data[token].usd) {
            setCurrentPrice(res.data[token].usd);
            setTwentyfourhrChange(res.data[token].usd_24h_change);
          }
        })
        .catch((e) => {
          if (e.response.status === 429) {
            setMessage("Too many requests...");
          } else {
            setMessage("Something went wrong. Check the console logs");
            console.log(e);
          }
        })
        .finally(() => setTimer(10));
    }
  }, [timer, token]);

  const showTFHC = () => {
    if(twentyfourhrChange > 0){
      return "😎"
    } else if(twentyfourhrChange < 0){
      return "😞"
    }
    return "😐"
  }

  const showMessage = () => {
    return message
  }

  return (
    <div>
      {/* <p>Nieuwe fetch in: {timer}...</p> */} 
      <p>Current price of {token}: ${currentPrice.toFixed(7)}</p>
      <p>Change in the last 24H: {twentyfourhrChange.toFixed(2)}%</p>
      <p>{showTFHC()}</p>
      <p>{showMessage()}</p>
    </div>
  );
};

