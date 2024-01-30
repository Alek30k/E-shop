"use client";

import Heading from "@/app/components/Heading";

interface ListRatingProps {
  product: any;
}

const ListRating = ({ product }: ListRatingProps) => {
  return (
    <div>
      <Heading title="Product Review" />
      <div></div>
    </div>
  );
};

export default ListRating;
