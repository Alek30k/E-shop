import { CartProductType } from "../product/ProductDetails";

interface ItemContentProps {
  item: CartProductType;
}

const ItemContent = ({ item }: ItemContentProps) => {
  return (
    <div>
      <div>{item.name}</div>
    </div>
  );
};

export default ItemContent;
