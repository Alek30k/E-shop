import getProducts from "@/actions/getProducts";
import Summary from "./Summary";
import getOrders from "@/actions/getOrders";
import getUsers from "@/actions/getUsers";
import Container from "../components/Container";

export const metadata = {
  title: "E-shop Admin",
  description: "E-shop Admin Dashboard",
};

const Admin = async () => {
  const products = await getProducts({ category: null });
  const orders = await getOrders();
  const users = await getUsers();

  return (
    <div className="pt-8 ">
      <Container>
        <Summary orders={orders} products={products} users={users} />
      </Container>
    </div>
  );
};

export default Admin;
