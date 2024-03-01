"use client";

import { ImageType } from "@/app/admin/add-products/AddProductForm";
import { useEffect, useState } from "react";

interface SelectColorProps {
  item: ImageType;
  addImageToState: (value: ImageType) => void;
  removeImageFromState: (value: ImageType) => void;
  isProductCreated: boolean;
}

const SelectColor = ({
  item,
  addImageToState,
  removeImageFromState,
  isProductCreated,
}: SelectColorProps) => {
  const [isSelected, setIsSelected] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    if (isProductCreated) {
      setIsSelected(false);
      setFile(null);
    }
  }, [isProductCreated]);

  return <div>SelectColor</div>;
};

export default SelectColor;
