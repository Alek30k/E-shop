import { IconType } from "react-icons";

interface CategoryInputProps {
  selected?: boolean;
  label: string;
  icon: IconType;
  onClick: (value: string) => void;
}

const CategoryInput = ({
  selected,
  label,
  icon,
  onClick,
}: CategoryInputProps) => {
  return <div>CategoryInput</div>;
};

export default CategoryInput;
