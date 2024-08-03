const getStoredCart = () => {
  const getStoredCartString = localStorage.getItem("cart");
  if (getStoredCartString) {
    return JSON.parse(getStoredCartString);
  }
  return [];
};

const setStoreCart = (cart) => {
  const setStoreData = JSON.stringify(cart);
  localStorage.setItem("cart", setStoreData);
};

const addToLocalStorage = (cart) => {
  const setcart = getStoredCart();

  setcart.push(cart);
  setStoreCart(setcart);
};
export { addToLocalStorage , getStoredCart};
