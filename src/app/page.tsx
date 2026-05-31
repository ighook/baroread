import { authOptions } from "@/app/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <main>
      <div>
        <p>{session.user.name}님 로그인됨</p>
        <p>{session.user.email}</p>
      </div>
    </main>
  );
}
