"use client";
import addLike from "@/actions/addLike";
import { useState } from "react";

type Props = {
  recipeId: number;
  isLiked: boolean;
};
export default function HeartIcon({ recipeId, isLiked }: Props) {
  const [filled, setFilled] = useState(isLiked);
  const handleClick = async () => {
    setFilled(!filled);
    const formData = new FormData();
    formData.set("recipeId", recipeId.toString());
    await addLike(formData);
  };
  return (
    <span onClick={() => handleClick()} className="absolute top-5 right-5 z-10">
      <div className="hover:cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-800 flex justify-center items-center h-9 w-9 rounded-full transition-all fill-none dark:stroke-white stroke-black relative -top-px">
        <svg
          className="w-6 h-6 stroke-2 relative top-px"
          aria-label="Like"
          viewBox="0 0 26 26"
          role="img"
          fill={filled ? "black" : "transparent"}
        >
          <title>Like</title>
          <path d="M2.5 9.85683C2.5 14.224 6.22178 18.5299 12.0332 22.2032C12.3554 22.397 12.7401 22.5909 13 22.5909C13.2703 22.5909 13.655 22.397 13.9668 22.2032C19.7782 18.5299 23.5 14.224 23.5 9.85683C23.5 6.11212 20.8698 3.5 17.4599 3.5C15.4847 3.5 13.9356 4.39792 13 5.74479C12.0851 4.40812 10.5257 3.5 8.5401 3.5C5.14059 3.5 2.5 6.11212 2.5 9.85683Z"></path>
        </svg>
      </div>
    </span>
  );
}
