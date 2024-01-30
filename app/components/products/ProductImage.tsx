// "use client";

import { CartProductType, SelecteImgType } from "@/app/product/ProductDetails";

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
  return <div>ProductImage</div>;
};

export default ProductImage;
