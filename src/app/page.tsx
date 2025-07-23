"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Brain, Code, Sparkles, Zap, Target, CheckCircle } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
    return (
        <div className="min-h-screen">
            <AuthButton></AuthButton>
            {/* Hero Section */}
            <section className="px-4 py-20 mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center mb-6">
                        <Brain className="w-8 h-8 mr-4" />
                        <h1 className="text-5xl font-bold">
                            AlgoForge AI
                        </h1>
                    </div>
                    <Badge variant="secondary" className="mb-4">
                        <Sparkles className="w-4 h-4 mr-2" />
                        AI-Powered Problem Creation
                    </Badge>
                    <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                        Transform your creative ideas into compelling competitive programming problems.
                        Let AI amplify your vision and craft the perfect algorithmic challenges.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Button size="lg">
                            <Sparkles className="w-5 h-5 mr-2" />
                            Start Creating
                        </Button>
                        <Button size="lg" variant="outline">
                            <Code className="w-5 h-5 mr-2" />
                            View Examples
                        </Button>
                    </div>
                </div>

                <Separator className="my-16" />

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <Card>
                        <CardHeader>
                            <div className="flex items-center gap-2 mb-4">
                                <Sparkles className="w-6 h-6" />
                                <Badge variant="outline">Creative</Badge>
                            </div>
                            <CardTitle>Creative Problem Design</CardTitle>
                            <CardDescription>
                                Start with your unique theme or story concept. Our AI transforms your creative vision into engaging algorithmic challenges.
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    <Card>
                        <CardHeader>
                            <div className="flex items-center gap-2 mb-4">
                                <Zap className="w-6 h-6" />
                                <Badge variant="outline">AI-Powered</Badge>
                            </div>
                            <CardTitle>AI-Powered Generation</CardTitle>
                            <CardDescription>
                                Advanced AI algorithms generate problem statements, test cases, and solutions that match your creative direction.
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    <Card>
                        <CardHeader>
                            <div className="flex items-center gap-2 mb-4">
                                <Target className="w-6 h-6" />
                                <Badge variant="outline">Quality</Badge>
                            </div>
                            <CardTitle>Quality Assurance</CardTitle>
                            <CardDescription>
                                Comprehensive testing and validation ensure your problems are challenging, fair, and ready for competition.
                            </CardDescription>
                        </CardHeader>
                    </Card>
                </div>

                <Separator className="my-16" />

                {/* How It Works */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-12">How It Works</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        <Card>
                            <CardContent className="pt-6">
                                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-primary-foreground font-bold text-xl">1</span>
                                </div>
                                <h3 className="font-semibold mb-2">Share Your Idea</h3>
                                <p className="text-muted-foreground text-sm">Describe your creative concept or theme</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6">
                                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-primary-foreground font-bold text-xl">2</span>
                                </div>
                                <h3 className="font-semibold mb-2">AI Enhancement</h3>
                                <p className="text-muted-foreground text-sm">AI refines and expands your concept</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6">
                                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-primary-foreground font-bold text-xl">3</span>
                                </div>
                                <h3 className="font-semibold mb-2">Generate Problem</h3>
                                <p className="text-muted-foreground text-sm">Complete problem with test cases</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6">
                                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-primary-foreground font-bold text-xl">4</span>
                                </div>
                                <h3 className="font-semibold mb-2">Polish & Deploy</h3>
                                <p className="text-muted-foreground text-sm">Review, refine, and publish</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <Separator className="my-16" />

                {/* CTA Section */}
                <div className="text-center">
                    <Card>
                        <CardContent className="p-12">
                            <h2 className="text-3xl font-bold mb-4">Ready to Forge Your First Problem?</h2>
                            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                                Join the revolution in competitive programming problem creation.
                                Where creativity meets algorithmic excellence.
                            </p>
                            <div className="flex gap-4 justify-center">
                                <Button size="lg">
                                    <CheckCircle className="w-5 h-5 mr-2" />
                                    Get Started Free
                                </Button>
                                <Button size="lg" variant="outline">
                                    Learn More
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* UI Testing Section */}
            <section className="px-4 py-20 mx-auto max-w-7xl">
                <Separator className="my-16" />

                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">UI Component Testing</h2>
                    <p className="text-muted-foreground">Test all available component variants</p>
                </div>

                {/* Button Variants */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>Button Variants</CardTitle>
                        <CardDescription>All available button styles and sizes</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex flex-wrap gap-4">
                            <Button>Default</Button>
                            <Button variant="secondary">Secondary</Button>
                            <Button variant="destructive">Destructive</Button>
                            <Button variant="outline">Outline</Button>
                            <Button variant="ghost">Ghost</Button>
                            <Button variant="link">Link</Button>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <Button size="sm">Small</Button>
                            <Button size="default">Default</Button>
                            <Button size="lg">Large</Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Badge Variants */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>Badge Variants</CardTitle>
                        <CardDescription>Different badge styles</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-4">
                            <Badge>Default</Badge>
                            <Badge variant="secondary">Secondary</Badge>
                            <Badge variant="outline">Outline</Badge>
                            <Badge variant="destructive">Destructive</Badge>
                        </div>
                    </CardContent>
                </Card>

                {/* Card Layouts */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>Card Components</CardTitle>
                        <CardDescription>Card with header, content, and different layouts</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Card with Header</CardTitle>
                                    <CardDescription>This card has a header section</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>This is the card content area.</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="pt-6">
                                    <CardTitle>Card without Header</CardTitle>
                                    <p className="mt-2">This card only has content.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </CardContent>
                </Card>

                {/* Aspect Ratio Demo */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>Aspect Ratio Component</CardTitle>
                        <CardDescription>Maintains consistent aspect ratios</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold mb-2">16:9 Aspect Ratio</h4>
                                <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
                                    <div className="flex items-center justify-center h-full">
                                        <span className="text-muted-foreground">16:9 Content</span>
                                    </div>
                                </AspectRatio>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">1:1 Aspect Ratio</h4>
                                <AspectRatio ratio={1} className="bg-muted rounded-lg">
                                    <div className="flex items-center justify-center h-full">
                                        <span className="text-muted-foreground">1:1 Content</span>
                                    </div>
                                </AspectRatio>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Separator Demo */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>Separator Component</CardTitle>
                        <CardDescription>Horizontal and vertical separators</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <p>Content above separator</p>
                            <Separator className="my-4" />
                            <p>Content below separator</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <span>Left</span>
                            <Separator orientation="vertical" className="h-4" />
                            <span>Right</span>
                        </div>
                    </CardContent>
                </Card>
            </section>
        </div>
    );
}

function AuthButton() {
    const { data: session } = useSession();

    if (session) {
        return (
            <div className="p-4 border rounded">
                <p>Signed in as {session.user?.email}</p>
                <button 
                    onClick={() => signOut()}
                    className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                    Sign out
                </button>
            </div>
        );
    }
    
    return (
        <div className="flex gap-4">
            <button 
                onClick={() => signIn("google")}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Sign in with Google
            </button>
            <button 
                onClick={() => signIn("github")}
                className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
            >
                Sign in with GitHub
            </button>
        </div>
    );
}
