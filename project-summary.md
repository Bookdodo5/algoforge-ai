# Project Summary: CP Forge

## 1. High-Level Concept

**CP Forge** is an AI-assisted, human-in-the-loop web application designed for the collaborative creation of competitive programming (CP) problems. The core principle is to empower a human problem-setter by providing a highly steerable AI partner that assists at every stage of the creative process, from initial inspiration to final test case generation. The user is always in control, with the ability to edit, regenerate, or provide feedback at any step.

The project's two guiding pillars are **"Vibe"** and **"Twist"**:
*   **Vibe:** The unique authorial voice, style, and personality of the problem's narrative. The platform is designed to capture a user's personal style from an inspirational text and apply it consistently.
*   **Twist:** The novel algorithmic complication that makes a standard problem interesting. The platform has a dedicated step for brainstorming and selecting this core mechanic.

## 2. Technical Stack

*   **Frontend:** Next.js, React, Tailwind CSS, ShadCN/UI
*   **Backend:** Next.js API Routes
*   **AI Orchestration:** LangGraph (for managing the stateful, multi-step, human-in-the-loop workflow)
*   **AI Model API:** Google Gemini API
*   **Database:** MongoDB (for storing user data and the state of problem generation sessions)

## 3. The Full Problem Creation Workflow (The Nodes)

The entire application is architected as a state machine, where each "Node" represents a distinct step in the creation process. The user can loop within a node or advance to the next.

### `[Node 0: VIBE_SETUP]`
*   **Goal:** Capture the user's desired authorial voice.
*   **Input:** A piece of inspirational text from the user.
*   **Output:** A structured JSON object, the **"Authorial Voice Profile,"** which describes the input's style, tone, pacing, humor, and aesthetic, while explicitly ignoring its content.

### `[Node 1: THEME_IDEATION]`
*   **Goal:** Generate a large, diverse pool of low-specificity, computationally suggestive problem themes.
*   **Input (Implicit):** The creative direction set by the user.
*   **Output:** A list of 70+ short theme ideas (e.g., "A Network of Ghosts," "Organizing a Spice Rack").

### `[Node 2: LOGLINE_EXPANSION]`
*   **Goal:** Transform a chosen theme into a concrete scenario.
*   **Input:** A selected theme + the Voice Profile.
*   **Output:** A list of potential one-sentence "what if" loglines.

### `[Node 3: NARRATIVE_DRAFTING]`
*   **Goal:** Write the problem's flavor text.
*   **Input:** A selected logline + the Voice Profile.
*   **Output:** A draft narrative written in the specified voice.

### `[Node 4: ALGO_TARGETING]`
*   **Goal:** Select the core Computer Science concept.
*   **Input:** The narrative draft.
*   **Output:** A list of suggested base algorithms (e.g., Graphs, DP). The user makes the final decision.

### `[Node 5: THEME_TWIST_ENGINE]`
*   **Goal:** Invent the problem's novel mechanic.
*   **Input:** The narrative + the user-confirmed algorithm.
*   **Output:** A list of creative "twists" that complicate the base algorithm.

### `[Node 6: PROBLEM_FORMALIZATION]`
*   **Goal:** Write the full, unambiguous problem statement.
*   **Input:** The narrative + the selected twist.
*   **Output:** A complete draft problem statement (story, input/output, rules).

### `[Node 7: SOLUTION_OUTLINING & VALIDATION (Sub-Graph)]`
*   **Goal:** Create and validate all technical components.
*   **Process:** A sequence of AI generation and human/tool validation for:
    1.  **Tech Spec:** Solution outline, complexity, constraints, edge cases.
    2.  **Sample Testcases:** Simple, human-readable examples.
    3.  **Model Solution Code:** A correct solution in a target language.
    4.  **Testcase Generator Code:** A script to produce comprehensive test data.

### `[Node 8: FINAL_POLISHING]`
*   **Goal:** Assemble the final product.
*   **Input:** All approved artifacts.
*   **Output:** A polished problem document (e.g., Markdown/PDF) and a draft editorial.

## 4. Key Engineering Artifacts: The Master Prompts

Significant effort was dedicated to engineering two core prompts:

### Node 0 Prompt (Vibe Extraction)
*   **Purpose:** To generate the "Authorial Voice Profile" JSON from any user-provided text.
*   **Key Features:** It is designed to aggressively ignore content and analyze only style. It uses a custom schema to capture voice, stylistic tags, pacing, humor, aesthetic, etc. The prompt is heavily fortified with examples demonstrating this "style over content" behavior for inputs ranging from formal problems to Japanese light novels and internet slang.

### Node 1 Prompt (Theme Generation)
*   **Purpose:** To generate a large, diverse list of novel, computationally suggestive themes.
*   **Key Features:** It is built around several explicit rules to ensure quality:
    *   **The Originality Mandate:** Strictly forbids the AI from copying or rephrasing any examples provided in the prompt.
    *   **The CP Scope Rule:** Ensures themes are suitable for algorithms, not ML research.
    *   **The Structural Variety Mandate:** Forces diverse grammatical structures.
    *   **Comprehensive Examples:** Contains a large "Hall of Fame" of good examples and a "Forbidden Zone" of bad examples covering vagueness, clichés, over-specificity, and wrong scope.
    *   **High-Level Categorical Brainstorming:** Uses abstract structural categories (e.g., "Object Manipulation," "System with an Anomaly," "Interaction with a 'Black Box'") to force variety in the *shape* of the ideas, not just their genre.

## 5. System Architecture & Implementation Plan

*   The application will be built on a standard Next.js architecture.
*   The multi-step workflow will be managed on the backend by LangGraph. A user interaction on the frontend will trigger a step in the LangGraph graph. The graph will run one or more AI nodes, then pause and return the new state to the frontend for the next human-in-the-loop action.
*   The state of each problem generation session will be stored in a MongoDB document, likely keyed by a `generationId`. This document will mirror the structure of the LangGraph state, holding all generated artifacts (vibe profile, selected theme, narrative draft, etc.) and allowing for sessions to be paused and resumed.