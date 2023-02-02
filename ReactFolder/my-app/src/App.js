import { useEffect, useState } from "react";



function App() {

  const [loading, setLoding] = useState(true);
  const [coins, setCoins] = useState([])
  const [myMoney , setMyMoney] = useState(0);
  const [getCoin, setGetCoin] = useState(0);

  useEffect(()=> {
    fetch("https://api.coinpaprika.com/v1/tickers/")
    .then((response)=>response.json())
    .then((json)=>{
      setCoins(json);
      setLoding(false);
    }
    );
  },[])
  const writeMoney = (money) => setMyMoney(money.target.value);
  const selectCoin = (coin) => setGetCoin(coin.target.value);

  return ( 
    <div> 

        <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>

        내가 가진 Dollar
        <input  type="number" placeholder="보유 금액" value={myMoney} onChange={writeMoney} />

        {loading ? <strong> Loading</strong> :
        <select onChange={selectCoin}>
          <option key ="-1">
            select Coin
          </option>

          {coins.map((coin)=> 
          <option key={coin.id} value={coin.quotes.USD.price}>

            {coin.name}({coin.symbol}) : &{(coin.quotes.USD.price).toFixed(2)}

          </option>)}
        </select>}
        <div>
          <h2> Coin you can buy : {getCoin > 0  ? (myMoney / getCoin).toFixed(2)+"개" : ""} </h2>
        </div>

    </div>

    
  );
}
// toDos.map((item,index) => <li key={index}>{item}</li>)
// toDos라는 array를 가져와 map의 첫번째 argument로 변형한 후에 retrun해준다.
// 반대로 나오게 하고 싶으면 reverse()

export default App;
