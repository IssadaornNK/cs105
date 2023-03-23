import { useState } from "react";

function StateAssignmentTwo() {
  const [num, setNum] = useState([]);

  function randomNum() {
    setNum([...num, Math.floor(Math.random() * 10)]);
  }
  return (
    <div>
      <button onClick={randomNum}>Click me!</button>
      {num.map((e) => {
        return <li className="li">{e}</li>;
      })}
    </div>
  );
}
export default StateAssignmentTwo;