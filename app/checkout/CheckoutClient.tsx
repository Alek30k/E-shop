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
      setLoading(true);
      setError(false);

      fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: cartProducts,
          payment_intent_id: paymentIntent,
        }),
      });
    }
  }, [cartProducts, paymentIntent]);

  return <>Checkout</>;
};

export default CheckoutClient;
