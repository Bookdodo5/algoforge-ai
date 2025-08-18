import { sessionValidation } from "@/app/actions/serverActions";
import { ProblemDisplay } from "./problem-display";
import { prisma } from "@/lib/prisma";

async function getProblems() {
    const session = await sessionValidation()
    if(session instanceof Error) {
        console.error(session)
        return [];
    }
    const userId = session.user.id
    const problems = await prisma.problemGeneration.findMany({
        where: {
            userId: userId
        }
    })
    return problems
}

export default async function Problems() {
    const problems = await getProblems();
    const serializableProblems = problems.map(problem => ({
        ...problem,
        createdAt: problem.createdAt.toISOString(),
        updatedAt: problem.updatedAt.toISOString(),
    }));

    return (
        <div className="bg-background p-36 pb-16 flex flex-col">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Your Programming <span className="text-primary">Problems</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Problems you've created with our system.
                </p>
            </div>

            <ProblemDisplay problems={serializableProblems as any} />
        </div>
    );
}