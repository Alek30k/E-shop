"use client";

import { useCart } from "@/hooks/useCart";
import { useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

interface CheckoutFormProps {
  clientSecret: string;
  handleSetPaymentSuccess: (value: boolean) => void;
}

const CheckoutForm = ({
  clientSecret,
  handleSetPaymentSuccess,
}: CheckoutFormProps) => {
  const { cartTotalAmount, handleClearCart, handleSetPaymentIntent } =
    useCart();
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);

  return <div>CheckoutForm</div>;
};

export default CheckoutForm;
