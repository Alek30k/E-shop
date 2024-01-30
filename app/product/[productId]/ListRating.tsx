"use client";

import Heading from "@/app/components/Heading";
import moment from "moment";

interface ListRatingProps {
  product: any;
}

const ListRating = ({ product }: ListRatingProps) => {
  return (
    <div>
      <Heading title="Product Review" />
      <div className="text-sm mt-2">
        {product.reviews &&
          product.reviews.map((review: any) => {
            return (
              <div key={review.id} className="max-w-[300px]">
                <div>
                  <div>Avatar</div>
                  <div>{review?.user.name}</div>
                  <div>{moment(review.createdDate).fromNow()}</div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ListRating;
