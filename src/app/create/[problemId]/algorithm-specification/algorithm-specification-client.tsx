"use client"

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Network, Loader2, BookOpen, Wand2, Shuffle, ChevronRight, ChevronLeft } from "lucide-react";
import { updateProblem } from "@/app/actions/serverActions";
import { ALGORITHM_LIBRARY } from "@/lib/algorithms";

type AlgorithmSuggestion = {
    id: string;
    narrativeJustification: string
};

type ProblemProposal = {
    coreAlgorithm: string;
    coreConcept: string;
    detailedDescription: string;
    narrativeJustification: string;
    originalityNotes: string;
    difficulty: "Straightforward" | "Tricky" | "Challenging";
};

export default function AlgorithmSpecificationClient({
    problemId,
    narrative,
    selectedAlgorithms,
    existingProposal,
}: {
    problemId: string;
    narrative: string;
    selectedAlgorithms: string[];
    existingProposal?: ProblemProposal | null;
}) {
    const router = useRouter();
    const [suggestions, setSuggestions] = useState<AlgorithmSuggestion[]>([]);
    const [selectedAlgos, setSelectedAlgos] = useState<string[]>(selectedAlgorithms ? selectedAlgorithms : []);
    const [proposals, setProposals] = useState<ProblemProposal[]>([]);
    const [currentSuggestionIndex, setCurrentSuggestionIndex] = useState<number>(0);
    const [currentProposalIndex, setCurrentProposalIndex] = useState<number>(0);
    const [search, setSearch] = useState<string>("");
    const [isRouting, setIsRouting] = useState(false);
    const [finalProposal, setFinalProposal] = useState<ProblemProposal>(
        existingProposal || {
            coreAlgorithm: "",
            coreConcept: "",
            detailedDescription: "",
            narrativeJustification: "",
            originalityNotes: "",
            difficulty: "Straightforward"
        });

    const suggestMutation = useMutation({
        mutationFn: async () => {
            const res = await fetch("/api/ai/algorithm-suggestion", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ narrative }),
            });

            if (!res.ok) throw new Error("Algorithm suggestion failed");

            return res.json() as Promise<{ suggestions: AlgorithmSuggestion[] }>;
        },
        onSuccess: (data) => setSuggestions(data.suggestions),
    });

    const diversifyMutation = useMutation({
        mutationFn: async () => {
            const selectedAlgorithms = ALGORITHM_LIBRARY.filter((a) => selectedAlgos.includes(a.id));
            const res = await fetch("/api/ai/algorithm-diversification", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ narrative, algorithms: selectedAlgorithms }),
            });

            if (!res.ok) throw new Error("Algorithm diversification failed");

            return res.json() as Promise<{ proposals: ProblemProposal[] }>;
        },
        onSuccess: (data) => {
            setProposals(data.proposals);
        },
    });

    const saveMutation = useMutation({
        mutationFn: () =>
            updateProblem(problemId, {
                selectedAlgorithms: selectedAlgos,
                problemProposal: finalProposal,
                currentStep: 6,
            }),
        onSuccess: () => {
            setIsRouting(true);
            router.push(`/create/${problemId}/problem-formalization`);
        },
    });

    const filteredLibrary = useMemo(() => {
        if (!search.trim()) return ALGORITHM_LIBRARY;
        return ALGORITHM_LIBRARY.filter(
            a => a.name.toLowerCase().includes(search.toLowerCase())
        );
    }, [search]);

    const currentSuggestion = suggestions[currentSuggestionIndex] ?? null;
    const currentProposal = proposals[currentProposalIndex] ?? null;

    return (
        <Card className="w-full max-w-6xl mx-auto">
            <CardHeader className="flex justify-between">
                <div className="grid gap-1.5">
                    <CardTitle className="flex items-center gap-2">
                        <Network className="size-5" />
                        Algorithm Specification
                    </CardTitle>
                    <CardDescription>
                        Pick algorithms that fit your narrative, then draft the core idea.
                    </CardDescription>
                </div>
                <div className="flex flex-col items-end">
                    <Badge variant="accent" className="flex items-center gap-1">
                        <BookOpen className="size-3" />
                        <p className="truncate max-w-108">Narrative: {narrative}</p>
                    </Badge>
                </div>
            </CardHeader>
            <CardContent className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

                    {/* Left Column */}
                    <div className="flex flex-col gap-6 lg:col-span-2 h-0 min-h-full">
                        {/* AI Suggestions */}
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <h4 className="font-medium text-sm text-foreground">AI Suggestion</h4>
                                {suggestions.length > 0 && currentSuggestion &&
                                    <div className="flex items-center gap-1">
                                        <span className="text-xs text-muted-foreground">
                                            {currentSuggestionIndex + 1} of {suggestions.length}
                                        </span>
                                        <Button
                                            variant="ghost"
                                            onClick={() => setCurrentSuggestionIndex((i) => i - 1)}
                                            disabled={currentSuggestionIndex === 0}
                                            className="size-6 p-0"
                                            aria-label="Previous suggestion"
                                        >
                                            <ChevronLeft className="size-4" />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            onClick={() => setCurrentSuggestionIndex((i) => i + 1)}
                                            disabled={currentSuggestionIndex + 1 >= suggestions.length}
                                            className="size-6 p-0"
                                            aria-label="Next starred logline"
                                        >
                                            <ChevronRight className="size-4" />
                                        </Button>
                                    </div>
                                }
                            </div>
                            {suggestions.length > 0 && (
                                <label
                                    className={`p-3 border border-border bg-muted/20 rounded-md transition-all flex items-start gap-3 cursor-pointer ${selectedAlgos.includes(currentSuggestion.id) && "border-primary border-2"}`}
                                    htmlFor={"checkBox" + currentSuggestionIndex}
                                >
                                    <input
                                        type="checkbox"
                                        id={"checkBox" + currentSuggestionIndex}
                                        className="mt-1"
                                        checked={selectedAlgos.includes(currentSuggestion.id)}
                                        onChange={(e) => {
                                            setSelectedAlgos((prev) =>
                                                e.target.checked ?
                                                    [...prev, currentSuggestion.id] :
                                                    prev.filter((id) => id !== currentSuggestion.id)
                                            );
                                        }}
                                    />
                                    <div className="space-y-1">
                                        <h5 className="text-sm font-medium">
                                            {ALGORITHM_LIBRARY.find(a => a.id === currentSuggestion.id)?.name}
                                        </h5>
                                        <p className="text-xs text-muted-foreground whitespace-pre-wrap">
                                            {currentSuggestion.narrativeJustification}
                                        </p>
                                    </div>
                                </label>
                            )}
                            <Button
                                onClick={() => suggestMutation.mutate()}
                                disabled={suggestMutation.isPending || !narrative}
                                className="w-full"
                            >
                                {suggestMutation.isPending ? (
                                    <>
                                        <Loader2 className="size-4 animate-spin" />
                                        Getting suggestions...
                                    </>
                                ) : (
                                    <>
                                        <Wand2 className="size-4" /> Suggest Algorithms
                                    </>
                                )}
                            </Button>
                        </div>

                        <Separator />

                        {/* Algorithm Library */}
                        <div className="flex flex-col gap-3 flex-1 min-h-0">
                            <div className="flex items-center justify-between">
                                <h4 className="font-medium text-sm text-foreground mr-6">Algorithm Library</h4>
                                <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" className="flex-1" />
                            </div>
                            <div className="gap-2 flex flex-col overflow-y-auto flex-1">
                                {filteredLibrary.map((a) => (
                                    <label key={a.id} className={`border border-border rounded-md p-3 cursor-pointer ${selectedAlgos.includes(a.id) && "border-primary border-2"}`}>
                                        <div className="flex items-start gap-3">
                                            <input
                                                type="checkbox"
                                                className="mt-1"
                                                checked={selectedAlgos.includes(a.id)}
                                                onChange={(e) => {
                                                    setSelectedAlgos((prev) =>
                                                        e.target.checked ? [...prev, a.id] : prev.filter((id) => id !== a.id)
                                                    );
                                                }}
                                            />
                                            <div className="space-y-1">
                                                <p className="text-sm font-medium">{a.name}</p>
                                                <p className="text-xs text-muted-foreground">{a.category} • {a.level}</p>
                                                <p className="text-xs text-muted-foreground whitespace-pre-wrap">{a.description}</p>
                                            </div>
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-6 lg:col-span-3">
                        {/* Diversification Proposals */}
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <h4 className="font-medium text-sm text-foreground">AI Proposal</h4>
                                {proposals.length > 0 && currentProposal &&
                                    <div className="flex items-center gap-1">
                                        <span className="text-xs text-muted-foreground">
                                            {currentProposalIndex + 1} of {proposals.length}
                                        </span>
                                        <Button
                                            variant="ghost"
                                            onClick={() => setCurrentProposalIndex((i) => i - 1)}
                                            disabled={currentProposalIndex === 0}
                                            className="size-6 p-0"
                                            aria-label="Previous suggestion"
                                        >
                                            <ChevronLeft className="size-4" />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            onClick={() => setCurrentProposalIndex((i) => i + 1)}
                                            disabled={currentProposalIndex + 1 >= proposals.length}
                                            className="size-6 p-0"
                                            aria-label="Next starred logline"
                                        >
                                            <ChevronRight className="size-4" />
                                        </Button>
                                    </div>
                                }
                            </div>
                            {proposals.length > 0 && (
                                <div
                                    className={`p-3 space-y-1 border border-border bg-muted/20 rounded-md transition-all cursor-pointer ${JSON.stringify(currentProposal) == JSON.stringify(finalProposal) && "border-2 border-primary"}`}
                                    onClick={() => setFinalProposal(currentProposal)}
                                >
                                    <div className="flex justify-between items-center">
                                        <h5 className="text-sm font-medium">
                                            {currentProposal.coreAlgorithm}
                                        </h5>
                                        <Badge
                                            variant={
                                                currentProposal.difficulty == "Straightforward" ? "secondary" :
                                                    currentProposal.difficulty == "Tricky" ? "accent" :
                                                        "destructive"
                                            }
                                            className="text-xs"
                                        >
                                            {currentProposal.difficulty}
                                        </Badge>
                                    </div>
                                    <p className="text-xs text-muted-foreground mr-32">
                                        {currentProposal.coreConcept}
                                    </p>

                                    <Tabs defaultValue="description" className="mt-3 bg-muted rounded-md">
                                        <TabsList className="w-full">
                                            <TabsTrigger value="description" className="text-xs h-8">Description</TabsTrigger>
                                            <TabsTrigger value="justification" className="text-xs h-8">Why It Fits</TabsTrigger>
                                            <TabsTrigger value="originality" className="text-xs h-8">Originality</TabsTrigger>
                                        </TabsList>

                                        <TabsContent value="description" className="px-3 pb-3">
                                            <p className="text-xs whitespace-pre-wrap leading-relaxed">
                                                {currentProposal.detailedDescription}
                                            </p>
                                        </TabsContent>

                                        <TabsContent value="justification" className="px-3 pb-3">
                                            <p className="text-xs whitespace-pre-wrap leading-relaxed">
                                                {currentProposal.narrativeJustification}
                                            </p>
                                        </TabsContent>

                                        <TabsContent value="originality" className="px-3 pb-3">
                                            <p className="text-xs whitespace-pre-wrap leading-relaxed">
                                                {currentProposal.originalityNotes}
                                            </p>
                                        </TabsContent>
                                    </Tabs>
                                </div>
                            )}
                            <Button
                                onClick={() => diversifyMutation.mutate()}
                                disabled={diversifyMutation.isPending || selectedAlgos.length == 0 || !narrative}
                                className="w-full"
                            >
                                {diversifyMutation.isPending ? (
                                    <>
                                        <Loader2 className="size-4 animate-spin" />
                                        Diversifying...
                                    </>
                                ) : (
                                    <>
                                        <Shuffle className="size-4" /> Diversify Into Proposals
                                    </>
                                )}
                            </Button>
                        </div>

                        <Separator />

                        {/* Final Proposal Editor */}
                        <div className="flex flex-col gap-6">
                            <h4 className="font-medium text-sm text-foreground">Final Proposal</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <Label htmlFor="coreAlgorithm">Core Algorithm</Label>
                                    <Input
                                        id="coreAlgorithm"
                                        value={finalProposal?.coreAlgorithm}
                                        onChange={(e) => setFinalProposal((p) => ({ ...p, coreAlgorithm: e.target.value }))}
                                    />
                                </div>
                                <div className="space-y-3">
                                    <Label>Difficulty</Label>
                                    <Select
                                        value={finalProposal?.difficulty}
                                        onValueChange={(e: ProblemProposal["difficulty"]) => setFinalProposal((p) => ({ ...p, difficulty: e }))}
                                    >
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select difficulty" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Straightforward">Straightforward</SelectItem>
                                            <SelectItem value="Tricky">Tricky</SelectItem>
                                            <SelectItem value="Challenging">Challenging</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-3 col-span-2">
                                    <Label htmlFor="coreConcept">Core Concept</Label>
                                    <Textarea
                                        id="coreConcept"
                                        rows={3}
                                        value={finalProposal?.coreConcept}
                                        onChange={(e) => setFinalProposal((p) => ({ ...p, coreConcept: e.target.value }))}
                                    />
                                </div>

                                <div className="space-y-3 col-span-2">
                                    <Label htmlFor="detailedDescription">Detailed Description</Label>
                                    <Textarea
                                        id="detailedDescription"
                                        rows={8}
                                        value={finalProposal?.detailedDescription}
                                        onChange={(e) => setFinalProposal((p) => ({ ...p, detailedDescription: e.target.value }))}
                                    />
                                </div>

                                <div className="space-y-3 col-span-2">
                                    <Label htmlFor="narrativeJustification">Narrative Justification</Label>
                                    <Textarea
                                        id="narrativeJustification"
                                        rows={4}
                                        value={finalProposal?.narrativeJustification}
                                        onChange={(e) => setFinalProposal((p) => ({ ...p, narrativeJustification: e.target.value }))}
                                    />
                                </div>
                                <div className="space-y-3 col-span-2">
                                    <Label htmlFor="originalityNotes">Originality Notes</Label>
                                    <Textarea
                                        id="originalityNotes"
                                        rows={4}
                                        value={finalProposal?.originalityNotes}
                                        onChange={(e) => setFinalProposal((p) => ({ ...p, originalityNotes: e.target.value }))}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Button
                    onClick={() => saveMutation.mutate()}
                    disabled={saveMutation.isPending || isRouting || selectedAlgos.length === 0 || !finalProposal?.coreAlgorithm || !finalProposal.coreConcept || !finalProposal.detailedDescription || !finalProposal.narrativeJustification || !finalProposal.originalityNotes
                    }
                    className="w-full mt-9"
                    aria-busy={saveMutation.isPending || isRouting}
                >
                    {saveMutation.isPending || isRouting ? (
                        <>
                            <Loader2 className="size-4 animate-spin" /> Saving...
                        </>
                    ) : (
                        <>
                            Next
                            <ArrowRight className="size-4" />
                        </>
                    )}
                </Button>
            </CardContent>
        </Card>
    );
}


