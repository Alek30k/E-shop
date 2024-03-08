import { useSearchParams } from "next/dist/client/components/navigation";
import { useRouter } from "next/router";
import queryString from "query-string";
import { useCallback } from "react";
import { IconType } from "react-icons";

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
        currentQuery = queryString.parse(params.toString());
      }

      const updateQuery: any = {
        ...currentQuery,
        category: label,
      };

      const url = queryString.stringifyUrl({
        url: "/",
        query: updateQuery,
      });
    }
  }, []);

  return (
    <div
      onClick={handleClick}
      className={`flex items-center justify-center text-center gap-1 p-2 border-b-2 hover:text-slatye-800 transition cursor-pointer ${
        selected
          ? "border-b-800 text-slate-800"
          : "border-transparent text-slate-500"
      }`}
    >
      <Icon size={20} />
      <div className="font-medium text-sm">{label}</div>
    </div>
  );
};

export default Category;
