import Image from "next/image";
import { fakeRecipes } from "./fakeDb";
import Link from "next/link";
import { users } from "@/db/schema/users";
import { db } from "@/db";

export default async function Home() {
  const recipes = fakeRecipes[0];
  // await db
  //   .insert(users)
  //   .values({ username: "john123", firstName: "john", lastName: "smith" });

  return (
    <main className="flex min-h-screen flex-col place-self-center items-center justify-between">
      <div className="w-screen h-48 overflow-hidden">
        <img src="images/Banner.jpg" alt="BannerImage"></img>
      </div>

      <div className="p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-self-auto">
          {fakeRecipes.map((ingredient) => (
            <div className="card bg-base-100 shadow-xl grid grid-rows-2">
              <div className="w-30 h-60 overflow-hidden rounded-t-lg">
                <div className="relative">
                  <span className="indicator-item badge badge-primary absolute top-5 left-5 z-10">
                    new
                  </span>
                  <span className="absolute top-5 right-5 z-10">
                    <div className="hover:cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-800 flex justify-center items-center h-9 w-9 rounded-full transition-all fill-none dark:stroke-white stroke-black relative -top-px">
                      <svg
                        className="w-6 h-6 stroke-2 relative top-px"
                        aria-label="Like"
                        viewBox="0 0 26 26"
                        role="img"
                      >
                        <title>Like</title>
                        <path d="M2.5 9.85683C2.5 14.224 6.22178 18.5299 12.0332 22.2032C12.3554 22.397 12.7401 22.5909 13 22.5909C13.2703 22.5909 13.655 22.397 13.9668 22.2032C19.7782 18.5299 23.5 14.224 23.5 9.85683C23.5 6.11212 20.8698 3.5 17.4599 3.5C15.4847 3.5 13.9356 4.39792 13 5.74479C12.0851 4.40812 10.5257 3.5 8.5401 3.5C5.14059 3.5 2.5 6.11212 2.5 9.85683Z"></path>
                      </svg>
                    </div>
                  </span>

                  <Image
                    src={ingredient.image || "/images/NoImageDefault.jpg"}
                    alt={ingredient.title}
                    width="600"
                    height="600"
                    className="z-0"
                  />
                </div>
              </div>
              <div className="card-body">
                <h2 className="card-title">{ingredient.title}</h2>
                <p>{ingredient.description}</p>
                <p>Updated by: {ingredient.postedBy}</p>
                <div className="grid grid-cols-2 ">
                  <div className="badge badge-neutral place-self-start ">
                    {ingredient.category}
                  </div>
                  <Link
                    href={`/details/${ingredient.id}`}
                    className="card-actions md:justify-end"
                  >
                    <span className="btn btn-primary">Show Detail</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
