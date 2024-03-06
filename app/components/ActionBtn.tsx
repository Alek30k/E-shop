import { IconType } from "react-icons";

interface ActionBtnProps {
  icon: IconType;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ActionBtn = ({ icon, onClick }: ActionBtnProps) => {
  return <div></div>;
};

export default ActionBtn;
