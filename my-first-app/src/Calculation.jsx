import { useState } from "react";

export default function Calculation() {
  let [count, setCount] = useState(0);

  const hadelAdd = () => {
    count = count + 1;
    setCount(count);
  };

  const handelMinus = () => {
    count = count - 1;
    setCount(count);
  };
  const counterStyle = {
    border: "2px solid red",
    padding: "20px", 
    borderRadius: "10px",
  };
  return (
    <div style={counterStyle}>
      <h1>Count: {count} </h1>
      <button onClick={hadelAdd}>Add</button>

      <button onClick={handelMinus}>Minus</button>
    </div>
  );
}
