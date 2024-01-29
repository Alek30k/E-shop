"use client";

import { CartProductType } from "@/app/product/ProductDetails";

interface SetQtyProps {
  cartCounter?: boolean;
  cartProduct?: CartProductType;
  handleQtyIncrease: () => void;
  handleQtyDecrease: () => void;
}

const SetQuantity = ({
  cartCounter,
  cartProduct,
  handleQtyIncrease,
  handleQtyDecrease,
}: SetQtyProps) => {
  return (
    <div className="flex gap-8 items-center">
      {cartCounter ? null : <div className="font-semibold">QUANTITY</div>}
      <div className="flex gap-4 items-center text-base">
        <button onClick={handleQtyDecrease}>-</button>
        <div>{cartProduct.quantity}</div>
        <button onClick={handleQtyIncrease}>+</button>
      </div>
    </div>
  );
};

export default SetQuantity;
