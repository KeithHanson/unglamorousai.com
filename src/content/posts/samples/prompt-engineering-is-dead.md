---
title: "Prompt Engineering is dead"
type: OPINION
date: 2026-05-12
tags: [agents, tooling, opinion]
excerpt: "Stop writing 800-line system prompts. The new game is context engineering: what tools the model has, what state it sees, and when it stops talking."
draft: true
---

Look. I've spent a year shipping agents into production. I've shipped them at hospitals. I've shipped them into supply chain back-offices. I've shipped them into customer support queues at 2am on a Tuesday.

And here is what I have learned: nobody pays you for a clever prompt.

## What actually moves the needle

What moves the needle is the shape of the world the agent is allowed to touch. The tools. The retrieval surface. The escape hatches. The thing it does when it's confused.

```python
# The thing that mattered
tools = [
    search_inventory,
    file_rma,
    escalate_to_human,
]
```

That's the prompt. Everything else is decoration.
