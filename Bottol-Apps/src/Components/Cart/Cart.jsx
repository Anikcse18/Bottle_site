import "./Cart.css";
const Cart = ({ cart }) => {
  const { img } = cart;
  console.log(img);

  return (
    <div>
      <div>
        <img src={img} alt="" className="cartImg" />
      </div>
    </div>
  );
};

export default Cart;
