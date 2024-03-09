"use client";

import { Order, Product, User } from "@prisma/client";

interface SumaryProps {
  orders: Order[];
  product: Product[];
  user: User[];
}

const Sumary = ({ orders, product, user }: SumaryProps) => {
  return <div>Sumary</div>;
};

export default Sumary;
