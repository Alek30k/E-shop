"use client";

import { CartProductType } from "@/app/product/ProductDetails";
import { createContext, useCallback, useContext, useState } from "react";

type CartContextType = {
  cartTotalQty: number;
  cartProducts: CartProductType[] | null;
  handleAddProductCart: (product: CartProductType) => void;
};

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
  [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
  const [cartTotalQty, setCartTotalQty] = useState(10);
  const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(
    null
  );

  const handleAddProductToCart = useCallback(() => {}, []);

  const value = {
    cartTotalQty,
    cartProducts,
    handleAddProductToCart,
  };

  return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error("useCart must be used within a cartContextProvider");
  }
  return context;
};
