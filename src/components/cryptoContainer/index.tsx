import { useState, useEffect } from "react";
import axios from "axios";

import "./index.css";

type crypto = {
  token: string;
  img: string;
};

export const CryptoContainer = ({ token, img }: crypto) => {
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

  return (
    <div className="crypto_container">
      <img className="logo" src={img} alt="logo" />
      <div className="details_wrapper">
        <div className="details_name_tfhc">
          <div className="name">{token}</div>
          <div className={`twenty_four_hr_change ${twentyfourhrChange > 0 ? 'green' : 'red'}`}>
            {twentyfourhrChange.toFixed(2)}%
          </div>
        </div>
        <div className="current_price">${currentPrice.toFixed(7)}</div>
      </div>
    </div>
  );
};
