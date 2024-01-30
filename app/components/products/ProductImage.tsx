// "use client";

import { CartProductType, SelecteImgType } from "@/app/product/ProductDetails";
import Image from "next/image";

interface ProductImgProps {
  cartProduct: CartProductType;
  product: any;
  handleColorSelect: (value: SelecteImgType) => void;
}

const ProductImage = ({
  cartProduct,
  product,
  handleColorSelect,
}: ProductImgProps) => {
  return (
    <div className="grid grid-cols-6 gap-2 h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
      <div className="flex flex-col items-center justify-center gap-4 cursor-pointer border h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
        {product.images.map((image: SelecteImgType) => {
          return (
            <div
              key={image.color}
              onClick={() => handleColorSelect(image)}
              className="realtive"
            >
              <Image
                src={image.image}
                alt={image.color}
                fill
                className="object-contain"
              />
            </div>
          );
        })}
      </div>
      <div></div>
    </div>
  );
};

export default ProductImage;
