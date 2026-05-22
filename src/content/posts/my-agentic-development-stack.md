---
title: "My Agentic Development Stack"
type: NOTE
date: 2026-05-22
tags: [tools, agents, opinion]
excerpt: "There are many like it, but this is mine."
draft: false
---

There are two main ways that I like to develop new software using [Frontier Models](/writing/glossary#frontier-model).

For this post, I'll stick to the high level overview for using either setup, and save the deep dive on those setups for later. 

Also, a note - if this sounds simplistic, that is a conscious choice. I do not use 10 MCPs, a giant skill library, or really much else other than what's mentioned below.

I still am typically juggling two to three agentic development sessions at a time and pushing progress faster than ever - for me.

That is fast enough for folks who hire me at least, but I readily admit that there are some absolutely cracked engineers juggling many more agents out there.

So, with that, there are many posts out there like this, but this is mine, and some of the reasoning behind my choices.

## The harness

Arguably the most important piece of any [agentic developer](/writing/glossary#agentic-development)'s kit. There are many, and there are just as many reasons to choose one over the other. 

For me, I deeply value open source code and being able to choose any model provider to connect my [harness](/writing/glossary#harness) to. If one of the providers forces higher subscription prices, or generally does something I don't want to deal with, I never want my paycheck tied to that and would rather deal with the problems that brings.

So, clearly, my only option is an open source [harness](/writing/glossary#harness), and while I love all of them, [OpenCode](https://opencode.ai/) is the clear winner for me. 

I will skip all the stuff I've done with my OpenCode setup for now, and save that for another post. 

For now, I've hooked up my OpenCode config to my Codex subscription with OpenAI. 

## The basics

First, I don't care what [harness](/writing/glossary#harness) or model you are using, the concepts that make a good engineer do good work are the same ones that make a [frontier model](/writing/glossary#frontier-model) produce good code. 

Code, as often cited on post after post on LinkedIn, is not and never was the real bottleneck. 

The real bottleneck is putting your vision into words that leave out all ambiguity. This is MUCH easier said than done.

## Create the plan

So the first thing you need to nail down is what you want done. 

There are a TON of [skills](/writing/glossary#skillsagentsmdclaudemd) that can help with this (BMAD-Method, superpowers brainstorming [skills](/writing/glossary#skillsagentsmdclaudemd), and about a hundred others I am sure). 

Personally, I find a lot of those skills heavier than I want, and slow me down too much - but if you're starting from square 0 without a lot of experience, then those methods bake in good questions into your brainstorming process, and I would highly recommend them - not just to build with but to learn from. 

So, instead of a skill, I simply describe what I want, and instruct my harness to craft a plan with options to consider, list the pros and cons of each option, and wait for my approval. 

Once you are satisfied and have beat up an idea well enough, you want to chunk that down into major milestones. 

## Why are milestones important? 

No human engineer will be able to hear your ideas, turn them into a plan, and then do all of the work in one-shot. 

Humans must break a problem down into smaller, more easily solvable chunks, and those combined solutions complete the original vision.

You do this because frequently, what the visionary and what the engineer understand are two different things!

So it is with [LLMs](/writing/glossary#llmlarge-language-model) who code for us - we must be able to give them stopping points where they verify their work, run the tests, instruct the human operator how to manually test it, etc. 

## Verify progress with your own two eyeballs

After every milestone, I generally stop the [harness](/writing/glossary#harness) from continuing, and have it tell me the exact commands I need to run to verify the progress made with my own two eyeballs. 

It's a little tongue in cheek, but I find reminding the AI that a human should be reviewing and quality gating everything helps a lot. 

## Epics and tasks

Again, to do all this, I simply tell my [harness](/writing/glossary#harness) to "Turn this approved plan into a single markdown document in the docs/ folder for reference, then create epics and task beads to track the work. Each bead must contain all the [context](/writing/glossary#context) necessary for any [AI](/writing/glossary#aiaiartificial-intelligence) to successfully implement the task, and every bead epic must have a definition of done."


As long as my tasks are very very detailed, this method often works incredibly well for me.

## Task tracking

All modern day [harnesses](/writing/glossary#harness) generally have some method they use to keep track of todos/tasks/progress. 

You can even simply have your [harness](/writing/glossary#harness) track all that via a markdown file. 

But I've found the [Beads](https://github.com/gastownhall/beads) system to be simple, pretty reliable, and easy for my [harnesses](/writing/glossary#harness) to use. 

Whichever system you choose, the important part is that your [harness](/writing/glossary#harness) has good instructions in its AGENTS.md/CLAUDE.md for how to track tasks, split tasks into epics and tasks, track dependencies between them, etc. 

## Subagents and getting it done

This sort of [prompting](/writing/glossary#prompts) and task management forces the [AI](/writing/glossary#aiaiartificial-intelligence) to compartmentalize each step of the plan well enough that it can then either do one of two things:

1. Work on it until the [context](/writing/glossary#context) size reaches the limits, and then successfully pick back up by referencing the tasks and notes there or
2. Have a [subagent](/writing/glossary#subagent) work on each task, and the session verifies each epic, stopping for human validation

The latter option is my current favorite, for lots of reasons, but mostly to limit the work to a single session that rarely deals with a [compaction](/writing/glossary#compactions), as well as containing all the patching/grepping/command output of the work into a [subagent](/writing/glossary#subagent).

I can often breeze through an entire plan this way without much pointing in the right direction.

Another time you may want to use [subagents](/writing/glossary#subagent) is when you have two things you want to do - one being some read-only-like task for analysis or planning, and another to make a quick tweak. 

The best harnesses provide a means to manage more than a single session at a time, so you can quickly spin these things out when the thought strikes.

## Observability and MLFlow

Code writing is a big part of my efforts each day, but it's rarely the most important part. 

The most important part is reviewing my [agents](/writing/glossary#agent)' activities and tweaking those [prompts](/writing/glossary#prompts) for better accuracy. 

For this, I cannot recommend enough the tool called [MLFlow](https://mlflow.org/). It has a fantastic suite of tools, but at minimum, you should be logging every [LLM](/writing/glossary#llmlarge-language-model) call as a trace. 

With a trace, you can examine all the details step by step, and for many frameworks, you have a one-liner you can add to your code to automatically observe everything.

Without being able to examine each step of your [agent](/writing/glossary#agent)'s call flow, you might as well be pulling a slot machine handle and hoping that will make your [agent](/writing/glossary#agent) more accurate.

## Evaluations - Rolling a thousand-sided die

I say slot machine almost literally - the responses from an [LLM](/writing/glossary#llmlarge-language-model) are never going to be deterministic. All outputs from any [LLM](/writing/glossary#llmlarge-language-model)-based process are going to be probabilistic - meaning by chance.

It may seem absurd, because a high percentage of the time you probably get what you want out of your own experiences with a [frontier model](/writing/glossary#frontier-model).

But if you only test your [agent](/writing/glossary#agent) flow a half dozen times, you are kidding yourself with that 100% accuracy mark.

I often joke that [LLMs](/writing/glossary#llmlarge-language-model) are like rolling a six-sided die that actually has 1000 sides, and you have no clue of the distribution of the 1-6. You need to roll it 1000 times to get an understanding of that distribution.

Those numbers are for effect when compared to the handful of tests we normally might do as developers and call something done. Don't go spinning out a trillion test runs on your 1T parameter model! :D  

The point is, you want to be able to know how often it fails, much much sooner than your deployment, and [evals](/writing/glossary#evalsevaluations) are the way to get that number.

To do that, you need to be able to run your [agent](/writing/glossary#agent) over and over with inputs that push your [agent](/writing/glossary#agent)'s capability and test the edge cases.

But also, you need to know how that [frontier model](/writing/glossary#frontier-model) is going to respond when a hundred inputs are provided to it. 

It won't always be what you expect, but how often it won't is what you need to nail down so you don't go crazy making every tiny tweak for one singular failure from someone testing. 

[Evals](/writing/glossary#evalsevaluations) provide this answer - you hammer a bunch of inputs over and over, and either use code or another [LLM](/writing/glossary#llmlarge-language-model) as a judge to decide a pass/fail for each run. 

Once you can say "88% of the time this [agent](/writing/glossary#agent) succeeds", then you can start really making certain some of those reported repeated failures don't ever happen again once reported.

## MLFlow [MCP](/writing/glossary#mcpmodel-context-protocol)

When I build an evaluation harness, I have everything wired up to MLFlow and in the output, always print the trace-id for that run. 

This means that when I am viewing the runs and deciding how to modify the agents' prompts and signatures (their input and output), I can use the MLFlow [MCP](/writing/glossary#mcpmodel-context-protocol) to look up the traces, then examine my codebase, and provide a Root Cause Analysis. 

This is fantastic when combined with sub-agents.

When you're dealing with a bunch of failure judgements in your [evals](/writing/glossary#evalsevaluations), if you output the trace-ids for the failures, your harness can then use the MLFlow [MCP](/writing/glossary#mcpmodel-context-protocol) to spin out a subagent per trace to examine everything for you.

So, while you'll be BURNING through tokens, you will get back an RCA that explains the issue clearly.

This shortens your feedback loop - from trying a new change to getting the new outputs to trying another change - and makes you much more productive when building and getting the base behavior of your agent reliable.

## Does harness/[skills](/writing/glossary#skillsagentsmdclaudemd)/[MCPs](/writing/glossary#mcpmodel-context-protocol)/language matter?

In my opinion, as of writing (May 2026), [frontier models](/writing/glossary#frontier-model) are good enough at programming, and [harnesses](/writing/glossary#harness) are good enough at working with them, that there is almost no switching cost between providers. 

You may notice quirks between the two, but most of those are easily resolved via workflow process or a better set of instructions. 

I don't think we could have said this a year ago. Claude was certainly the undisputed champ for many many practitioners. But today, it is mattering less and less for the [agentic developer](/writing/glossary#agentic-development) what provider they use, or even what [harness](/writing/glossary#harness) they use.

My advice? Use the one you're the most comfortable with. Each has their advantages and disadvantages. Each foundation model has its particular way to phrase things. Figure THAT out, learn the ins and outs of your [harness](/writing/glossary#harness), and make it your own. 

All the other systems and advice and tools are far less important than you knowing how to drive your own [harness](/writing/glossary#harness) best for you.
