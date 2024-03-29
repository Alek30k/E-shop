import Link from "next/link";
import Container from "../Container";
import { Redressed } from "next/font/google";
import CartCount from "./CartCount";
import UserMenu from "./UserMenu";
import { getCurrentUser } from "@/actions/getCurrentUser";
import Categories from "./Categories";
import SearchBar from "./SearchBar";
// import ThemeSwitch from "../ThemeSwitch";
import ThemeToggle from "../ThemeToggle";

const redressed = Redressed({ subsets: ["latin"], weight: ["400"] });

const NavBar = async () => {
  const currentUser = await getCurrentUser();

  return (
    <div className="sticky top-0 w-full bg-slate-200 z-30 shadow-sm dark:bg-dark">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex  items-center justify-between gap-3 md:gap-0 dark:text-white">
            <Link
              href="/"
              className={`${redressed.className} font-bold text-2xl `}
            >
              E-Shop
            </Link>

            <div className="hidden md:block">
              <SearchBar />
            </div>
            <div className="flex items-center gap-8 md:gap-10">
              {/* <ThemeSwitch /> */}
              <ThemeToggle />
              <CartCount />
              <UserMenu currentUser={currentUser} />
            </div>
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
};

export default NavBar;
