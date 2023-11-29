import { categoryQuery } from "@/db/queries/categories";
import Link from "next/link";

export default async function Categories() {
  const categories = await categoryQuery.execute();

  return (
    <div className="container mx-auto p-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
      {categories.map((category) => (
        <Link href={`/?category=${category.id}`}>
          <div
            key={category.id}
            className="w-30 h-60 overflow-hidden relative rounded-md shadow-lg p-6"
            style={{
              backgroundImage: `url(${category.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 opacity-0 bg-slate-500 hover:opacity-50 hover:cursor-pointer"></div>
            <h2 className="text-white text-3xl font-semibold mb-20 mx-10 justify-center items-center hover:text-black">
              {category.category}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );
}
