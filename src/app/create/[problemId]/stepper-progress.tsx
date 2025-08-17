"use client";
import React from "react";

import { usePathname } from "next/navigation";
import { Card } from "@/components/ui/card";
import {
    PlayCircle,
    Sparkles,
    Lightbulb,
    FileText,
    Network,
    Maximize,
    BookOpen,
    Code2,
    CheckCircle,
} from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

const steps = [
    { id: "start", title: "Start", order: 0, icon: PlayCircle },
    { id: "vibe-extraction", title: "Vibe Extraction", order: 1, icon: Sparkles },
    { id: "theme-ideation", title: "Theme Ideation", order: 2, icon: Lightbulb },
    { id: "logline-expansion", title: "Logline Expansion", order: 3, icon: Maximize },
    { id: "narrative-generation", title: "Narrative Generation", order: 4, icon: BookOpen },
    { id: "algorithm-specification", title: "Algorithm Specification", order: 5, icon: Network },
    { id: "problem-formalization", title: "Problem Formalization", order: 6, icon: FileText },
    { id: "solution-formation", title: "Solution Formation", order: 7, icon: Code2 },
    { id: "finalization", title: "Finalization", order: 8, icon: CheckCircle }
];

export default function StepperProgress() {
    const pathname = usePathname();
    const segments = pathname.split('/');
    const problemId = segments[2];

    const getCurrentStep = (): number => {
        if (segments.length === 3) return 0;

        const stepSegment = segments[segments.length - 1];
        const currentStep = steps.find(step => step.id === stepSegment);
        return currentStep?.order || 0;
    };

    const getPath = (step: number): string => {
        if (step === 0) return `/create/${problemId}`;
        return `/create/${problemId}/${steps[step].id}`;
    }

    const currentStep = getCurrentStep();

    const StepperNode = ({ step }: { step: number }): React.ReactNode => {
        const stepData = steps[step];
        const Icon = stepData?.icon;
        const isCompleted = step < currentStep;
        const isCurrent = step === currentStep;

        const getStepStyles = () => {
            if (isCompleted) {
                return "size-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center cursor-pointer";
            } else if (isCurrent) {
                return "size-8 bg-primary/20 border-2 border-primary text-primary rounded-full flex items-center justify-center cursor-pointer";
            } else {
                return "size-8 bg-muted text-muted-foreground rounded-full flex items-center justify-center cursor-pointer";
            }
        };

        const getIconStyles = () => {
            if (isCompleted) {
                return "text-primary-foreground";
            } else if (isCurrent) {
                return "text-primary";
            } else {
                return "text-muted-foreground";
            }
        };

        return (
            <Link key={step+"Link"} href={getPath(step)}>
                <div className={getStepStyles()}>
                    <Tooltip>
                        <TooltipTrigger className="cursor-pointer">
                            <Icon size={16} className={getIconStyles()} />
                        </TooltipTrigger>
                        <TooltipContent side="bottom">
                            <p>{stepData.order >0 && stepData.order + ". "}{stepData.title}</p>
                        </TooltipContent>
                    </Tooltip>
                </div>
            </Link>
        )
    }

    return (
        <Card className="w-full h-32 pt-16 bg-card pb-0">
            <div className="flex items-center justify-center h-full gap-1">
                {
                    steps.map((step, index) => (
                        <React.Fragment key={step.id}>
                            <StepperNode step={index} />
                            {index < steps.length - 1 && (
                                <div
                                    className={`w-24 h-1 rounded-full ${
                                        index < currentStep ? 'bg-primary' : 'bg-muted'
                                    }`}
                                />
                            )}
                        </React.Fragment>
                    ))
                }
            </div>
        </Card>
    );
}
