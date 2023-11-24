import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container flex h-14 mr-4 md:flex justify-between">
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

        <div className="justify-end">
          <div className="flex flex-1 items-center space-x-2 justify-end">
            <div className="w-full md:items-center md:justify-end hidden md:block">
              <input
                name="search"
                placeholder="Search the recipe!"
                className="border-none flex-auto p-2"
              ></input>
            </div>

            <nav className="flex items-center">
              <div className="rounded-full h-15 w-15 overflow-hidden">
                <Link
                  href="/profile"
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                >
                  <Image
                    src="https://png.pngtree.com/png-vector/20190728/ourlarge/pngtree-avatar-user-profile-flat-color-icon-vector-icon-banner-png-image_1619399.jpg"
                    alt=""
                    width={50}
                    height={50}
                  />
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
