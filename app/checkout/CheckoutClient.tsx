"use client";

import { useCart } from "@/hooks/useCart";
import { useEffect, useState } from "react";

const CheckoutClient = () => {
  const { cartProducts, paymentIntent, handleSetPaymentIntent } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    //create a paymentintent as soon as the page loads
    if (cartProducts) {
    }
  }, [cartProducts, paymentIntent]);

  return <>Checkout</>;
};

export default CheckoutClient;
