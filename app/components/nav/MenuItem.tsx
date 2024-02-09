interface MenuItemProps {
  children: React.ReactNode;
  onClick: () => void;
}

const MenuItem = ({ children, onClick }: MenuItemProps) => {
  return <div onClick={onClick}>{children}</div>;
};

export default MenuItem;
