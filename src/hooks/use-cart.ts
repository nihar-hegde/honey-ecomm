import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { Product } from "@/lib/types";

// export type CartItem = {
//   product: Product;
// };

interface CartState {
  cart: Product[];
  totalItems: number;
  totalPrice: number;
}
interface Action {
  addItem: (product: Product) => void;
  removeItem: (product: Product) => void;
  clearCart: () => void;
}

const INITAL_STATE: CartState = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
};

export const useCart = create<CartState & Action>()(
  persist(
    (set, get) => ({
      cart: INITAL_STATE.cart,
      totalPrice: INITAL_STATE.totalPrice,
      totalItems: INITAL_STATE.totalItems,
      addItem: (product: Product) => {
        const cart = get().cart;
        const cartItem = cart.find((item) => item.id === product.id);

        // If the item already exists in the Cart, increase its quantity
        if (cartItem) {
          const updatedCart = cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: (item.quantity as number) + 1 }
              : item,
          );
          set((state) => ({
            cart: updatedCart,
            totalItems: state.totalItems + 1,
            totalPrice: state.totalPrice + product.price,
          }));
        } else {
          const updatedCart = [...cart, { ...product, quantity: 1 }];

          set((state) => ({
            cart: updatedCart,
            totalItems: state.totalItems + 1,
            totalPrice: state.totalPrice + product.price,
          }));
        }
      },

      removeItem: (product: Product) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== product.id),
          totalItems: state.totalItems - 1,
          totalPrice: state.totalPrice - product.price * product.quantity,
        }));
      },

      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
