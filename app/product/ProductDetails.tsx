"use client";

import { Rating } from "@mui/material";

interface ProductDetailsProps {
  product: any;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>Images</div>
      <div>
        <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>
        <div>
          <Rating />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
