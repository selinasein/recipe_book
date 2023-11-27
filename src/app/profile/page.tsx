"use client";

export default function Profile() {
  const isLoggedIn = true; // Replace with your authentication logic
  const userData = {
    username: "Your Name",
    location: "Your City",
    joinedDate: "January 1, 2023",
  };

  const handleSignOut = () => {
    // Implement your sign-out logic here
  };

  const handleSignIn = () => {
    // Implement your sign-in logic here
  };

  return (
    <main className="grid grid-cols-1 md:grid-cols-3 grid-flow-col gap-4 flex-col items-center justify-between p-10">
      <div className="flex flex-col items-center place-self-stretch">
        <img
          src="https://placekitten.com/150/150" // Replace with your profile picture URL
          alt="Profile"
          className="rounded-full h-25 w-25 mb-4"
        />
        <h2 className="text-xl font-semibold mb-2">{userData.username}</h2>
        <p className="text-gray-500">Location: {userData.location}</p>
        <p className="text-gray-500">Joined: {userData.joinedDate}</p>
        {isLoggedIn ? (
          <button
            onClick={handleSignOut}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          >
            Sign Out
          </button>
        ) : (
          <button
            onClick={handleSignIn}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
          >
            Sign In
          </button>
        )}
      </div>

      <div className="mb-6 place-self-start md:col-span-2 bg-slate-100 p-10 w-11/12 rounded-3xl">
        <h1 className="text-3xl font-bold mb-4">
          {userData.username}'s Cooking Book
        </h1>
        <p className="text-gray-600 pb-3">What are you going to cook today?</p>
        <h2 className="text-2xl font-bold mb-4">Your Top 5 Favorite Recipes</h2>
        {/* Add your favorite recipes here */}
        <ul>
          <li className="mb-2">Recipe 1</li>
          <li className="mb-2">Recipe 2</li>
          <li className="mb-2">Recipe 3</li>
        </ul>
      </div>
    </main>
  );
}
