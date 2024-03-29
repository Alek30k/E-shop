import { Icon } from "@mui/material";
import { IconType } from "react-icons";

interface AdminNavItemProps {
  selected?: boolean;
  icon: IconType;
  label: string;
}

const AdminNavItem = ({ selected, icon: Icon, label }: AdminNavItemProps) => {
  return (
    <div
      className={`flex items-center justify-center text-center gap-1 p-2 border-b-2 hover:text-slate-800 transition cursor-pointer dark:text-white ${
        selected
          ? "border-b-slate-800 text-slate-800 dark:border-white"
          : "border-transparect text-slate-500 dark:border-gray-700"
      }`}
    >
      <Icon size={20} />
      <div className="font-medium text-sm text-center break-normal">
        {label}
      </div>
    </div>
  );
};

export default AdminNavItem;
