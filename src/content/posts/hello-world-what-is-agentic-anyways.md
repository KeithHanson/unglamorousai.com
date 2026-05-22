---
title: "Hello World"
type: NOTE
date: 2026-05-21
tags: [agents, opinion]
excerpt: "What even is an Agent???"
banner: /images/hello-world-banner.png
bannerAlt: "Robot floating above Earth in space"
draft: false
---

Wow. I've always said I'd do this one day, and now I am finally doing it. 

So, well, hello world! If you really want to know more about what this place is about, check out [this page](/about).

But, today, I really just want to get the big topics and terminology demystified out of the gate. 

## What even is an Agent, anyways?

Here are just a FEW headlines from a casual search, provided by household names:

[Jensen Huang: Declares the Age of "Agentic AI" at CES 2025 – A Multi-Trillion-Dollar Shift in Work and Industry](https://finance.yahoo.com/news/jensen-huang-declares-age-agentic-154517698.html?guccounter=1)
> "The age of AI Agentics is here," Huang announced, describing a new wave of artificial intelligence.

[Goldman Sachs:What to Expect From AI in 2026: Personal Agents, Mega Alliances, and the Gigawatt Ceiling](https://www.goldmansachs.com/insights/articles/what-to-expect-from-ai-in-2026-personal-agents-mega-alliances)
> AI personal agents will arrive, which is something companies have been chasing with varying degrees of success. What we do now with apps—manually, and in piecemeal fashion—will be done automatically soon.  

[How AI agents will reshape every part of marketing in 2026](https://martech.org/how-ai-agents-will-reshape-every-part-of-marketing-in-2026/)
> Soon, AI agents won’t just assist customers — they’ll be the customers. So marketers need to rethink visibility in a machine-driven buying journey.

## Hypemachine: With Agentics, all things are possible

The basic interpretation is that an AI [agent](/writing/glossary#agent) is going to be able to do anything for anyone and magically fix all our business problems - and the demand for AI because of those [agentic](/writing/glossary#agentics) tools will explode. 

But... what IS an [agent](/writing/glossary#agent)?

## Fancy words for simple ideas

In my humble opinion, an [agent](/writing/glossary#agent) is any process that receives input, produces output, and uses an [AI](/writing/glossary#aiaiartificial-intelligence)/[LLM](/writing/glossary#llmlarge-language-model) in some way inside that process. 

That sounds... like every single AI deployment you've ever heard of, right? You'd be correct, again in my opinion. 

So why is the hype machine exploding at the seams to get everyone using and making [agents](/writing/glossary#agent)?

## A (very) brief history. 

This is the natural evolution for every programmer who has ever had to build an [LLM](/writing/glossary#llmlarge-language-model) chat and bake that into their application. 

Everyone is VERY excited that a tool like that could be chatted with, and then their questions might be answered!

But also just as quickly, everyone saw what ChatGPT (3 at the time) could do when provided things like python code execution - _now_ the AI wasn't just responding in natural language - it was triggering programs and execution - it was DOING things. 

## Agents are just chatbots that can DO things

So if we REALLY want to demystify this, an [Agent](/writing/glossary#agent) is a program (code) that integrates an [LLM](/writing/glossary#llmlarge-language-model) in such a way that the [LLM](/writing/glossary#llmlarge-language-model) can execute code, "run" tasks, etc. 

[LLMs](/writing/glossary#llmlarge-language-model) cannot ACTUALLY do this - they still only produce text (or images, or video, or other 'modalities'). So how do they use these "tools"?

## Function Calling Changed the Game

Everyone who was building simple chat bots remembers this announcement:

[OpenAI function calling announcement](https://openai.com/index/function-calling-and-other-api-updates/)
> Developers can now describe functions to gpt-4-0613 and gpt-3.5-turbo-0613, and have the model intelligently choose to output a JSON object containing arguments to call those functions. This is a new way to more reliably connect GPT's capabilities with external tools and APIs.

Function Calling utterly changed everything. Function calling is nothing more than a well-trained model using instructions that help it format structured output when provided a structured list of "callable tools". 

For this to work, you need an [LLM](/writing/glossary#llmlarge-language-model) that can read and write these function calls and choose when to do so, and you need a "[harness](/writing/glossary#harness)" - a term becoming popular for referring to the code that surrounds all these AI calls. 

## So, what's a harness? Is a harness an agent?

A [harness](/writing/glossary#harness) is any code or process that wraps [LLM](/writing/glossary#llmlarge-language-model) calls, typically in a loop, and provides things like tools, instructions, etc. 

Sounds pretty much like an [agent](/writing/glossary#agent)? You'd be right to assume that, in my view of the world. 

Harness Engineering is the new fancy words for everything we're talking about now, and in my view, an [Agent](/writing/glossary#agent) is just another kind of [harness](/writing/glossary#harness). 

Bringing all this together, there are a few very popular ways these Agents/Harnesses are being used. 

## Agentic Development

In general, developers who are wholesale adopting [AI](/writing/glossary#aiaiartificial-intelligence) in their workflows are using tools like [OpenCode](https://opencode.ai/), [Claude Code](https://docs.anthropic.com/en/docs/claude-code/overview), [Pi](https://pi.dev/), and other developer-focused [harnesses](/writing/glossary#harness). 

These [harnesses](/writing/glossary#harness) are purpose-built to help a developer guide [AI](/writing/glossary#aiaiartificial-intelligence) to write code, run it, test it, and deploy it. Developers taking advantage of these types of tools are generally able to produce MORE code, with many developers dubious of the quality (not this developer - there are ways to mitigate problems now today). See [Agentic Development](/writing/glossary#agentic-development) for the glossary definition.

## Purpose Built Agents

Let's say you wanted your chat bot to DO something for you - take an order, let's say. 

A purpose-built [agent](/writing/glossary#agent) would be designed to use an [Agentic Framework](/writing/glossary#agentic-framework) like [langchain](https://www.langchain.com/), [agent-core](https://aws.amazon.com/bedrock/agentcore/), or my personal favorite, [dspy](https://dspy.ai/). These [frameworks](/writing/glossary#agentic-framework) provide enough code for the developer to quickly write a workflow - more akin to basic instructions to follow: when given X input, follow Y instructions, and produce Z output. 

This is where a TON of activity is happening. You're seeing these pop into just about every experience, but you're probably not noticing them. 

For instance, now in [Amazon Connect](https://aws.amazon.com/connect/), an AWS SaaS that allows you to build the infrastructure powering your call center easily, you can allow AI to do what's called "slot filling", or what allows you to receive someone's birth date, reason for calling, first name, and last name, in a FAR better experience than dealing with the technology of yore.

Other things I've deployed are tools that allow an [AI](/writing/glossary#aiaiartificial-intelligence) to review a call's transcript, follow a complex set of rules absolutely custom to the business, and score the quality of the call.  

## But then, why is everyone saying we will have 24/7 assistants?

In other words, you have heard about [Open Claw](https://github.com/openclaw/openclaw)? 

If not, it exploded onto the internet in 2025. It allows you to have an [LLM](/writing/glossary#llmlarge-language-model) periodically be "woken up", read a "SOUL.md" markdown file, and follow the instructions. Add function calling/tools into the mix, and you have a fully autonomous [agent](/writing/glossary#agent) periodically doing things. But the headlines can show you the hypemachine in action:

[As OpenClaw enthusiasm grips China, school kids and retirees alike raise ‘lobsters’](https://www.japantimes.co.jp/business/2026/03/20/tech/china-openclaw-ai-enthusiasm/)
> Nvidia CEO Jensen Huang this week said OpenClaw is “the next ChatGPT”

> In the past month, OpenClaw, which can connect several hardware and software tools and learn ​from the data produced with much less human intervention than a chatbot, has captured the imaginations of many in China, from retirees looking for side income to AI firms ‌hoping to ‌generate new revenue streams.

## So what?

This post is long enough already, so I'll wind this down, but I could go on and on why 24/7 "lobster" AIs are a terrifically bad idea. I'll save that for another post though. 

But if you've made it this far, my hot take on all this is: Purpose-built [agents](/writing/glossary#agent), which can be tested and [evaluated](/writing/glossary#evalsevaluations), optimized, and reliably produce proper workflow outputs are what businesses _actually_ want. The reliability is really what they are after, and that is extremely difficult when you try to contain a "lobster". 

No one wants to be woken up to a nightmare for how your [agent](/writing/glossary#agent) just "decided" to delete customer data. No one wants to wake up and see that the [agent](/writing/glossary#agent) made irreversible actions happen. Most business leaders don't even want to see a single error from the [LLM](/writing/glossary#llmlarge-language-model) in our post-deterministic world, but that too is another post for another day. 

## Where to go from here?

First, thanks for making it this far. I try not to make this stuff boring, but it can be a slog if this is your first exposure to all of this. 

If you're wondering what to do instead of, say, trying to do a bunch of things with openclaw, answer these questions:

1. Is this task repeatable?
2. Can I define the inputs and outputs clearly?
3. Does this have to work properly more than 90% of the time? 

If all three of those were yes, then you need something more containable than letting loose a [harness](/writing/glossary#harness) connected to every [API](/writing/glossary#apiapplication-programmers-interface) you can control, and you can probably just have a coding [harness](/writing/glossary#harness) develop a script for you to run on a periodic cron job. 

For almost any other combination, it's easier to just have a code [harness](/writing/glossary#harness) whip out a one-off workflow for you. 

When you answer yes to those three above, then your best bet is to pick one of the excellent [agentic frameworks](/writing/glossary#agentic-framework) out there, and get to [prompt engineering](/writing/glossary#prompt-engineering), eval'ing, and optimizing to get that accuracy score up. 
