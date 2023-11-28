"use client";

import { createRecipe } from "@/actions/createRecipe";
import { getSignedURL } from "@/actions/getSignedUrl";
import { TCategory } from "@/db/queries/categories";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateRecipeClient({
  categories,
}: {
  categories: TCategory[];
}) {
  const [recipeTitle, setRecipeTitle] = useState("");
  const [recipeCategory, setRecipeCategory] = useState("");
  const [recipeIngredients, setRecipeIngredients] = useState("");
  const [recipeInstructions, setRecipeInstructions] = useState("");
  const [recipeImage, setRecipeImage] = useState("");
  const [recipeTitleIndicator, setRecipeTitleIndicator] = useState("");
  const [file, setFile] = useState<File | undefined>(undefined);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0]);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (file) {
      const computeSHA256 = async (file: File) => {
        const buffer = await file.arrayBuffer();
        const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray
          .map((b) => b.toString(16).padStart(2, "0"))
          .join("");
        return hashHex;
      };

      const signedURLResult = await getSignedURL({
        fileSize: file.size,
        fileType: file.type,
        checksum: await computeSHA256(file),
      });
      if (signedURLResult.failure !== undefined) {
        console.error(signedURLResult.failure);
        return;
      }

      const { url, key /*id: recipeId*/ } = signedURLResult.success;
      console.log(url);
      debugger;
      const ourFile = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": file.type,
        },
        body: file,
      });

      console.log(ourFile);

      const s3FileUrl = `https://recipe-book-selinasein.s3.ca-central-1.amazonaws.com/${key}`;
      const recipeResult = await createRecipe(s3FileUrl);
      debugger;
      // @ts-ignore
      const recipePath = recipeResult[0].insertedId;
      router.push(`/details/${recipePath}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md justify-center items-center col-span-2"
    >
      <div className="m-10 grid grid-cols-1 ">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">What is your Recipe Name?</span>
          </label>
          <input
            type="text"
            id="recipeTitle"
            name="recipeTitle"
            placeholder="Type here"
            value={recipeTitle}
            onChange={(e) => {
              setRecipeTitle(e.target.value),
                setRecipeTitleIndicator("Sounds Delicious!");
            }}
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            <span className="label-text-alt"> </span>
            <span className="label-text-alt">{recipeTitleIndicator}</span>
          </label>
        </div>
        <label className="label">
          <span className="label-text">What is the category?</span>
        </label>
        <select
          className="form-control mt-1 block w-56 md:w-80 py-2 px-3 border-none bg-gray-100 dark:bg-gray-900 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 dark:hover:bg-blue-900 dark:focus:bg-blue-900 focus:ring-0 mb-5"
          value={recipeCategory}
          onChange={(e) => {
            setRecipeCategory(e.target.value);
          }}
          name="categoryId"
        >
          {categories.length > 0 ? (
            categories.map((category) => (
              <option value={category.id} key={category.id}>
                {category.category}
              </option>
            ))
          ) : (
            <option value="0" key={0}>
              No Existing Category
            </option>
          )}
        </select>

        <div className="form-control w-full max-w-xs mb-5">
          <label className="label col-span-3">
            <span className="label-text">What are the ingredients?</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Type here"
            //   value={}
            onChange={(e) => {}}
            className="input input-bordered w-full max-w-xs col-span-2"
          />
        </div>

        <div className="form-control w-full max-w-xs mb-5">
          <label className="label col-span-3">
            <span className="label-text">What are the instructions?</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Type here"
            //   value={}
            onChange={(e) => {}}
            className="input input-bordered w-full max-w-xs col-span-2"
          />
        </div>

        <div className="mb-5">
          <p className="text-sm mb-3">Upload Your Recipe Photo!</p>
          <input
            type="file"
            name="newFile"
            id="uploadFile"
            accept="image/jpeg, image/png, image/webp, image/gif, video/mp4, video/webm"
            onChange={handleChange}
            hidden
          ></input>
          <label htmlFor="uploadFile">
            <svg
              role="img"
              viewBox="0 0 24 24"
              className="fill-neutral-500 w-5 h-5 cursor-pointer"
            >
              <title>UploadFile</title>
              <path d="M13.9455 9.0196L8.49626 14.4688C7.16326 15.8091 5.38347 15.692 4.23357 14.5347C3.07634 13.3922 2.9738 11.6197 4.30681 10.2794L11.7995 2.78669C12.5392 2.04694 13.6745 1.85651 14.4289 2.60358C15.1833 3.3653 14.9855 4.4859 14.2458 5.22565L6.83367 12.6524C6.57732 12.9088 6.28435 12.8355 6.10124 12.6671C5.94011 12.4986 5.87419 12.1983 6.12322 11.942L11.2868 6.78571C11.6091 6.45612 11.6164 5.97272 11.3088 5.65778C10.9938 5.35749 10.5031 5.35749 10.1808 5.67975L4.99529 10.8653C4.13835 11.7296 4.1823 13.0626 4.95134 13.8316C5.77898 14.6592 7.03874 14.6446 7.903 13.7803L15.3664 6.32428C16.8678 4.81549 16.8312 2.83063 15.4909 1.4903C14.1799 0.179264 12.1584 0.106021 10.6496 1.60749L3.10564 9.16608C1.16472 11.1143 1.27458 13.9268 3.06169 15.7139C4.8488 17.4937 7.6613 17.6109 9.60955 15.6773L15.1027 10.1841C15.4103 9.87653 15.4103 9.30524 15.0881 9.00495C14.7878 8.68268 14.2677 8.70465 13.9455 9.0196Z"></path>
            </svg>
          </label>
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Upload Recipe
        </button>
      </div>
    </form>
  );
}
