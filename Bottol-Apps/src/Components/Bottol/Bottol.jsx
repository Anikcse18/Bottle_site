import { useState } from "react";
import "./Bottol.css";
import Bottols from "../Bottols/Bottols";

const Bottol = ({ bottol, handelPurches }) => {
  const { name, price, stock, img, shipping } = bottol;

  return (
    <div className="bottol">
      <h3>{name}</h3>
      <img className="imgSizing" src={img} alt="" />
      <p>Prise: ${price}</p>
      <button onClick={() => handelPurches(bottol)}>Purchase</button>
    </div>
  );
};

export default Bottol;
