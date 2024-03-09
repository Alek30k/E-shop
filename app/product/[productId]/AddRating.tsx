"use client";

import { SafeUser } from "@/types";
import { Order, Product, Review } from "@prisma/client";
import { useState } from "react";

interface AddRatingProps {
  product: Product & {
    reviews: Review[];
  };
  user:
    | (SafeUser & {
        orders: Order[];
      })
    | null;
}

const AddRating = ({ product, user }: AddRatingProps) => {
  const [isLoading, setIsLoading] = useState(false);

  return <div></div>;
};

export default AddRating;
