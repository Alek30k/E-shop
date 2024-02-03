import { useCart } from "@/hooks/useCart";
import Link from "next/link";

const CartClient = () => {
  const { cartProducts } = useCart();

  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div>
        <div>Your cart is empty</div>
        <div>
          <Link href={"/"}>
            <span>Start Shopping</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>CartClientasd</h1>
    </div>
  );
};

export default CartClient;
