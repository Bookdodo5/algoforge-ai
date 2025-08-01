import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authConfig } from "../api/auth/[...nextauth]/route";

export default async function CreateLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerSession(authConfig);
    if (!session) redirect("/auth/signin");

    return <>{children}</>;
}