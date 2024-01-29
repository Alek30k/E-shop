"use client";

import { CartProductType } from "@/app/product/ProductDetails";

interface SetQtyProps {
  cartCounter?: boolean;
  cartProduct?: CartProductType;
  handleQtyIncrease: () => void;
  handleQtyDecrease: () => void;
}

const SetQuantity = () => {
  return <div>SetQuantity</div>;
};

export default SetQuantity;
