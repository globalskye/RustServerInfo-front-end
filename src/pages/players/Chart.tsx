import { Key, useState } from "react";
import "./chart.css";
interface SquareProps {
  level: number;
}

const Square: React.FC<SquareProps> = ({ level }) => {
  return <li data-level={level}></li>;
};
const PlayerConnectionStatistic = () => {
  const [squares, setSquares] = useState<Array<number>>([]);

  const generateSquares = () => {
    const newSquares = [];
    for (let i = 1; i < 365; i++) {
      const level = Math.floor(Math.random() * 3);
      newSquares.push(level);
    }
    setSquares(newSquares);
  };

  return (
    <div className="graph">
      <ul className="months">
        <li>Jan</li>
        <li>Feb</li>
        <li>Mar</li>
        <li>Apr</li>
        <li>May</li>
        <li>Jun</li>
        <li>Jul</li>
        <li>Aug</li>
        <li>Sep</li>
        <li>Oct</li>
        <li>Nov</li>
        <li>Dec</li>
      </ul>
      <ul className="days">
        <li>Sun</li>
        <li>Mon</li>
        <li>Tue</li>
        <li>Wed</li>
        <li>Thu</li>
        <li>Fri</li>
        <li>Sat</li>
      </ul>
      <ul className="squares">
        {squares.map((level: number, index: Key | null | undefined) => (
          <Square key={index} level={level} />
        ))}
      </ul>
      <button onClick={generateSquares}>Generate Squares</button>
    </div>
  );
};
export default PlayerConnectionStatistic;
