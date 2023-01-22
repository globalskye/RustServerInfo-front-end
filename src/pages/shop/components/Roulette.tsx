import { useEffect, useState } from "react";
import "./Roulette.css";
const items = ["qwe","qwe","qwe"]




const playChances = {
  blue: 79.92327,
  purple: 15.98465,
  pink: 3.19693,
  red: 0.89515,
};

const fakeChances = {
  blue: 63,
  purple: 23,
  pink: 9,
  red: 5,
};

const mapChances = (chances: object) => {
  return Object.fromEntries(
    Object.entries(chances).map(([name], i) => [
      name,
      Object.values(chances)
        .slice(0, i + 1)
        .reduce((prev, cur) => prev + cur),
    ])
  );
};

const chancedRandom = (chances: object) => {
  const random = Math.random();
  const name = Object.entries(mapChances(chances)).find(
    ([_, chance]) => random * 100 < chance
  );
  return name;
};

const Roulette=() => {
 
  const [offset, setOffset] = useState(0);

  useEffect(() => {
   

    
  }, []);
  return (
    <div className="roulette-container">
      <div className="roulette-display">
        <div className="roulette-screen" />
        <div className="roulette-divider" />
        <div className="roulette-roller" style={{ marginLeft: -offset }}>
          {items.map((item:any) => (
            <div style={{backgroundColor:'white'}}>qweqwe</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roulette;
