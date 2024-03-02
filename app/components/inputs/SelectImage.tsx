"use client";

import { ImageType } from "@/app/admin/add-products/AddProductForm";
import { useDropzone } from "react-dropzone";

interface SelectImageProps {
  items?: ImageType;
  handleFileChange: (value: File) => void;
}

const SelectImage = ({ items, handleFileChange }: SelectImageProps) => {
  return <div>

  </div>;
};

export default SelectImage;
