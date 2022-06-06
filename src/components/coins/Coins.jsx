import React, { useEffect, useState } from 'react'
import coinGecko from '../../apis/coinGecko';
import { Coin } from './Coin';

const coinList = [
  "bitcoin",
  "ethereum",
  "ripple",
  "tether",
  "bitcoin-cash",
  "litecoin",
  "eos",
  "okb",
  "tezos",
  "cardano",
]

export const Coins = () => {

  const [coins,setCoins ] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await coinGecko.get("/coins/markets/", {
        params: {
          vs_currency: "usd",
          ids: coinList.join(","),
        },
      });
      setCoins(response.data);
      setIsLoading(false);
    };

    if (coinList.length > 0) {
      fetchData();
    } else setCoins([]);
  }, []);

  const renderCoins = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <ul className="coinlist list-group mt-2">
        {coins.map((coin) => {
          return <Coin key={coin.id} coin={coin}/>;
        })}
      </ul>
    );
  };

  return <div>{renderCoins()}</div>
}
