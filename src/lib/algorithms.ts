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
        description: "Basic arithmetic and logical operations.",
        aiDescription: "Core mathematical and logical operations including arithmetic (+, -, *, /, %), logical operators (&&, ||, !), comparison operators (==, !=, <, >, <=, >=), and mathematical functions (sin, cos, sqrt, pow, abs, etc.). Essential for any computational problem requiring data transformation or decision-making.",
        aiUseCases: "Mathematical calculations, data transformation, conditional logic evaluation, and basic computational tasks.",
        aiKeyQuality: "Problems that need mathematical manipulation or logical decision-making without complex control structures. **WHEN THIS IS SELECTED, THE PROBLEM MUST NOT REQUIRE CONDITIONAL STATEMENT AND FLOW CONTROL.**"
    },
    {
        id: "fundamentals-control-flow",
        level: "Beginner",
        category: "Fundamentals",
        name: "Control Flow",
        description: "Conditional statements to direct program execution.",
        aiDescription: "Conditional statements like if/else, else-if chains, and switch-case statements to direct the flow of execution based on boolean conditions or value comparisons. Enables branching logic and decision-making in programs.",
        aiUseCases: "Decision-making scenarios, branching logic, data validation, and conditional processing.",
        aiKeyQuality: "Problems where different actions must be taken based on specific conditions or states. **WHEN THIS IS SELECTED, THE PROBLEM MUST NOT REQUIRE LOOPS.**"
    },
    {
        id: "fundamentals-loops",
        level: "Beginner",
        category: "Fundamentals",
        name: "Loops",
        description: "Iterative constructs for repetitive tasks.",
        aiDescription: "Iterative constructs like for loops, while loops, and do-while loops for repetitive tasks and processing sequences. Enables efficient handling of multiple items or repeated operations without code duplication.",
        aiUseCases: "Processing collections of data, repeated calculations, pattern generation, and iterative algorithms.",
        aiKeyQuality: "Problems that involve processing multiple items or performing operations repeatedly. **WHEN THIS IS SELECTED, THE PROBLEM MUST NOT REQUIRE ARRAYS AND BULK DATA STORAGE.**"
    },
    {
        id: "fundamentals-arrays",
        level: "Beginner",
        category: "Fundamentals",
        name: "Arrays",
        description: "Working with collections of elements.",
        aiDescription: "Working with arrays: storing, accessing, updating, and iterating over collections of elements. Provides indexed access to multiple values and enables efficient bulk data operations and transformations.",
        aiUseCases: "Data storage and retrieval, sequence processing, list manipulation, and collection-based algorithms.",
        aiKeyQuality: "Problems that involve managing or processing ordered collections of data where you need to store and access multiple values efficiently."
    },
    {
        id: "fundamentals-sorting",
        level: "Beginner",
        category: "Fundamentals",
        name: "Sorting",
        description: "Arranging elements in order.",
        aiDescription: "Arranging elements in order (e.g., numerically, lexicographically, or by custom criteria). Fundamental for data organization and enabling efficient algorithms that require sorted input.",
        aiUseCases: "Data organization, finding extremes, duplicate detection, and preparing data for other algorithms.",
        aiKeyQuality: "Problems where data needs to be organized or where order is important for efficient processing and subsequent operations."
    },

    // --- 2. Core Paradigms ---
    // Foundational problem-solving strategies.
    {
        id: "paradigm-brute-force",
        level: "Beginner",
        category: "Core Paradigms",
        name: "Complete Search (Brute Force)",
        description: "Exploring the entire search space to find a solution.",
        aiDescription: "Exploring the entire search space to find a solution by systematically checking all possibilities. Guarantees finding the optimal solution but may be computationally expensive for large search spaces.",
        aiUseCases: "Small-scale optimization, exhaustive enumeration, constraint satisfaction, and problems where all solutions must be considered.",
        aiKeyQuality: "Problems with limited search space where correctness and completeness are more important than efficiency, typically when the solution space is small enough to enumerate."
    },
    {
        id: "paradigm-greedy",
        level: "Intermediate",
        category: "Core Paradigms",
        name: "Greedy Algorithms",
        description: "Making locally optimal choices to find global optimum.",
        aiDescription: "Making the locally optimal choice at each step to find a global optimum. Relies on the greedy choice property where local optimality leads to global optimality, often providing efficient approximate solutions.",
        aiUseCases: "Optimization problems with optimal substructure, scheduling, resource allocation, and problems where local decisions lead to global optimality.",
        aiKeyQuality: "Problems where making the best immediate choice leads to the best overall solution, typically involving optimization with clear local decision criteria."
    },
    {
        id: "paradigm-binary-search",
        level: "Intermediate",
        category: "Core Paradigms",
        name: "Binary Search",
        description: "Efficiently searching sorted or monotonic spaces.",
        aiDescription: "Efficiently searching a sorted or monotonic space for a target or condition. Reduces search space by half in each iteration, achieving logarithmic time complexity for finding specific values or the boundary of a property.",
        aiUseCases: "Finding specific values in sorted data, optimization problems with monotonic properties, and problems where the answer lies in a searchable range.",
        aiKeyQuality: "Problems with ordered data or where the solution space has a monotonic property that allows eliminating half the search space in each step."
    },
    {
        id: "paradigm-two-pointers",
        level: "Intermediate",
        category: "Core Paradigms",
        name: "Two Pointers / Sliding Window",
        description: "Using multiple pointers to analyze sequences efficiently.",
        aiDescription: "Using multiple pointers to efficiently analyze sequences or subarrays. Includes techniques like two-pointer traversal, sliding window optimization, and maintaining dynamic ranges for optimal subarray problems.",
        aiUseCases: "Substring problems, array manipulation, range queries, and problems involving contiguous subarrays.",
        aiKeyQuality: "Problems where you need to maintain a window or range of elements and efficiently update it, often involving finding optimal subarrays or processing sequences with specific constraints."
    },
    {
        id: "paradigm-recursion-backtracking",
        level: "Intermediate",
        category: "Core Paradigms",
        name: "Recursion & Backtracking",
        description: "Breaking problems into subproblems and exploring configurations.",
        aiDescription: "Breaking problems into self-similar subproblems and exploring all configurations systematically. Uses recursive calls to explore decision trees and backtracking to undo choices when exploring alternative paths.",
        aiUseCases: "Combinatorial problems, constraint satisfaction, path finding, and problems with multiple valid solutions.",
        aiKeyQuality: "Problems where you need to explore all possible combinations or configurations systematically, often involving decision trees or state space exploration."
    },
    {
        id: "paradigm-divide-and-conquer",
        level: "Advanced",
        category: "Core Paradigms",
        name: "Divide & Conquer",
        description: "Breaking problems into independent subproblems.",
        aiDescription: "Breaking a problem into independent subproblems, solving them recursively, and combining results. Achieves efficiency by reducing problem size and leveraging the solutions of smaller instances.",
        aiUseCases: "Sorting algorithms, matrix operations, geometric problems, and problems that can be naturally divided into smaller, independent parts.",
        aiKeyQuality: "Problems that can be broken down into smaller, similar subproblems that can be solved independently and whose solutions can be efficiently combined."
    },
    {
        id: "paradigm-dp",
        level: "Intermediate",
        category: "Core Paradigms",
        name: "Dynamic Programming",
        description: "Solving complex problems by storing subproblem solutions.",
        aiDescription: "Solving complex problems by solving overlapping subproblems and storing their solutions to avoid redundant computation. Combines optimal substructure with memoization or tabulation for efficiency.",
        aiUseCases: "Optimization problems with overlapping subproblems, path finding, sequence alignment, and problems where solutions to smaller problems can be reused.",
        aiKeyQuality: "Problems with optimal substructure where solutions to subproblems are needed multiple times, allowing significant efficiency gains through caching."
    },

    // --- 3. Common Data Structures ---
    // Tools for organizing and manipulating data efficiently.
    {
        id: "ds-stack",
        level: "Intermediate",
        category: "Common Data Structures",
        name: "Stack",
        description: "A LIFO data structure for parsing and backtracking.",
        aiDescription: "A LIFO (Last-In, First-Out) data structure supporting push, pop, and peek operations. Useful for parsing, backtracking, expression evaluation, and maintaining function call history.",
        aiUseCases: "Expression evaluation, parenthesis matching, depth-first traversal, and problems requiring last-in-first-out access.",
        aiKeyQuality: "Problems where you need to process elements in reverse order of their arrival, often involving nested structures or recursive processing."
    },
    {
        id: "ds-queue",
        level: "Intermediate",
        category: "Common Data Structures",
        name: "Queue",
        description: "A FIFO data structure for BFS and simulations.",
        aiDescription: "A FIFO (First-In, First-Out) data structure supporting enqueue, dequeue, and peek operations. Essential for BFS, level-order traversal, and maintaining order in simulations or task processing.",
        aiUseCases: "Breadth-first search, level-order traversal, task scheduling, and problems requiring first-in-first-out access.",
        aiKeyQuality: "Problems where you need to process elements in the order they were added, often involving level-by-level processing or fair scheduling."
    },
    {
        id: "ds-deque",
        level: "Intermediate",
        category: "Common Data Structures",
        name: "Deque",
        description: "A double-ended queue for efficient end operations.",
        aiDescription: "A double-ended queue supporting efficient additions and removals from both ends. Combines the benefits of stacks and queues, enabling flexible access patterns for dynamic window management.",
        aiUseCases: "Sliding window problems, palindrome checking, and problems requiring efficient access to both ends of a sequence.",
        aiKeyQuality: "Problems where you need to efficiently add or remove elements from both ends of a collection, often involving dynamic window management or bidirectional processing."
    },
    {
        id: "ds-priority-queue",
        level: "Intermediate",
        category: "Common Data Structures",
        name: "Priority Queue (Heap)",
        description: "Efficiently retrieving min/max elements from a collection.",
        aiDescription: "Efficiently retrieving the min/max element from a collection using heap-based implementation. Supports logarithmic insertion and deletion while maintaining the extremal element at the top.",
        aiUseCases: "Scheduling, event processing, finding k-th largest/smallest elements, and problems requiring efficient access to extremal values.",
        aiKeyQuality: "Problems where you need to repeatedly access the minimum or maximum element in a dynamic collection, often involving priority-based processing or extremal value tracking."
    },
    {
        id: "ds-dsu",
        level: "Intermediate",
        category: "Common Data Structures",
        name: "Disjoint Set Union (DSU)",
        description: "Tracking and merging disjoint sets for connectivity.",
        aiDescription: "Tracking and merging disjoint sets with near-constant time operations using path compression and union by rank. Essential for connectivity problems and dynamic graph operations.",
        aiUseCases: "Graph connectivity, network clustering, cycle detection, and problems involving grouping and merging sets.",
        aiKeyQuality: "Problems where you need to efficiently track and merge groups or connected components, often involving dynamic connectivity queries or clustering operations."
    },
    {
        id: "ds-bst",
        level: "Advanced",
        category: "Common Data Structures",
        name: "Binary Search Trees",
        description: "Trees maintaining sorted data for efficient operations.",
        aiDescription: "Trees that maintain sorted data and allow for efficient search, insertion, and deletion in logarithmic time. Provides ordered access to elements while supporting dynamic modifications.",
        aiUseCases: "Maintaining sorted collections, range queries, order statistics, and problems requiring efficient search in dynamic data.",
        aiKeyQuality: "Problems where you need to maintain a sorted collection with efficient search and modification operations, often involving ordered data management or range-based queries."
    },
    {
        id: "ds-range-query",
        level: "Advanced",
        category: "Common Data Structures",
        name: "Range Query Structures",
        description: "Answering queries over array ranges efficiently.",
        aiDescription: "Answering queries over an array range efficiently using specialized structures like Segment Trees, Fenwick Trees, or Sparse Tables. Provides logarithmic time for both queries and updates.",
        aiUseCases: "Range sum/max/min queries, interval problems, and problems requiring efficient range operations on arrays.",
        aiKeyQuality: "Problems where you need to efficiently answer queries about ranges or intervals in an array, often involving aggregate operations over subarrays or interval-based processing."
    },

    // --- 4. Graphs ---
    // For problems modeled as networks of nodes and edges.
    {
        id: "graphs-traversal",
        level: "Intermediate",
        category: "Graphs",
        name: "Graph Traversal (BFS, DFS)",
        description: "Exploring a graph's structure systematically.",
        aiDescription: "Exploring a graph's structure using Breadth-First Search (BFS) for level-by-level exploration or Depth-First Search (DFS) for recursive exploration. Foundational for many other graph algorithms and connectivity analysis.",
        aiUseCases: "Graph exploration, connectivity testing, cycle detection, and problems modeled as networks.",
        aiKeyQuality: "Problems that can be modeled as a network of connected nodes where you need to explore relationships, often involving connectivity analysis or systematic graph exploration."
    },
    {
        id: "graphs-shortest-path",
        level: "Intermediate",
        category: "Graphs",
        name: "Shortest Paths",
        description: "Finding minimum cost paths in graphs.",
        aiDescription: "Finding minimum cost paths using algorithms like Dijkstra's (for non-negative weights), Bellman-Ford (for negative weights), or Floyd-Warshall (for all pairs). Essential for optimization problems with distance constraints.",
        aiUseCases: "Navigation, network routing, optimization problems with distance/cost constraints, and problems requiring finding optimal paths.",
        aiKeyQuality: "Problems where you need to find the best path between points with associated costs or distances, often involving optimization with path-based constraints."
    },
    {
        id: "graphs-mst",
        level: "Intermediate",
        category: "Graphs",
        name: "Minimum Spanning Tree (MST)",
        description: "Finding minimum weight subgraphs connecting all vertices.",
        aiDescription: "Finding a minimum weight subgraph that connects all vertices using algorithms like Kruskal's or Prim's. Provides the most efficient way to connect all nodes while minimizing total cost.",
        aiUseCases: "Network design, clustering, and problems requiring connecting all points with minimum total cost.",
        aiKeyQuality: "Problems where you need to connect all nodes with minimum total cost while ensuring connectivity, often involving network optimization or clustering with cost constraints."
    },
    {
        id: "graphs-topological-sort",
        level: "Intermediate",
        category: "Graphs",
        name: "Topological Sort",
        description: "Linearly ordering a DAG based on dependencies.",
        aiDescription: "Linearly ordering a Directed Acyclic Graph based on dependencies using DFS or Kahn's algorithm. Ensures that all dependencies are satisfied before processing dependent items.",
        aiUseCases: "Task scheduling, build systems, dependency resolution, and problems with precedence constraints.",
        aiKeyQuality: "Problems where you have dependencies between items and need to find a valid ordering that respects all precedence constraints."
    },
    {
        id: "graphs-connectivity",
        level: "Advanced",
        category: "Graphs",
        name: "Connectivity",
        description: "Finding bridges, articulation points, and connected components.",
        aiDescription: "Finding bridges, articulation points, or Strongly Connected Components using algorithms like Tarjan's or Kosaraju's. Critical for analyzing network robustness and identifying failure points.",
        aiUseCases: "Network reliability analysis, critical path identification, and problems involving graph robustness.",
        aiKeyQuality: "Problems where you need to identify critical connections or analyze network vulnerability, often involving reliability analysis or critical component identification."
    },
    {
        id: "graphs-flows-matching",
        level: "Advanced",
        category: "Graphs",
        name: "Flows & Matching",
        description: "Modeling networks for maximum flow or optimal pairings.",
        aiDescription: "Modeling networks to find maximum flow using Ford-Fulkerson or optimal bipartite matching using Hungarian algorithm. Solves resource allocation and assignment problems efficiently.",
        aiUseCases: "Resource allocation, assignment problems, network capacity planning, and problems requiring optimal matching.",
        aiKeyQuality: "Problems where you need to maximize flow through a network or find optimal assignments between two sets, often involving resource optimization or assignment optimization."
    },

    // --- 5. Mathematics & Geometry ---
    // For problems rooted in mathematical or geometric concepts.
    {
        id: "math-combinatorics",
        level: "Intermediate",
        category: "Mathematics & Geometry",
        name: "Combinatorics",
        description: "Counting techniques for permutations and combinations.",
        aiDescription: "Counting techniques involving permutations, combinations, inclusion-exclusion principle, and generating functions. Provides systematic approaches to counting complex arrangements and selections.",
        aiUseCases: "Probability calculations, counting problems, and problems involving arrangements or selections.",
        aiKeyQuality: "Problems where you need to count the number of possible arrangements, selections, or outcomes, often involving systematic enumeration or probability calculations."
    },
    {
        id: "math-number-theory-basics",
        level: "Advanced",
        category: "Mathematics & Geometry",
        name: "Number Theory: Primes & Divisibility",
        description: "Algorithms for primality testing and factorization.",
        aiDescription: "Algorithms for primality testing (Sieve of Eratosthenes), factorization, GCD, LCM, and modular arithmetic. Essential for cryptographic applications and mathematical problem-solving.",
        aiUseCases: "Cryptography, mathematical puzzles, and problems involving prime numbers or divisibility.",
        aiKeyQuality: "Problems where you need to work with prime numbers, factors, or divisibility properties, often involving mathematical optimization or cryptographic applications."
    },
    {
        id: "math-number-theory-modular",
        level: "Advanced",
        category: "Mathematics & Geometry",
        name: "Number Theory: Modular Arithmetic",
        description: "Operations in modular systems and congruence.",
        aiDescription: "Operations in modular systems, including modular inverse, fast exponentiation, Chinese Remainder Theorem, and Fermat's Little Theorem. Critical for cryptographic algorithms and cyclic problems.",
        aiUseCases: "Cryptography, cyclic problems, and problems involving periodic patterns or modular constraints.",
        aiKeyQuality: "Problems where you need to work with remainders or cyclic patterns, often involving cryptographic operations or periodic behavior analysis."
    },
    {
        id: "math-geometry-primitives",
        level: "Intermediate",
        category: "Mathematics & Geometry",
        name: "Geometry: Basics",
        description: "Working with points, lines, and basic geometric shapes.",
        aiDescription: "Working with points, lines, segments, coordinates, and polygons. Includes orientation tests, distances, angles, line segment intersection, and basic geometric calculations.",
        aiUseCases: "Spatial problems, collision detection, and problems involving geometric relationships.",
        aiKeyQuality: "Problems where you need to work with spatial relationships or geometric objects, often involving coordinate-based calculations or spatial analysis."
    },
    {
        id: "math-geometry-convex-hull",
        level: "Advanced",
        category: "Mathematics & Geometry",
        name: "Geometry: Convex Hull",
        description: "Finding the smallest convex polygon containing points.",
        aiDescription: "Finding the smallest convex polygon containing a set of points using algorithms like Graham scan or Monotone Chain. Essential for computational geometry and boundary analysis.",
        aiUseCases: "Computational geometry, boundary finding, and problems involving enclosing regions.",
        aiKeyQuality: "Problems where you need to find the boundary or envelope of a set of points, often involving spatial analysis or boundary optimization."
    },
    {
        id: "math-geometry-sweep-line",
        level: "Advanced",
        category: "Mathematics & Geometry",
        name: "Geometry: Sweep-Line",
        description: "Algorithmic paradigm for geometric intersection problems.",
        aiDescription: "An algorithmic paradigm for geometric problems, often used for finding intersections, closest pair, or processing geometric events in sorted order. Reduces dimensionality of geometric problems.",
        aiUseCases: "Geometric intersection problems, range searching, and problems involving spatial events.",
        aiKeyQuality: "Problems where you need to process geometric events in a specific order, often involving intersection detection or spatial event processing."
    },

    // --- 6. Strings ---
    // For problems focused on analyzing and manipulating text.
    {
        id: "strings-hashing",
        level: "Intermediate",
        category: "Strings",
        name: "String Hashing",
        description: "Using rolling hashes for efficient substring comparison.",
        aiDescription: "Using rolling hashes to efficiently compare and find substrings with constant time operations. Enables fast substring matching and pattern detection in large texts.",
        aiUseCases: "String matching, plagiarism detection, and problems involving substring comparisons.",
        aiKeyQuality: "Problems where you need to efficiently compare or find substrings in text, often involving pattern matching or text analysis with performance constraints."
    },
    {
        id: "strings-kmp",
        level: "Advanced",
        category: "Strings",
        name: "Pattern Matching (KMP, Z-Algo)",
        description: "Efficiently finding pattern occurrences in text.",
        aiDescription: "Efficiently finding occurrences of a pattern within a text using algorithms like Knuth-Morris-Pratt (KMP) or Z-algorithm. Provides linear time pattern matching with preprocessing.",
        aiUseCases: "Text search, DNA sequence analysis, and problems involving pattern recognition in strings.",
        aiKeyQuality: "Problems where you need to find all occurrences of a pattern in a text efficiently, often involving exact string matching or pattern recognition."
    },
    {
        id: "strings-suffix",
        level: "Advanced",
        category: "Strings",
        name: "Suffix Structures",
        description: "Data structures for complex string queries.",
        aiDescription: "Data structures on string suffixes for complex queries using Suffix Arrays, Suffix Trees, or Suffix Automata. Enables efficient substring search and advanced string analysis.",
        aiUseCases: "Advanced string processing, bioinformatics, and problems requiring complex string queries.",
        aiKeyQuality: "Problems where you need to answer complex queries about string suffixes or substrings, often involving advanced text analysis or bioinformatics applications."
    },
    {
        id: "ds-trie",
        level: "Advanced",
        category: "Strings",
        name: "Trie (Prefix Tree)",
        description: "A tree for efficient string storage and retrieval.",
        aiDescription: "A tree for efficient storage and retrieval of a dynamic set of strings, enabling fast prefix-based queries and autocomplete functionality.",
        aiUseCases: "Autocomplete, spell checking, and problems involving prefix-based queries.",
        aiKeyQuality: "Problems where you need to efficiently store and query strings based on their prefixes, often involving dictionary operations or prefix-based search."
    },


    // --- 7. Specialized Techniques ---
    // Other important, but more niche, topics.
    {
        id: "tech-bit-manipulation",
        level: "Intermediate",
        category: "Specialized Techniques",
        name: "Bit Manipulation",
        description: "Using bitwise operators for efficient computation.",
        aiDescription: "Using bitwise operators for efficient computation, often for subsets and states (bitmask). Enables compact representation of sets and efficient bit-level operations.",
        aiUseCases: "Subset generation, state compression, and problems involving binary representations.",
        aiKeyQuality: "Problems where you need to efficiently represent or manipulate binary states or subsets, often involving state compression or bit-level optimization."
    },
    {
        id: "tech-game-theory",
        level: "Advanced",
        category: "Specialized Techniques",
        name: "Game Theory",
        description: "Analyzing strategic games for winning strategies.",
        aiDescription: "Analyzing strategic games to find winning strategies using concepts like Nim, Sprague-Grundy theorem, and optimal play analysis. Determines optimal strategies in competitive scenarios.",
        aiUseCases: "Competitive games, strategic decision-making, and problems involving optimal play.",
        aiKeyQuality: "Problems where you need to determine optimal strategies in competitive scenarios, often involving two-player games or strategic decision analysis."
    },
    {
        id: "tech-meet-in-the-middle",
        level: "Advanced",
        category: "Specialized Techniques",
        name: "Meet-in-the-Middle",
        description: "Splitting problems into two halves for exponential problems.",
        aiDescription: "A search technique that splits a problem into two halves, solving them independently and combining the results. Effective for exponential time problems by reducing the search space significantly.",
        aiUseCases: "Subset sum, large-scale search problems, and problems where the search space is too large for brute force.",
        aiKeyQuality: "Problems where the search space is exponential but can be divided into manageable halves, often involving large-scale enumeration or search optimization."
    },
    {
        id: "tech-sqrt-decomposition",
        level: "Advanced",
        category: "Specialized Techniques",
        name: "Square Root Decomposition",
        description: "Breaking arrays into sqrt(N) blocks for range queries.",
        aiDescription: "A technique for breaking an array into blocks of size sqrt(N) to answer range queries in O(sqrt(N)). Balances query and update efficiency for range operations.",
        aiUseCases: "Range queries, array updates, and problems requiring efficient range operations.",
        aiKeyQuality: "Problems where you need to balance query and update efficiency for range operations, often involving array-based range queries with mixed query and update patterns."
    },
    {
        id: "tech-heavy-light",
        level: "Advanced",
        category: "Specialized Techniques",
        name: "Heavy-Light Decomposition",
        description: "Efficiently processing path queries on trees.",
        aiDescription: "A technique for efficiently processing path queries on a tree by decomposing it into heavy and light edges. Enables logarithmic time path operations on trees.",
        aiUseCases: "Tree path queries, dynamic tree problems, and problems involving tree traversal with updates.",
        aiKeyQuality: "Problems where you need to efficiently answer queries about paths in a tree, often involving tree-based path analysis or dynamic tree operations."
    },
    {
        id: "tech-fpt",
        level: "Expert",
        category: "Specialized Techniques",
        name: "Fixed-Parameter Tractability (FPT)",
        description: "Efficient algorithms for small parameter values.",
        aiDescription: "Algorithms that are efficient for small values of a chosen parameter, even if the overall problem is hard. Parameterized by treewidth, solution size, or other bounded parameters.",
        aiUseCases: "NP-hard problems with small parameters, and problems where a specific parameter is bounded.",
        aiKeyQuality: "Problems that are theoretically hard but have a small parameter that can be exploited, often involving NP-hard problems with bounded parameters."
    },
    {
        id: "tech-randomized",
        level: "Advanced",
        category: "Specialized Techniques",
        name: "Randomized Algorithms",
        description: "Using randomness for good expected performance.",
        aiDescription: "Algorithms that use random choices to achieve good expected performance or simplicity, including randomized quicksort, Monte Carlo methods, and Las Vegas algorithms.",
        aiUseCases: "Approximation algorithms, probabilistic problems, and problems where randomness can improve efficiency.",
        aiKeyQuality: "Problems where introducing randomness can lead to better average-case performance, often involving approximation algorithms or probabilistic optimization."
    },
    {
        id: "tech-centroid-decomposition",
        level: "Expert",
        category: "Specialized Techniques",
        name: "Centroid Decomposition",
        description: "Divide and conquer technique for tree problems.",
        aiDescription: "A divide and conquer technique for problems on trees, breaking the tree down via its centroids. Enables efficient processing of tree-based problems by recursive decomposition.",
        aiUseCases: "Tree path problems, dynamic tree algorithms, and problems requiring efficient tree decomposition.",
        aiKeyQuality: "Problems on trees where you need to efficiently process paths or decompose the tree structure, often involving tree-based optimization or path analysis."
    },
    {
        id: "tech-persistent-ds",
        level: "Expert",
        category: "Specialized Techniques",
        name: "Persistent Data Structures",
        description: "Data structures preserving previous versions.",
        aiDescription: "Data structures where previous versions are preserved after modification, enabling access to historical states. Useful for version control and temporal querying.",
        aiUseCases: "Version control, temporal queries, and problems requiring access to historical data states.",
        aiKeyQuality: "Problems where you need to maintain and query multiple versions of data, often involving version control or temporal data analysis."
    }
] as const;