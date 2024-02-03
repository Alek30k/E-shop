"use client";

import Link from "next/link";
import { CartProductType } from "../product/ProductDetails";
import { formatPrice } from "@/utils/formatPrice";

interface ItemContentProps {
  item: CartProductType;
}

const ItemContent = ({ item }: ItemContentProps) => {
  return (
    <div className="grid grid-cols-5 text-xs md:text-sm gap-4 border-t-[1.5px] border-slate-200 py-4 items-center">
      <div className="cols-span-2 justify-self-start flex gap-2 md:gap-4">
        <Link href={`/product/${item.id}`}>
          <div></div>
        </Link>
        <div className="flex flex-col justify-between"></div>
      </div>
      <div>{formatPrice(item.price)}</div>
      <div>{item.name}</div>
      <div>{item.name}</div>
    </div>
  );
};

export default ItemContent;
