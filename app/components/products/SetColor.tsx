"use client";

import { CartProductType, SelecteImgType } from "@/app/product/ProductDetails";

interface SetColorProps {
  images: SelecteImgType[];
  cartProduct: CartProductType;
  handleColorSelect: (value: SelecteImgType) => void;
}

const SetColor = ({
  images,
  cartProduct,
  handleColorSelect,
}: SetColorProps) => {
  return (
    <div className="flex gap-4 items-center">
      <div>
        <span className="font-semibold">COLOR: </span>
        <div>
          {images.map((image, i) => {
            return (
              <div key={i} className={`h-7 w-7 rounded-full border-teal-300`}>
                <div></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SetColor;
