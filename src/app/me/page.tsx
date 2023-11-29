import { auth } from "@/auth";
import { redirect } from "next/navigation";
import MeProfile from "../../components/MeProfile";

export default async function Me() {
  const session = await auth();

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/me");
  }

  return <MeProfile otherUser={false} user={session.user} />;
}
