/**
 * The definitive library of algorithms and techniques for AlgoForge.
 * This list is curated for creative ideation, organized into conceptual domains
 * and paradigms to guide a human problem-setter in selecting a problem's core mechanic.
 */
export const ALGORITHM_LIBRARY = [
    // --- 1. Fundamentals ---
    // The absolute basics required for almost any problem.
    {
        id: "fundamentals-expressions",
        level: "Beginner",
        category: "Fundamentals",
        name: "Expressions & Operators",
        description: "Basic arithmetic (+, -, *, /, %), logical (&&, ||, !), and math functions (sin, cos, sqrt, etc.) operators. NO CONTROL FLOWS ARE REQUIRED."
    },
    {
        id: "fundamentals-control-flow",
        level: "Beginner",
        category: "Fundamentals",
        name: "Control Flow",
        description: "Conditional statements like if/else and switch-case to direct the flow of execution. NO LOOPS ARE REQUIRED."
    },
    {
        id: "fundamentals-loops",
        level: "Beginner",
        category: "Fundamentals",
        name: "Loops",
        description: "Iterative constructs like for and while loops for repetitive tasks. NO ARRAYS ARE REQUIRED."
    },
    {
        id: "fundamentals-arrays",
        level: "Beginner",
        category: "Fundamentals",
        name: "Arrays",
        description: "Working with arrays: storing, accessing, updating, and iterating over collections of elements."
    },
    {
        id: "fundamentals-sorting",
        level: "Beginner",
        category: "Fundamentals",
        name: "Sorting",
        description: "Arranging elements in order (e.g., numerically, lexicographically)."
    },

    // --- 2. Core Paradigms ---
    // Foundational problem-solving strategies.
    {
        id: "paradigm-brute-force",
        level: "Beginner",
        category: "Core Paradigms",
        name: "Complete Search (Brute Force)",
        description: "Exploring the entire search space to find a solution."
    },
    {
        id: "paradigm-greedy",
        level: "Intermediate",
        category: "Core Paradigms",
        name: "Greedy Algorithms",
        description: "Making the locally optimal choice at each step to find a global optimum."
    },
    {
        id: "paradigm-binary-search",
        level: "Intermediate",
        category: "Core Paradigms",
        name: "Binary Search",
        description: "Efficiently searching a sorted or monotonic space for a target or condition."
    },
    {
        id: "paradigm-two-pointers",
        level: "Intermediate",
        category: "Core Paradigms",
        name: "Two Pointers / Sliding Window",
        description: "Using multiple pointers to efficiently analyze sequences or subarrays."
    },
    {
        id: "paradigm-recursion-backtracking",
        level: "Intermediate",
        category: "Core Paradigms",
        name: "Recursion & Backtracking",
        description: "Breaking problems into self-similar subproblems and exploring all configurations."
    },
    {
        id: "paradigm-divide-and-conquer",
        level: "Advanced",
        category: "Core Paradigms",
        name: "Divide & Conquer",
        description: "Breaking a problem into independent subproblems, solving them, and combining results."
    },
    {
        id: "paradigm-dp",
        level: "Intermediate",
        category: "Core Paradigms",
        name: "Dynamic Programming",
        description: "Solving complex problems by solving overlapping subproblems and storing their solutions."
    },

    // --- 3. Common Data Structures ---
    // Tools for organizing and manipulating data efficiently.
    {
        id: "ds-stack",
        level: "Intermediate",
        category: "Common Data Structures",
        name: "Stack",
        description: "A LIFO (Last-In, First-Out) data structure. Useful for parsing, backtracking, and expression evaluation."
    },
    {
        id: "ds-queue",
        level: "Intermediate",
        category: "Common Data Structures",
        name: "Queue",
        description: "A FIFO (First-In, First-Out) data structure. Essential for BFS and simulations."
    },
    {
        id: "ds-deque",
        level: "Intermediate",
        category: "Common Data Structures",
        name: "Deque",
        description: "A double-ended queue supporting efficient additions and removals from both ends."
    },
    {
        id: "ds-priority-queue",
        level: "Intermediate",
        category: "Common Data Structures",
        name: "Priority Queue (Heap)",
        description: "Efficiently retrieving the min/max element from a collection."
    },
    {
        id: "ds-dsu",
        level: "Intermediate",
        category: "Common Data Structures",
        name: "Disjoint Set Union (DSU)",
        description: "Tracking and merging disjoint sets, common in connectivity problems."
    },
    {
        id: "ds-bst",
        level: "Advanced",
        category: "Common Data Structures",
        name: "Binary Search Trees",
        description: "Trees that maintain sorted data and allow for efficient search, insertion, and deletion."
    },
    {
        id: "ds-range-query",
        level: "Advanced",
        category: "Common Data Structures",
        name: "Range Query Structures",
        description: "Answering queries over an array range (e.g., Segment Tree, Fenwick Tree)."
    },

    // --- 4. Domain: Graphs ---
    // For problems modeled as networks of nodes and edges.
    {
        id: "graphs-traversal",
        level: "Intermediate",
        category: "Domain: Graphs",
        name: "Graph Traversal (BFS, DFS)",
        description: "Exploring a graph's structure. Foundational for many other graph algorithms."
    },
    {
        id: "graphs-shortest-path",
        level: "Intermediate",
        category: "Domain: Graphs",
        name: "Shortest Paths",
        description: "Finding minimum cost paths (e.g., Dijkstra, Bellman-Ford, Floyd-Warshall)."
    },
    {
        id: "graphs-mst",
        level: "Intermediate",
        category: "Domain: Graphs",
        name: "Minimum Spanning Tree (MST)",
        description: "Finding a minimum weight subgraph that connects all vertices (e.g., Kruskal's, Prim's)."
    },
    {
        id: "graphs-topological-sort",
        level: "Intermediate",
        category: "Domain: Graphs",
        name: "Topological Sort",
        description: "Linearly ordering a Directed Acyclic Graph based on dependencies."
    },
    {
        id: "graphs-connectivity",
        level: "Advanced",
        category: "Domain: Graphs",
        name: "Connectivity",
        description: "Finding bridges, articulation points, or Strongly Connected Components."
    },
    {
        id: "graphs-flows-matching",
        level: "Advanced",
        category: "Domain: Graphs",
        name: "Flows & Matching",
        description: "Modeling networks to find maximum flow or optimal pairings."
    },

    // --- 5. Domain: Mathematics & Geometry ---
    // For problems rooted in mathematical or geometric concepts.
    {
        id: "math-combinatorics",
        level: "Intermediate",
        category: "Domain: Mathematics & Geometry",
        name: "Combinatorics",
        description: "Counting techniques involving permutations, combinations, and inclusion-exclusion."
    },
    {
        id: "math-number-theory-basics",
        level: "Advanced",
        category: "Domain: Mathematics & Geometry",
        name: "Number Theory: Primes & Divisibility",
        description: "Algorithms for primality testing (Sieve of Eratosthenes), factorization, GCD, and LCM."
    },
    {
        id: "math-number-theory-modular",
        level: "Advanced",
        category: "Domain: Mathematics & Geometry",
        name: "Number Theory: Modular Arithmetic",
        description: "Operations in modular systems, including modular inverse, exponentiation, and the Chinese Remainder Theorem."
    },
    {
        id: "math-geometry-primitives",
        level: "Intermediate",
        category: "Domain: Mathematics & Geometry",
        name: "Geometry: Basics",
        description: "Working with points, lines, segments, coordinates, and polygons. Includes orientation tests, distances, angles, and line segment intersection."
    },
    {
        id: "math-geometry-convex-hull",
        level: "Advanced",
        category: "Domain: Mathematics & Geometry",
        name: "Geometry: Convex Hull",
        description: "Finding the smallest convex polygon containing a set of points (e.g., Graham scan, Monotone Chain)."
    },
    {
        id: "math-geometry-sweep-line",
        level: "Advanced",
        category: "Domain: Mathematics & Geometry",
        name: "Geometry: Sweep-Line",
        description: "An algorithmic paradigm for geometric problems, often used for finding intersections (e.g., closest pair)."
    },

    // --- 6. Domain: Strings ---
    // For problems focused on analyzing and manipulating text.
    {
        id: "strings-hashing",
        level: "Intermediate",
        category: "Domain: Strings",
        name: "String Hashing",
        description: "Using rolling hashes to efficiently compare and find substrings."
    },
    {
        id: "strings-kmp",
        level: "Advanced",
        category: "Domain: Strings",
        name: "Pattern Matching (KMP, Z-Algo)",
        description: "Efficiently finding occurrences of a pattern within a text."
    },
    {
        id: "strings-suffix",
        level: "Advanced",
        category: "Domain: Strings",
        name: "Suffix Structures",
        description: "Data structures on string suffixes for complex queries (e.g., Suffix Array/Trie)."
    },
    {
        id: "ds-trie",
        level: "Advanced",
        category: "Domain: Strings",
        name: "Trie (Prefix Tree)",
        description: "A tree for efficient storage and retrieval of a dynamic set of strings."
    },


    // --- 7. Specialized Techniques ---
    // Other important, but more niche, topics.
    {
        id: "tech-bit-manipulation",
        level: "Intermediate",
        category: "Specialized Techniques",
        name: "Bit Manipulation",
        description: "Using bitwise operators for efficient computation, often for subsets and states (bitmask)."
    },
    {
        id: "tech-game-theory",
        level: "Advanced",
        category: "Specialized Techniques",
        name: "Game Theory",
        description: "Analyzing strategic games to find winning strategies (e.g., Nim, Sprague-Grundy)."
    },
    {
        id: "tech-meet-in-the-middle",
        level: "Advanced",
        category: "Specialized Techniques",
        name: "Meet-in-the-Middle",
        description: "A search technique that splits a problem into two halves, solving them independently and combining the results. Effective for exponential time problems."
    },
    {
        id: "tech-sqrt-decomposition",
        level: "Advanced",
        category: "Specialized Techniques",
        name: "Square Root Decomposition",
        description: "A technique for breaking an array into blocks of size sqrt(N) to answer range queries in O(sqrt(N))."
    },
    {
        id: "tech-heavy-light",
        level: "Advanced",
        category: "Specialized Techniques",
        name: "Heavy-Light Decomposition",
        description: "A technique for efficiently processing path queries on a tree."
    },
    {
        id: "tech-fpt",
        level: "Expert",
        category: "Specialized Techniques",
        name: "Fixed-Parameter Tractability (FPT)",
        description: "Algorithms that are efficient for small values of a chosen parameter, even if the overall problem is hard (e.g., parameterized by treewidth or solution size)."
    },
    {
        id: "tech-randomized",
        level: "Advanced",
        category: "Specialized Techniques",
        name: "Randomized Algorithms",
        description: "Algorithms that use random choices to achieve good expected performance or simplicity (e.g., randomized quicksort, Monte Carlo, Las Vegas)."
    },
    {
        id: "tech-centroid-decomposition",
        level: "Expert",
        category: "Specialized Techniques",
        name: "Centroid Decomposition",
        description: "A divide and conquer technique for problems on trees, breaking the tree down via its centroids."
    },
    {
        id: "tech-persistent-ds",
        level: "Expert",
        category: "Specialized Techniques",
        name: "Persistent Data Structures",
        description: "Data structures where previous versions are preserved after modification. Useful for querying historical states."
    }
] as const;