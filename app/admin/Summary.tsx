"use client";

import { Order, Product, User } from "@prisma/client";

interface SumaryProps {
  orders: Order[];
  products: Product[];
  users: User[];
}

const Summary = ({ orders, products, user }: SumaryProps) => {
  return <div>Sumary</div>;
};

export default Summary;
