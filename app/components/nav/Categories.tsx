"use client";

import { categories } from "@/utils/Categories";
import Container from "../Container";
import Category from "./Category";
import { usePathname, useSearchParams } from "next/navigation";
import queryString from "query-string";

function Categories() {
  const params = useSearchParams();
  // const category = params?.get("category");
  const pathname = usePathname();

  let currentQuery = {};

  if (params) {
    currentQuery = queryString.parse(params.toString());
  }

  const updateQuery: any = {
    ...currentQuery,
  };

  const category = updateQuery.category;

  const isMainPage = pathname === "/";

  if (!isMainPage) return null;

  return (
    <div className="bg-white dark:bg-darkcategory ">
      <Container>
        <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto ">
          {categories.map((item) => (
            <Category
              key={item.label}
              label={item.label}
              icon={item.icon}
              selected={
                category === item.label ||
                (category === undefined && item.label === "All")
              }
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Categories;
