"use client";

import { Order, Product, User } from "@prisma/client";
import { useState } from "react";

interface SumaryProps {
  orders: Order[];
  products: Product[];
  users: User[];
}

type SumaryDataType = {
  [key: string]: {
    label: string;
    digit: number;
  };
};

const Summary = ({ orders, products, users }: SumaryProps) => {
  const [summaryData, setSummaryData] = useState<SumaryDataType>({
    sale: {
      label: "Total Sale",
      digit: 0,
    },
    products: {
      label: "Total Products",
      digit: 0,
    },
    orders: {
      label: "Total Orders",
      digit: 0,
    },
    paidOrders: {
      label: "Paid Orders",
      digit: 0,
    },
    unpaidOrders: {
      label: "Unpaid Orders",
      digit: 0,
    },
    users: {
      label: "Total Users",
      digit: 0,
    },
  });

  return <div></div>;
};

export default Summary;
