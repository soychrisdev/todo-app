import { ToastWithTitle } from "@/components/toast/ToastWithTitle";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { User } from "./user";


export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <>
    <h2>Server Session</h2>
      <pre>{JSON.stringify(session)}</pre>
      <h1>ROOT HOME PAGE </h1>
      {/* <ToastWithTitle/> */}
      <h1>USER</h1>
      <User/>
    </>
  )
}
