import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Person } from "Api/swapi-api/models";

/*
    {
        itemsInCart: [
            {
                id: string
                count: number
                person: Person
            }
        ] 
    }

*/

export interface ItemInCart {
  id: string;
  count: number;
  person: Person;
}

interface CartInitialState {
  itemsInCart: ItemInCart[];
}

const initialState: CartInitialState = {
  itemsInCart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addPersonToCart: (state, action: PayloadAction<Person>) => {
      const id = action.payload.url;
      const itemInCart = state.itemsInCart.find(
        (itemInCart: ItemInCart) => itemInCart.id === id
      );
      if (itemInCart) {
        itemInCart.count++;
      } else {
        const item: ItemInCart = {
          id: action.payload.url,
          person: action.payload, // [0, 1, 2, 3].filter(n => n >= 2) = [2, 3]
          count: 1,
        };
        state.itemsInCart.push(item);
      }
    },
    removePersonFromCart: (state, action: PayloadAction<Person>) => {
      const id = action.payload.url;
      const itemInCart = state.itemsInCart.find(
        (itemInCart: ItemInCart) => itemInCart.id === id
      );
      if (itemInCart) {
        if (itemInCart.count !== 1) {
          itemInCart.count--;
        } else {
          state.itemsInCart = state.itemsInCart.filter(
            (itemInCart: ItemInCart) => itemInCart.id !== id
          );
        }
      }
    },
    removeCurPersFromCart: (state, action: PayloadAction<Person>) => {
      const id = action.payload.url;
      state.itemsInCart = state.itemsInCart.filter(
        (itemInCart: ItemInCart) => itemInCart.id !== id
      );
    },
    removeAllFromCart: (state) => {
      state.itemsInCart = [];
    },
  },
});

export const {
  addPersonToCart,
  removePersonFromCart,
  removeCurPersFromCart,
  removeAllFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
