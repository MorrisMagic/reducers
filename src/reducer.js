export const initialState = {
  products: [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
  ],
  cart: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingProduct = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, count: item.count + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, count: 1 }],
      };

    case "INCREASE_COUNT":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload ? { ...item, count: item.count + 1 } : item
        ),
      };

    case "DECREASE_COUNT":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload && item.count > 1
            ? { ...item, count: item.count - 1 }
            : item
        ),
      };

    default:
      return state;
  }
};
