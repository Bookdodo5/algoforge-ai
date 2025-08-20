import { sessionValidation } from "@/app/actions/serverActions";
import { redirect } from "next/navigation";
import ContentAnimator from "@/components/content-animator";

export default async function CreateLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await sessionValidation();
    if (!session || session instanceof Error) redirect("/auth/signin");

    return <ContentAnimator>{children}</ContentAnimator>;
}