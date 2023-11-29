"use server";

import Link from "next/link";
import Image from "next/image";
import { auth } from "@/auth";

export default async function NavBar() {
  const session = await auth();

  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container h-14 w-full flex justify-between items-center m-2">
        <Link href="/" className="mr-6 flex items-center space-x-5">
          Recipe Book
        </Link>
        <nav className="flex items-center space-x-5 text-sm font-medium">
          <Link
            href="/upload"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Upload
          </Link>
          <Link
            href="/categories"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Categories
          </Link>
        </nav>

        <div className="flex ">
          <form
            action="/search"
            method="get"
            className="mr-4 hidden md:flex flex-auto"
          >
            <input
              name="query"
              placeholder="Search the recipe..."
              className="border text-sm rounded-full text-center mx-2"
            />
            <button className="btn btn-outline btn-primary">Search</button>
          </form>

          <div className="rounded-full h-15 w-15 overflow-hidden">
            <Link
              href="/me"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {session && session.user.image && session.user.name ? (
                <Image
                  src={session.user.image}
                  alt={session.user.name}
                  width={50}
                  height={50}
                />
              ) : (
                <Image
                  src="https://png.pngtree.com/png-vector/20190728/ourlarge/pngtree-avatar-user-profile-flat-color-icon-vector-icon-banner-png-image_1619399.jpg"
                  alt=""
                  width={50}
                  height={50}
                />
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
