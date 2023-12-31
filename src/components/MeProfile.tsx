import Image from "next/image";
import { signOut } from "@/auth";
import { redirect } from "next/navigation";
import SignOutButton from "./SignOutButton";
import { TLiked, likedQuery } from "@/db/queries/likedRecipes";
import Container from "./Container";
import { query } from "@/db/queries/recipeFeed";
import MyRecipeContainer from "./MyRecipeContainer";

function getUniqueListBy(arr: any, key: any) {
  return [...new Map(arr.map((item: any) => [item[key], item])).values()];
}

export default async function MeProfile({
  user,
  otherUserId,
  otherUser,
}: {
  user: any;
  otherUserId?: string;
  otherUser: boolean;
}) {
  console.log("HEY");
  console.log(otherUser);
  console.log("BYE");
  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/me");
  }

  const theLikedQuery = likedQuery(user.id);
  const likedResult = await theLikedQuery.execute();
  console.log("BLAH");
  console.log(likedResult);

  const myRecipes = query(null);

  let updatedRecipes;
  if (otherUser) {
    updatedRecipes = (await myRecipes.execute()).filter(
      (recipe) => recipe.userId === otherUserId
    );
    console.log(otherUserId);
  } else {
    updatedRecipes = (await myRecipes.execute()).filter(
      (recipe) => recipe.userId === user.id
    );
  }

  const str = `h-full w-full justify-items-center place-self-center bg-slate-100 p-5 rounded-3xl ${
    otherUser ? " md:col-span-3" : " md:col-span-2"
  }`;

  return (
    <main className="grid grid-cols-1 lg:grid-cols-3 gap-3 flex-col items-center justify-between p-5">
      <div className="flex flex-col items-center place-self-stretch space-between gap-1 md:col-span-3">
        <div className="relative top-5 md:top-10 z-30">
          <svg
            width="60"
            height="60"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none">
              <path
                fill="currentColor"
                d="M19 18h.75H19ZM5 14.584h.75a.75.75 0 0 0-.45-.687l-.3.687Zm14 0l-.3-.687a.75.75 0 0 0-.45.687H19ZM15.75 7a.75.75 0 0 0 1.5 0h-1.5Zm-9 0a.75.75 0 0 0 1.5 0h-1.5ZM7 4.25A5.75 5.75 0 0 0 1.25 10h1.5A4.25 4.25 0 0 1 7 5.75v-1.5Zm10 1.5A4.25 4.25 0 0 1 21.25 10h1.5A5.75 5.75 0 0 0 17 4.25v1.5Zm-2 15.5H9v1.5h6v-1.5Zm-6 0c-.964 0-1.612-.002-2.095-.067c-.461-.062-.659-.169-.789-.3l-1.06 1.062c.455.455 1.022.64 1.65.725c.606.082 1.372.08 2.294.08v-1.5ZM4.25 18c0 .922-.002 1.688.08 2.294c.084.628.27 1.195.725 1.65l1.061-1.06c-.13-.13-.237-.328-.3-.79c-.064-.482-.066-1.13-.066-2.094h-1.5Zm14 0c0 .964-.002 1.612-.067 2.095c-.062.461-.169.659-.3.789l1.062 1.06c.455-.455.64-1.022.725-1.65c.082-.606.08-1.372.08-2.294h-1.5ZM15 22.75c.922 0 1.688.002 2.294-.08c.628-.084 1.195-.27 1.65-.726l-1.06-1.06c-.13.13-.328.237-.79.3c-.482.064-1.13.066-2.094.066v1.5Zm-8-17c.214 0 .423.016.628.046l.219-1.484A5.792 5.792 0 0 0 7 4.25v1.5Zm5-4.5a5.252 5.252 0 0 0-4.973 3.563l1.42.482A3.752 3.752 0 0 1 12 2.75v-1.5ZM7.027 4.813A5.245 5.245 0 0 0 6.75 6.5h1.5c0-.423.07-.828.198-1.205l-1.42-.482ZM17 4.25c-.287 0-.57.021-.847.062l.22 1.484A4.29 4.29 0 0 1 17 5.75v-1.5Zm-5-1.5a3.752 3.752 0 0 1 3.552 2.545l1.42-.482A5.252 5.252 0 0 0 12 1.25v1.5Zm3.552 2.545c.128.377.198.782.198 1.205h1.5c0-.589-.097-1.156-.277-1.687l-1.42.482ZM5.75 18v-3.416h-1.5V18h1.5Zm-.45-4.103A4.251 4.251 0 0 1 2.75 10h-1.5a5.751 5.751 0 0 0 3.45 5.271l.6-1.374Zm12.95.687V18h1.5v-3.416h-1.5Zm3-4.584a4.251 4.251 0 0 1-2.55 3.897l.6 1.374A5.751 5.751 0 0 0 22.75 10h-1.5Zm-5.5-3.5V7h1.5v-.5h-1.5Zm-9 0V7h1.5v-.5h-1.5Zm4.293 7.169l-.444.605l.444-.605ZM12 9.995l-.519.542a.75.75 0 0 0 1.038 0L12 9.995Zm.957 3.674l-.444-.605l.444.605Zm-.957.462v-.75v.75Zm-.514-1.067c-.417-.306-.878-.69-1.227-1.092c-.368-.426-.509-.757-.509-.972h-1.5c0 .77.441 1.451.875 1.953c.453.524 1.014.983 1.474 1.32l.887-1.209ZM9.75 11c0-.576.263-.826.492-.907c.25-.088.714-.06 1.24.444l1.037-1.084c-.825-.79-1.861-1.095-2.773-.775C8.812 9.005 8.25 9.903 8.25 11h1.5Zm3.65 3.274c.46-.338 1.022-.797 1.475-1.321c.434-.502.875-1.183.875-1.953h-1.5c0 .215-.141.546-.51.972c-.348.403-.809.786-1.226 1.092l.887 1.21ZM15.75 11c0-1.097-.563-1.995-1.496-2.322c-.912-.32-1.948-.014-2.773.775l1.038 1.084c.525-.504.989-.532 1.24-.444c.228.08.491.331.491.907h1.5Zm-5.15 3.274c.368.27.782.607 1.4.607v-1.5c-.024 0-.04 0-.094-.029a3.994 3.994 0 0 1-.42-.288l-.887 1.21Zm1.914-1.21a3.994 3.994 0 0 1-.42.288c-.054.029-.07.029-.094.029v1.5c.618 0 1.032-.337 1.4-.607l-.886-1.21Z"
              />
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M5 18h14"
              />
            </g>
          </svg>
        </div>
        <div className="chat chat-start">
          <div className="chat-bubble chat-bubble-primary relative left-52 md:left-70 opacity-60 lg:left-60 top-35 text-xs md:text-base z-30">
            Hmm... What should I to cook today?
          </div>
        </div>
        <div className="items-center justify-center z-10 flex flex-col gap-2 relative bottom-20">
          <Image
            src={otherUser ? user[0].userImage : user.image}
            alt={otherUser ? user[0].user : user.name}
            height={200}
            width={200}
            className="rounded-full h-25 w-25 mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
          <p className="text-gray-500">
            Email: {otherUser ? user[0].userEmail : user.email}
          </p>
          {!otherUser ? (
            <SignOutButton
              signOut={async () => {
                "use server";
                await signOut({ redirectTo: "/" });
              }}
            />
          ) : null}
        </div>
      </div>
      <div className="divider divider-primary md:col-span-3"></div>

      {!otherUser ? (
        <div className="h-full place-items-start justify-items-center  bg-slate-100 p-5 rounded-3xl">
          <h2 className="text-2xl font-bold text-center pb-3">
            Recipes {otherUser ? user[0].user : user.name} Liked
          </h2>

          <div className="grid lg:grid-cols-2 place-items-start gap-5">
            {likedResult.length === 0 ? (
              <h1>Nothing to show</h1>
            ) : (
              // @ts-ignore
              getUniqueListBy(likedResult, "id").map((recipe: TLiked) => (
                <Container item={recipe} key={recipe.id} />
              ))
            )}
          </div>
        </div>
      ) : null}

      <div className={str}>
        <h2 className="text-2xl font-bold text-center col-span-2 pb-3">
          {otherUser ? user[0].user : user.name}'s Recipes
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 p-3">
          {updatedRecipes.length === 0 ? (
            <h1>Nothing to show</h1>
          ) : (
            updatedRecipes.map((recipe) => (
              <MyRecipeContainer
                hideDelete={otherUser ? true : false}
                recipe={recipe}
                key={recipe.id}
              />
            ))
          )}
        </div>
      </div>
    </main>
  );
}
