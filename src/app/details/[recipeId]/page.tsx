"use client";

import Link from "next/link";
import { useState } from "react";

export default function Details({ params }: { params: { recipeId: string } }) {
  const recipeId = params.recipeId;

  const [comments, setComments] = useState([
    { id: 2, user: "Jane Smith", text: "Nice work on the design!" },
    { id: 1, user: "John Doe", text: "This is the first comment." },
    { id: 1, user: "John Doe", text: "This is the first comment." },
    { id: 1, user: "John Doe", text: "This is the first comment." },
    { id: 1, user: "John Doe", text: "This is the first comment." },
    { id: 1, user: "John Doe", text: "This is the first comment." },
    { id: 1, user: "John Doe", text: "This is the first comment." },
    { id: 1, user: "John Doe", text: "This is the first comment." },
    { id: 1, user: "John Doe", text: "This is the first comment." },
    { id: 1, user: "John Doe", text: "This is the first comment." },
    { id: 1, user: "John Doe", text: "This is the first comment." },
    { id: 1, user: "John Doe", text: "This is the first comment." },
    { id: 1, user: "John Doe", text: "This is the first comment." },
  ]);

  const addComment = () => {
    // Simulating adding a new comment to the fake database
    const newComment = {
      id: comments.length + 1,
      user: "New User",
      text: "A new comment!",
    };

    setComments([...comments, newComment]);
  };

  const recipeData = {
    id: 1,
    title: "Spaghetti Bolognese",
    image: "/images/SpaghettiBolognese.jpg",
    description: "Classic Italian pasta dish with a rich meat sauce.",
    ingredients: [
      "500g ground beef",
      "1 onion",
      "2 cloves garlic",
      "400g canned tomatoes",
      "200g spaghetti",
    ],
    instructions:
      "Cook spaghetti according to package instructions. In a separate pan, sauté chopped onions and garlic. Add ground beef and brown. Pour in canned tomatoes and simmer. Serve sauce over cooked spaghetti.",
    category: "Italian",
    createdAt: "2021-06-01T23:28:56.782Z",
    postedBy: "Selina",
    userId: "1",

    likes: 20,
    comments: 10,
  };

  return (
    <div className="m-10 grid grid-cols-1 md:grid-rows-4 md:grid-cols-3 gap-4">
      <div className="card w-120 bg-base-100 shadow-xl row-span-2">
        <figure>
          <img
            src={recipeData.image || "/images/NoImageDefault.jpg"}
            alt={recipeData.title}
          />
        </figure>
        <div className="card-body max-h-32">
          <h2 className="card-title text-3xl items-center justify-center">
            {recipeData.title}
          </h2>
          <p>{recipeData.description}</p>
          <div className="pt-12">
            <div className="divider divider-start font-bold">Ingredients</div>
            <ul className="list-none p-0">
              {recipeData.ingredients.map((ingredient) => (
                <li key={ingredient}>
                  <div className="grid grid-cols-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="col-span-1"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0"
                      />
                    </svg>
                    <div className="col-span-2 place-self-start">
                      {ingredient}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="divider divider-end font-bold">Instructions</div>
            <ol className="list-decimal m-5 text-sm">
              {recipeData.instructions
                .split(".")
                .map((instruction, index) =>
                  instruction.length < 1 ? (
                    <li key={index}>Bon Appétit!</li>
                  ) : (
                    <li key={index}>{instruction}</li>
                  )
                )}
            </ol>
          </div>
        </div>
      </div>
      <div className="col-span-2 row-span-1 flex justify-center max-h-44">
        <div className="stats shadow-xl border border-gray-200">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Total Likes</div>
            <div className="stat-value text-primary">{recipeData.likes}</div>
            <div className="stat-desc">
              {recipeData.likes} People like this recipe !
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Total Comments</div>
            <div className="stat-value text-secondary">
              {recipeData.comments}
            </div>
            <div className="stat-desc">
              There are {recipeData.comments} comments !
            </div>
          </div>

          <Link href={recipeData.userId} className="stat  hover:bg-slate-200">
            <div className="stat-figure text-secondary">
              <div className="avatar">
                <div className=" rounded-full">
                  <img src="https://placekitten.com/150/150" />
                </div>
              </div>
            </div>
            <div className="stat-value text-md">{recipeData.postedBy}</div>
            <div className="stat-title">Posted on {recipeData.createdAt}</div>
            <div className="stat-desc text-secondary">Total Recipes: 13</div>
          </Link>
        </div>
      </div>
      <div className="wfull rounded-xl bg-base-100 shadow-xl border col-span-2 max-h-fit	 grid-row-end row-span-5 p-4">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>
        <div className="divider divider-primary"></div>

        <ul className="list-none p-0">
          {comments.map((comment) => (
            <li key={comment.id} className="mb-2">
              <strong>{comment.user}:</strong> {comment.text}
            </li>
          ))}
        </ul>

        <button
          onClick={addComment}
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md"
        >
          Add Comment
        </button>
      </div>
    </div>
  );
}

/*

 <ol className="list-decimal m-5 text-sm">
            {recipeData.instructions.split(".").map((instruction) => (instruction.length>1 && <li key={instruction}>Done ! Bon Apetite ! </li> : <li key={instruction}}>{instruction}</li>
            ))}
          </ol>*/
