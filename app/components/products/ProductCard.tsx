"use client";

import Skeleton from "@/app/skeletons/skeleton";
import { formatPrice } from "@/utils/formatPrice";
import { truncateText } from "@/utils/truncateText";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface productCardProps {
  data: any;
}

const ProductCard = ({ data }: productCardProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data) setLoading(false);
  }, []);

  const productRaiting =
    data.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    data.reviews.length;

  return (
    <>
      {loading ? (
        <>
          <Skeleton />
        </>
      ) : (
        <>
          <div
            onClick={() => router.push(`/product/${data.id}`)}
            className="col-span-1 cursor-pointer border-[1.2px] border-slate-200  bg-slate-50 rounded-sm p-2 transition hover:scale-105 text-center text-sm"
          >
            <div className="flex flex-col items-center w-full gap-1 dark:text-medium">
              <div className="aspect-square overflow-hidden relative w-full">
                <Image
                  src={data.images[0].image}
                  fill
                  className="w-full h-full object-contain"
                  alt={data.name}
                />
              </div>
              <hr className="w-[100%] mt-6" />
              <div className="mt-4">{truncateText(data.name)}</div>
              <div>
                <Rating value={productRaiting} readOnly />
              </div>
              <div>{data.reviews.length} reviews</div>
              <div className="font-semibold"> {formatPrice(data.price)}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductCard;
