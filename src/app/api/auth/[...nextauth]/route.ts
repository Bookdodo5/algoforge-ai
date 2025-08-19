import NextAuth from "next-auth"
import { authConfig } from "@/app/actions/serverActions"

const handler = NextAuth(authConfig)

export { handler as GET, handler as POST } 