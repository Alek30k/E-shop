"use client";

import queryString from "query-string";
import { useCallback } from "react";
import { IconType } from "react-icons";
import { useRouter, useSearchParams } from "next/navigation";

interface CategoryProps {
  label: string;
  icon: IconType;
  selected?: boolean;
}

const Category = ({ label, icon: Icon, selected }: CategoryProps) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    if (label === "All") {
      router.push("/");
    } else {
      let currentQuery = {};

      if (params) {
        currentQuery = queryString.parse(params?.toString());
      }

      const updateQuery: any = {
        ...currentQuery,
        category: label,
      };

      const url = queryString.stringifyUrl(
        {
          url: "/",
          query: updateQuery,
        },
        {
          skipNull: true,
        }
      );
      router.push(url);
    }
  }, [label, params, router]);

  return (
    <div
      onClick={handleClick}
      className={`flex items-center justify-center text-center gap-1 pb-2 border-b-2 hover:text-slate-800 transition cursor-pointer ${
        selected
          ? "border-slate-800 text-slate-800"
          : "border-transparent text-slate-500"
      }`}
    >
      <Icon size={20} />
      <div className="font-medium text-sm">{label}</div>
    </div>
  );
};

export default Category;
