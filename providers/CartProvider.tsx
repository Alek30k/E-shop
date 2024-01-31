"use client";

import { CartContextProvider } from "@/hooks/useCart";

interface CartProviderPops {
  children: React.ReactNode;
}

const CartProvider = ({ children }: CartProviderPops) => {
  return (
    <div>
      <CartContextProvider>{children}</CartContextProvider>
    </div>
  );
};

export default CartProvider;
