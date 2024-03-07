"use client";

import { CartProductType } from "@prisma/client";

interface OrderItemProps {
  item: CartProductType;
}

const OrderItem = ({ item }: OrderItemProps) => {
  return <div></div>;
};

export default OrderItem;
