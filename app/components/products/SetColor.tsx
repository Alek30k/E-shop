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
              <div
                key={i}
                className={`h-7 w-7 rounded-full border-teal-300 flex items-center justify-center ${
                  cartProduct.selectedImg.color === image.color
                    ? "border-[1.5px]"
                    : "border-none"
                }`}
              >
                <div
                  style={{ background: image.colorCode }}
                  className="h-5 w-5 rounded-full"
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SetColor;
