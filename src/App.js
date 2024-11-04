import React, { useReducer } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { initialState, reducer } from "./reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <Link to={"/cart"}>to cart</Link>
      <Routes>
        <Route
          index
          path="/"
          element={<Home state={state} dispatch={dispatch} />}
        />
        <Route
          path="/cart"
          element={<Cart state={state} dispatch={dispatch} />}
        />
      </Routes>
    </div>
  );
}

export default App;
