import { getCurrentUser } from "@/actions/getCurrentUser";
import { Review } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    console.log("No current user");
    return NextResponse.error();
  }
  const body = await request.json();

  console.log(body);

  const { comment, rating, product, userId } = body;

  console.log(comment);

  const deliveredOrder = currentUser?.orders.some(
    (order) =>
      order.products.find((item) => item.id === product.id) &&
      order.deliveryStatus === "delivered"
  );

  console.log(deliveredOrder);

  const userReview = product?.reviews.find((review: Review) => {
    return review.userId === currentUser.id;
  });

  console.log(userReview);

  if (userReview || !deliveredOrder) {
    return NextResponse.error();
  }

  const review = await prisma?.review.create({
    data: {
      comment,
      rating,
      productId: product.id,
      userId,
    },
  });

  console.log(review);

  return NextResponse.json(review);
}
