// Sample data for UnglamorousAI

const POSTS = [
  {
    slug: "prompt-engineering-is-dead",
    title: "Prompt Engineering is dead",
    kicker: "Note",
    type: "NOTE",
    date: "2026-05-12",
    readingTime: 6,
    tags: ["agents", "tooling", "opinion"],
    excerpt:
      "Stop writing 800-line system prompts. The new game is context engineering: what tools the model has, what state it sees, and when it stops talking.",
    body: [
      { type: "p", text: "Look. I've spent a year shipping agents into production. I've shipped them at hospitals. I've shipped them into supply chain back-offices. I've shipped them into customer support queues at 2am on a Tuesday." },
      { type: "p", text: "And here is what I have learned: nobody pays you for a clever prompt." },
      { type: "h2", text: "What actually moves the needle" },
      { type: "p", text: "What moves the needle is the shape of the world the agent is allowed to touch. The tools. The retrieval surface. The escape hatches. The thing it does when it's confused." },
      { type: "code", lang: "python", text: "# The thing that mattered\ntools = [\n    search_inventory,    # bounded, indexed, fast\n    file_rma,            # gated by a human on > $500\n    escalate_to_human,   # always available\n]" },
      { type: "p", text: "That's the prompt. Everything else is decoration." },
      { type: "h2", text: "The shift" },
      { type: "p", text: "The thing we called prompt engineering in 2023 was a workaround. Models couldn't follow instructions, so we shouted at them in caps. Now they can. Now the work is upstream of the prompt: figuring out what the agent should be allowed to do, and how you know when it's done." },
      { type: "p", text: "This is unglamorous. There is no leaderboard for it. You will not get a blue checkmark for shipping a tool registry with good error messages. But it is the work." },
    ],
  },
  {
    slug: "what-is-a-claw",
    title: "What is a claw? What is an agent? What's just hype?",
    kicker: "Tutorial",
    type: "TUTORIAL",
    date: "2026-05-04",
    readingTime: 14,
    tags: ["agents", "fundamentals", "glossary"],
    excerpt:
      "A working definition of 'agent' that you can defend in a meeting with a skeptical VP, plus four things that get called agents but aren't.",
    body: [
      { type: "p", text: "Every six months somebody redefines 'agent' and the discourse resets. Let me give you a definition that has survived three production deployments." },
      { type: "callout", text: "An agent is a loop. The loop has access to tools. The loop decides when to stop." },
      { type: "p", text: "That's it. That's the whole thing. The rest is implementation detail." },
      { type: "h2", text: "Four things that get called agents but aren't" },
      { type: "p", text: "1. A chatbot with RAG. That's retrieval, not agency. The model isn't choosing anything; it's reading." },
      { type: "p", text: "2. A workflow with an LLM node. That's a graph with a clever leaf. The graph decides. The model summarises." },
      { type: "p", text: "3. A single function call. That's a tool call. One claw does not a crab make." },
      { type: "p", text: "4. A wizard with branching. That's an if statement in a trench coat." },
    ],
  },
  {
    slug: "purpose-built-agents",
    title: "How to build purpose-built AI solutions with agents",
    kicker: "Tutorial",
    type: "TUTORIAL",
    date: "2026-04-22",
    readingTime: 22,
    tags: ["agents", "production", "patterns"],
    excerpt:
      "A field manual for taking an agent from prototype to a thing that runs unattended overnight. The boring parts: retries, idempotency, audit trails.",
    body: [
      { type: "p", text: "Most agent demos are sprinters. They jog through one happy path on stage and collapse into the arms of a co-founder. Production agents are marathoners — and they look very different." },
      { type: "h2", text: "Step 1: define done" },
      { type: "p", text: "If you can't write the exit condition in one sentence, you don't have a job for an agent. You have a vibe." },
    ],
  },
  {
    slug: "the-anthropic-claude-tool-use-update",
    title: "Anthropic's new tool use schema — quietly the biggest shift this quarter",
    kicker: "Link",
    type: "LINK",
    date: "2026-05-15",
    readingTime: 3,
    tags: ["news", "tooling"],
    href: "https://example.com/anthropic-tool-use",
    excerpt:
      "Buried in a release note: tools can now declare side effects. This is the boring API change that will quietly fix half your agent loops.",
    body: [
      { type: "p", text: "Every once in a while a vendor ships an API change that doesn't trend on Twitter and quietly rewires what's possible. This is one of those." },
      { type: "p", text: "The headline: tool definitions can now carry a side_effects manifest. The model is told, ahead of time, which tools mutate state and which don't. Result: planning gets cheaper. Retries get safer. The agent stops apologising for things it didn't do." },
    ],
  },
  {
    slug: "stream-rag-vs-tools",
    title: "Live: rewriting a RAG pipeline as a tool-calling loop",
    kicker: "Stream",
    type: "STREAM",
    date: "2026-05-08",
    readingTime: 92,
    tags: ["streams", "rag", "agents"],
    excerpt:
      "Two hours, one laptop, one annoyingly real customer support corpus. We rip out the RAG and rebuild it as four tools.",
    body: [
      { type: "p", text: "Recording from the May 8 stream. Watch on the streams page." },
    ],
  },
  {
    slug: "evals-or-vibes",
    title: "Evals, or just vibes with extra steps",
    kicker: "Note",
    type: "NOTE",
    date: "2026-04-15",
    readingTime: 7,
    tags: ["evals", "opinion"],
    excerpt:
      "Most 'eval suites' in production are six prompts a tired engineer wrote in a hotel room. Here's what to do instead.",
    body: [
      { type: "p", text: "If your eval suite was written by one person in one sitting, it is not an eval suite. It is that person's vibes, fossilised." },
    ],
  },
  {
    slug: "github-cli-agent",
    title: "unglamorous/cli-agent: a 200-line agent loop you can read on one screen",
    kicker: "Link",
    type: "LINK",
    date: "2026-04-02",
    readingTime: 2,
    tags: ["repos", "agents"],
    href: "https://github.com/unglamorous/cli-agent",
    excerpt:
      "No frameworks. No abstractions. Just a while loop, a tool registry, and a stopping condition. Read it on the train.",
    body: [
      { type: "p", text: "The point of this repo is not to be a framework. The point is to be small enough to read." },
    ],
  },
  {
    slug: "context-windows-arent-the-problem",
    title: "Context windows aren't the problem you think they are",
    kicker: "Note",
    type: "NOTE",
    date: "2026-03-19",
    readingTime: 9,
    tags: ["context", "opinion"],
    excerpt:
      "Stuffing 200k tokens into the context is not a strategy. It's a tax. Here's what you actually want.",
    body: [
      { type: "p", text: "Big context windows are like big trucks. Useful sometimes. A liability most of the time." },
    ],
  },
];

const STREAMS = [
  {
    id: "s-2026-05-08",
    title: "Rewriting a RAG pipeline as a tool-calling loop",
    date: "2026-05-08",
    duration: "1h 52m",
    status: "Recording",
    description: "Two hours, one annoyingly real customer support corpus. We rip out the RAG and rebuild it as four tools.",
  },
  {
    id: "s-2026-04-24",
    title: "Reading the cli-agent repo, line by line",
    date: "2026-04-24",
    duration: "58m",
    status: "Recording",
    description: "A 200-line agent loop. We read it together. No slides, no IDE theme.",
  },
  {
    id: "s-2026-04-10",
    title: "Building an eval set that survives Monday morning",
    date: "2026-04-10",
    duration: "1h 14m",
    status: "Recording",
    description: "What goes in your eval set, what doesn't, and how to keep it from rotting.",
  },
  {
    id: "s-2026-05-22",
    title: "Office hours: ship-or-shelf review of your agent",
    date: "2026-05-22",
    duration: "tbd",
    status: "Upcoming",
    description: "Bring an agent. We'll decide together whether it ships or goes back in the drawer.",
  },
];

const COMMITS = [
  { repo: "unglamorous/cli-agent", msg: "fix: stopping condition no longer fires on empty tool list", time: "4h", sha: "a3f1c2e" },
  { repo: "unglamorous/cli-agent", msg: "docs: explain the loop in 200 words", time: "1d", sha: "b71e90a" },
  { repo: "unglamorous/evals", msg: "feat: side-effect aware test harness", time: "2d", sha: "9c4d2ab" },
  { repo: "unglamorous/cli-agent", msg: "refactor: pull tool registry into its own file", time: "3d", sha: "112f0e3" },
  { repo: "unglamorous/notes", msg: "post: prompt engineering is dead", time: "5d", sha: "ee0a8c1" },
  { repo: "unglamorous/evals", msg: "chore: rename golden -> known_good (less mystical)", time: "1w", sha: "4a8b220" },
];

const TAGS = [
  { name: "agents", count: 14 },
  { name: "tooling", count: 9 },
  { name: "evals", count: 6 },
  { name: "production", count: 5 },
  { name: "opinion", count: 8 },
  { name: "news", count: 12 },
  { name: "rag", count: 4 },
  { name: "streams", count: 7 },
  { name: "fundamentals", count: 3 },
  { name: "context", count: 4 },
];

window.UNGLAM_DATA = { POSTS, STREAMS, COMMITS, TAGS };
