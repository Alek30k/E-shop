"use client";

import { ImageType } from "@/app/admin/add-products/AddProductForm";

interface SelectColorProps {
  item: ImageType;
  addImageToState: (value: ImageType) => void;
  removeImageFromState: (value: ImageType) => void;
}

const SelectColor = ({}: SelectColorProps) => {
  return <div>SelectColor</div>;
};

export default SelectColor;
