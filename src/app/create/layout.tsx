import { sessionValidation } from "@/app/actions/serverActions";
import { redirect } from "next/navigation";

export default async function CreateLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await sessionValidation();
    if (!session || session instanceof Error) redirect("/auth/signin");

    return <>{children}</>;
}