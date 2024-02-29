import Link from "next/link";
import Container from "../Container";
import AdminNavItem from "./AdminNavItem";
import { MdDashboard } from "react-icons/md";
import { usePathname } from "next/navigation";

const AdminNav = () => {
  const pathName = usePathname();

  return (
    <div className="w-full shadow-sm top-20 border-b-[1px] pt-4">
      <Container>
        <div className="flex flex-row items-center justify-between md:justify-center  md:gap-12 overflow-auto flex-nowrap">
          <Link href="/admin">
            <AdminNavItem
              label="Summary"
              icon={MdDashboard}
              selected={pathName === "/admin"}
            />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default AdminNav;
