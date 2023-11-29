import { TLiked } from "@/db/queries/likedRecipes";
import Image from "next/image";
import Link from "next/link";

export default function Container({ item }: { item: TLiked }) {
  return (
    <div className="relative group container drop-shadow-lg overflow-hidden">
      <Link href={`/details/${item.id}`}>
        <Image
          src={item.recipeImage}
          alt={item.recipeTitle}
          width={900}
          height={900}
          className="object-cover w-full h-full transition-transform transform scale-100 group-hover:scale-105 filter grayscale-30 hover:cursor-pointer"
        />
      </Link>
    </div>
  );
}
