
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  fetchCoins } from "../../store/actions/coin-action";
import { useParams } from "react-router";
import './CoinDetails.css'
import CoinChart from "../../components/CoinChart/CoinChart";

function CoinDetails() {
  const coins = useSelector((state) => state.coins);
  const dispatch = useDispatch();
  const { id, coinName } = useParams();

  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

  const coin = coins.find((coin) => coin.rank === Number(id) && coin.id === coinName);

  return (
    <>
      {coin ? (
        <div className="coinDetailsMain">
          <div className="coinDetailsCard">
            <div className="coin-card-main">
            <div className="card-sec1">
                 <img src={coin.image} alt='coin-img' className='coin-logo' />
                 <h2>{coin.name}</h2>
               </div>
               <div className="card-sec2">
                 <p>Coin rank: {coin.rank}/100</p>
                 <p>Price: {coin.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} $</p>
                 <p>Marketcap: {coin.market_cap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} $</p>
                 <p >
                   Price Changed 24h: <span className={coin.perc_24h >= 0 ? "positive-change" : "negative-change"}>{coin.perc_24h} %</span>
                 </p>
                 <p>Total_supply: {coin.total_supply.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} $</p>
               </div>
               <div className="card-sec3">
                 <p>Circulating_supply: {coin.circulating_supply.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} $</p>
                 <p>Total volume: {coin.volume.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} $</p>
                 <p>High 24h: {coin.heigh_24h.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} $</p>
                 <p>Low 24h: {coin.low_24h.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} $</p>
               </div>
            </div>
          </div>
          <CoinChart coinName={coinName} />
     
        </div>
      ) : (
        <div className="coin-error-pg">
          <div className="coin-error-card">
            <h1 className="coin-error">Coin not found!</h1>
          </div>
        </div>
      )}
    </>
  );
}

export default CoinDetails;


