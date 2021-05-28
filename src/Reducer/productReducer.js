export const productReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        itemsInCart: state.itemsInCart.map((item) => {
          if (item.id === action.payload.id) {
            console.log({ ...item, quantity: item.quantity + 1 });
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        })
      };

    case "DECREMENT":
      return {
        ...state,
        itemsInCart: state.itemsInCart.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: action.payload.quantity - 1 };
          }
          return item;
        })
      };

    case "ADD_TO_CART":
      return {
        ...state,
        itemsInCart: [
          ...state.itemsInCart,
          ...state.productItems
            .filter((product) => product.id === action.payload.id)
            .map((item) => ({ ...item, inCart: true, quantity: 1 }))
        ],
        productItems: state.productItems.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, inCart: true };
          }
          return item;
        }),
        itemsInWishlist: state.itemsInWishlist.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, inCart: true };
          }
          return item;
        })
      };

    case "REMOVE_FROM_CART":
      action.payload.inCart = false;
      action.payload.quantity = 0;
      return {
        ...state,
        itemsInCart: state.itemsInCart.filter(
          (item) => item.id !== action.payload.id
        ),
        itemsInWishlist: state.itemsInWishlist.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, inCart: false };
          }
          return item;
        }),
        productItems: state.productItems.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, inCart: false };
          }
          return item;
        })
      };

    case "ADD_TO_WISHLIST":
      return {
        ...state,
        itemsInWishlist: [
          ...state.itemsInWishlist,
          ...state.productItems
            .filter((product) => product.id === action.payload.id)
            .map((item) => ({ ...item, inWishlist: true }))
        ],
        productItems: state.productItems.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, inWishlist: true };
          }
          return item;
        }),
        itemsInCart: state.itemsInCart.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, inWishlist: true };
          }
          return item;
        })
      };

    case "REMOVE_FROM_WISHLIST":
      action.payload.inWishlist = false;
      return {
        ...state,
        itemsInWishlist: state.itemsInWishlist.filter(
          (item) => item.id !== action.payload.id
        ),
        itemsInCart: state.itemsInCart.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, inWishlist: false };
          }
          return item;
        }),
        productItems: state.productItems.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, inWishlist: false };
          }
          return item;
        })
      };

    default:
      return state;
  }
};
