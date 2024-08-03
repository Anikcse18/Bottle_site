import { useEffect, useState } from "react";
import Bottol from "../Bottol/Bottol";
import "./Bottols.css";
import { addToLocalStorage, getStoredCart } from "../../Utilities/localstorage";

const Bottols = () => {
  const [bottols, setBottols] = useState([]);
  const [purches, setPurches] = useState([]);

  useEffect(() => {
    fetch("bottols.json")
      .then((res) => res.json())
      .then((data) => setBottols(data));
  }, []);
  // console.log("Called the use effect: ", bottols.length);

  useEffect(() => {
    if (bottols.length) {
      const storedCard = getStoredCart();
      const savecart = [];

      for (const id of storedCard) {
        const selectedBottol = bottols.find((bottol) => bottol.id === id);
        savecart.push(selectedBottol);
      }
      setPurches(savecart);
    }
  }, [bottols]);

  const handelPurches = (bottol) => {
    const setnewBottols = [...purches, setPurches];
    setPurches([...purches, bottol]);
    addToLocalStorage(bottol.id);
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
