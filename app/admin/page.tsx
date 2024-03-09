import getProducts from "@/actions/getProducts";
import Summary from "./Summary";
import getOrders from "@/actions/getOrders";

export const metadata = {
  title: "E-shop Admin",
  description: "E-shop Admin Dashboard",
};

const Admin = async () => {
  const products = await getProducts({ category: null });
  const orders = await getOrders();

  return (
    <div className="pt-8 ">
      <Summary orders={orders} products={products} users={users} />
    </div>
  );
};

export default Admin;
