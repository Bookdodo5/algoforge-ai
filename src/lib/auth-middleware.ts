import { sessionValidation } from "@/app/actions/serverActions";
import { NextResponse } from "next/server";
import { Session } from "next-auth";

export function withAuth<T>(
    handler: (request: Request, session: Session) => Promise<T>
) {
    return async (request: Request) => {
        try {
            const session = await sessionValidation();
            if (!session || !session.user) {
                return NextResponse.json(
                    { error: "Authentication required. Please sign in." },
                    { status: 401 }
                );
            }
            return await handler(request, session);

        } catch (error) {
            console.error("Auth middleware error:", error);
            return NextResponse.json(
                { error: "Authentication failed" },
                { status: 500 }
            );
        }
    };
} 