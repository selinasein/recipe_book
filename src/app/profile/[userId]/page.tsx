import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import MeProfile from "@/components/MeProfile";
import { profileQuery } from "@/db/queries/profileFeed";

export default async function Profile({
  params,
}: {
  params: { userId: string };
}) {
  // @ts-ignore
  const profile = await profileQuery(params.userId).execute();

  const session = await auth();

  if (session?.user.id == params.userId) {
    redirect("/me");
  }

  const isLoggedIn = true; // Replace with your authentication logic
  const userData = {
    username: "Your Name",
    location: "Your City",
    joinedDate: "January 1, 2023",
  };

  const user_id = params.userId;
  console.log(params.userId);

  return <MeProfile otherUserId={user_id} user={profile} otherUser={true} />;
}
