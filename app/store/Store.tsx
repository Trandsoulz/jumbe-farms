import { create } from "zustand";

interface CartIdsStoreProps {
  cartId: string[];
  setCartId: (cartId: string[]) => void;
  isInCart: (id: string) => boolean;
}

// It seets an array of product Ids to cart, and it also checks if the productpage id is in the cart
export const useCartIdStore = create<CartIdsStoreProps>((set, get) => ({
  cartId: [],
  setCartId: (cartId) =>
    set(() => ({
      cartId: cartId,
    })),
  isInCart: (id) => {
    const { cartId } = get();
    return cartId.includes(id);
  },
}));
