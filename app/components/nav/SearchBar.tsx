"use client";

import { useRouter } from "next/navigation";
import queryString from "query-string";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

const SearchBar = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      searchTerm: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (!data.searchTerm) {
      toast("no escribiste nada pendejo");
      return router.push("/");
    }

    const url = queryString.stringifyUrl(
      {
        url: "/",
        query: {
          searchTerm: data.searchTerm,
        },
      },
      { skipNull: true }
    );

    router.push(url);
    reset();
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubmit(onSubmit)();
    }
  };

  return (
    <div className="flex items-center">
      <input
        {...register("searchTerm")}
        autoComplete="off"
        type="text"
        onKeyPress={handleKeyPress}
        placeholder="Explore E-Shop"
        className="p-2 border border-gray-300 dark:border-gray-700 dark:text-white dark:bg-transparent rounded-l-md focus:outline-none focus:border-[0.5px] focus:border-slate-500 w-80"
      />
      <button
        onClick={handleSubmit(onSubmit)}
        className="bg-slate-700 hover:opacity-80 text-white p-2 rounded-r-md"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
