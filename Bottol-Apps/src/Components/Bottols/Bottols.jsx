import { useEffect, useState } from "react";
import Bottol from "../Bottol/Bottol";
import "./Bottols.css";

const Bottols = () => {
  const [bottols, setBottols] = useState([]);
  useEffect(() => {
    fetch("bottols.json")
      .then((res) => res.json())
      .then((data) => setBottols(data));
  }, []);
  const [purches, setPurches] = useState([]);

  const handelPurches = (bottol) => {
    const setnewBottols = [...purches, setPurches];
    setPurches([...purches, bottol]);
  };

  return (
    <div>
      <h1>Fevorite Bottols</h1>
      <h3>Total Bottols: {bottols.length} </h3>
      <h3>Cart: {purches.length}</h3>
      <hr />
      <div className="bootol_postion">
        {bottols.map((bottol) => (
          <Bottol
            key={bottol.id}
            bottol={bottol}
            handelPurches={handelPurches}
          ></Bottol>
        ))}
      </div>
    </div>
  );
};

export default Bottols;
