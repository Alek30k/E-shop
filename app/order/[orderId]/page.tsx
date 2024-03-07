import Container from "@/app/components/Container";
import OrderDetails from "./OrderDetails";
import ListRating from "./ListRating";

interface IParams {
  orderId?: string;
}

const Order = ({ params }: { params: IParams }) => {
  return (
    <div className="p-8">
      <Container>
        <OrderDetails order={order} />
        <div className="flex flex-col mt-20 gap-4">
          <div>Add Rating</div>
          <ListRating order={order} />
        </div>
      </Container>
    </div>
  );
};

export default Order;