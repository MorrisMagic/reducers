import React from "react";

const Cart = ({ state, dispatch }) => {
  const increaseCount = (id) => {
    dispatch({ type: "INCREASE_COUNT", payload: id });
  };

  const decreaseCount = (id) => {
    dispatch({ type: "DECREASE_COUNT", payload: id });
  };

  return (
    <div>
      <h1>Cart</h1>
      {state.cart.length > 0 ? (
        <ul>
          {state.cart.map((item) => (
            <li key={item.id}>
              {item.name} - Quantity: {item.count}
              <button onClick={() => increaseCount(item.id)}>+</button>
              <button onClick={() => decreaseCount(item.id)}>-</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>The cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
