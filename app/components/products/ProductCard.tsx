"use client";

import { truncateText } from "@/utils/truncateText";
import Image from "next/image";

interface productCardProps {
  data: any;
}

const ProductCard = ({ data }: productCardProps) => {
  return (
    <div className="col-span-1 cursor-pointer border-[1.2px] border-slate-200 bg-slate-50 rounded-sm p-2 transition hover:scale-105 text-center text-sm">
      <div className="flex flex-col items-center w-full gap-1">
        <div className="aspect-square overflow-hidden relative w-full">
          <Image
            src={data.images[0].image}
            fill
            className="w-full h-full object-contain"
            alt={data.name}
          />
        </div>
        <div className="mt-4">{truncateText(data.name)}</div>
        <div></div>
        <div>{data.reviews.length} reviews</div>
        <div></div>
      </div>
    </div>
  );
};

export default ProductCard;
