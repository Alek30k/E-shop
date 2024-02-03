"use client";

import Link from "next/link";
import { CartProductType } from "../product/ProductDetails";
import { formatPrice } from "@/utils/formatPrice";
import { truncateText } from "@/utils/truncateText";
import Image from "next/image";

interface ItemContentProps {
  item: CartProductType;
}

const ItemContent = ({ item }: ItemContentProps) => {
  return (
    <div className="grid grid-cols-5 text-xs md:text-sm gap-4 border-t-[1.5px] border-slate-200 py-4 items-center">
      <div className="cols-span-2 justify-self-start flex gap-2 md:gap-4">
        <Link href={`/product/${item.id}`}>
          <div className="relative w-[70px] aspect-square">
            <Image
              src={item.selectedImg.image}
              alt={item.name}
              fill
              className="object-contain"
            />
          </div>
        </Link>
        <div className="flex flex-col justify-between">
          <Link href={`/product/${item.id}`}>{truncateText(item.name)}</Link>
          <div>{item.selectedImg.color}</div>
          <div className="w-[70px]">
            <button className="text-slate-500 underline" onClick={() => {}}>
              Remove
            </button>
          </div>
        </div>
      </div>
      <div>{formatPrice(item.price)}</div>
      <div>{item.price}</div>
      <div>{item.quantity}</div>
    </div>
  );
};

export default ItemContent;
