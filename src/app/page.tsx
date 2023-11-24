import Image from "next/image";
import { fakeRecipes } from "./fakeDb";
import Link from "next/link";

export default function Home() {
  const recipes = fakeRecipes[0];

  return (
    <main className="flex min-h-screen flex-col place-self-center items-center justify-between">
      <div className="w-screen h-48 overflow-hidden">
        <img src="images/Banner.jpg" alt="BannerImage"></img>
      </div>

      <div className="p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 place-self-auto">
          {fakeRecipes.map((ingredient) => (
            <div className="card bg-base-100 shadow-xl grid grid-rows-2">
              <div className="w-30 h-60 overflow-hidden rounded-t-lg">
                <div className="relative">
                  <span className="indicator-item badge badge-primary absolute top-5 left-5 z-10">
                    new
                  </span>
                  {ingredient.image.length > 1 && (
                    <Image
                      src={ingredient.image || ""}
                      alt=""
                      width="500"
                      height="600"
                      className="z-0"
                    />
                  )}
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
                  <Link href="/details/" className="card-actions justify-end">
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
