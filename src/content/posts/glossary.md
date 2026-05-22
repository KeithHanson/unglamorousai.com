---
title: "Glossary"
type: NOTE
date: 2026-01-01
tags: [agents, opinion]
excerpt: "Stop #1 for demystifying the hype"
banner: /images/rtfm.png
bannerAlt: "Robot floating above Earth in space"
draft: false
---

Welcome to the glossary. I know, we have to swim through a lot of buzzwords and geekery in this site. 

But you have been warned: a fallible, opinionated human being wrote these. 

## API/Application Programmer's Interface

If this were the matrix, the API is how you jack in. 

MOST (not all) online services today provide an API - a way for my code to talk to your code. 

If your app provides weather lookup, and my app provides trip planning, you could create an API and bam - my app can now plan with weather insights.

In the context of this website, APIs will be things an AI Agent "calls" to look up information or do things, and what developers use to actually have an LLM receive a prompt and provide a response. 

## AI/Artificial Intelligence

The term "AI" has been TOTALLY abused by today's reporting. Right now, AI is equal to "ChatGPT/Claude"

But in the practitioner's sphere, AI is a blanket term for ANY artificial intelligence - from the predictive text on your SMS app to Claude. 

## ML/Machine Learning

This is the "real" stuff. If someone is "working in AI", and they're prompt engineering, that's not who I think of when I think of someone working in the ML space.

ML is the stuff of yore - the grizzled veteran tech that gave us neural networks, naive bayes classifiers for spam detection, and more. 

ML typically needs input "encoded" or transformed into numerical data or some other modality, and it produces one of several outputs. 

So, if you want a ML model for detecting a person, you'd feed it RGB and x/y pixel information, and then train it to produce a "detection" or not - "Human in picture/No human in picture".

The training itself uses lots of "labeled data" to "teach" the ML model how to produce the right outputs. 

## Weights (in relation to training)

The "weights" refer to how most ML models work on the inside.

The weights are the artificial connections between the nodes in a neural network. When this input is turned ON, the weight will determine where the ON signal will go. 

So if inputs A, B, and C are activated, then a weighted route through the neural network activates, and you get an output activation.

In simpler terms, a weight puts the thumb on the scale of an ML model. 

It makes certain routes activate in the "brain" of the model when certain inputs are given, such that we see "correct" outputs.   

## Neural Networks

Neural networks is one class of Artificial Intelligence. The idea was to try to model how neurons in the human brain work. 

In brief, neurons receive and pass electrical signals to their connected neighbor neurons. 

Eventually, an input signal is either ignored or passed all the way through to some final output. 

When we want to design a neural network, we have to design an input mechanism (maybe turn words like "nigerian prince" into numbers), activate input neurons that represent those inputs, and pass the signals through to the end of the model.

What happens in between is the "unexplainable" part of modern AI. What we want is for the output to be "spam/not spam" when those inputs activate.

To make that work when we're just passing an on/off requires the connections between neighbor neurons to be stronger or weaker. 

In other words, we want to amplify or diminish the input signal as it passes through each neuron, until the right amplifications get the right output. 

This is why the only proprietary data for modern AI models is the weights themselves. Effectively, weights amplify or diminish input signals in the "correct" way.

See the Training/Fine Tuning definition for more on how weights are generated

## NLP/Natural Language Programming

Not to be confused with the term Neuro-Linguistic Programming (psychology), Natural Language Programming is the sphere of machines understanding and producing language. 

The tech behind so much of what we use today comes from NLP advances over the decades. 

You like that full-text search in your favorite app? Likely an NLP algorithm gave it to you first. 

These were statistical and ML methods that helped provide us Google search technologies and being able to see the same search results for "glove" vs "gloves" vs "glovs".

Much is owed to this space that LLMs have taken advantage of, but it is fundamentally a different technology than what an LLM is. It is more or less the "old" way of doing things (Alexa vs Claude with voice input/output). 

## LLM/Large Language Model

LLMs can be thought of as MASSIVE neural networks, with billions and sometimes trillions of inputs, fed through many, many layers of other neurons and networks, until the next word can be produced "correctly".

Oh, I know, that is such a huge reduction I am slightly ashamed, but if the neural networks definition above helps, this will make some sense now after hearing about some new "24B parameter model". 

LLMs are largely equated with "ChatGPT/Claude" en masse, but they are actually just a single branch of machine learning models and algorithms. 

## SLM/Small Language Model

Small Language Models can almost be considered the opposite of their larger brothers, the LLMs. While LLMs want ever-increasing parameter counts, SLMs favor alternative strategies for getting more from LESS inputs.

These smaller models often suffer from inaccuracy, but they are fantastic for both experimentation as well as running on limited hardware. 

If you can prompt your way to successful outputs using an SLM, then you can fully own the hardware required for your AI integration. 

At least, this is the draw for these models - running them at the edge, as close to the human as possible (ideally on your phone). 

The other draw for them is that they can be quickly and easily Fine Tuned on commodity hardware, and run on even more limited hardware. 

This space is definitely one to watch as we see more and more capable, purpose-built SLMs emerge. 

## Training/Fine Tuning

So how DOES an LLM or ML model "learn" things, if it's just passing signals along to neighbors until we get good/bad (or the next word in the sentence, with LLMs)?

To answer that, we unfortunately have to zoom back out to what a neural network is:

a neuron with inputs and outputs, connected to none or many neighbors, and weights: putting a finger on the scale for how signals pass from neuron to neuron

When you create a new ML model, you create completely random connections between all the neurons. And each connection gets a random "weight" applied to it.

To get the right outputs, though, we need to have that neural network pass the right signals to the right places - in other words, have the right weights.

To get those correct weights, it is too laborious for a programmer to hand tune them, and would be error prone. 

So, one has to feed example after example to a model, and if it gets it wrong, then the model slightly dampens or amplifies the signals, until that example provides the correct answer.

If you do this enough times, with enough diversity in your input, you can create the correct answer across even inputs you've never seen before.  

When an LLM is trained or fine-tuned, it is fed input until it produces the "right" outputs. 

Thus, the only difference between a new model, and a trained model, and a fine-tuned model is the weights of the connections.

This is why the weights files are proprietary data for many frontier model creators, and why truly open models that share those weights are so valued.  

## Prompts

If you're reading this like I am writing it, we've finally arrived at modern "AI" - tell a chatbot what to do and wait for the response.

Prompts are the words and instructions you provide a Frontier Model - fancy talk for the stuff you write before you hit enter in ChatGPT / Grok / Claude.

When a developer writes software using an LLM, they write prompts: fancy words for instructions. 

Simple, human english sentences that provide the LLM with enough information to create a correct output. Step 1, Step 2, Step 3. 

There are different kinds of prompts - a system prompt, and a user prompt.

The System Prompt is the strongest of the two - it usually contains the instructions that MUST be followed, regardless of what the user requests in the user prompt. 

The User Prompt is where input from your user goes - the thing they're requesting of the LLM or chatting about or any other number of inputs one can feed these models.

## Prompt Engineering

It's one of my least favorite terms to have arrived in the new AI era. 

If prompts are the instructions you provide an LLM, prompt engineering is the act of crafting those prompts appropriately to get the correct output.

This means that people think one can "get good" at prompting an LLM - and anyone who spends enough time with an LLM can brute force an intuition from it, certainly. 

But humans are very bad at this. We don't know the internal weights of an LLM, we don't understand what activations can trigger others to get the words we want. 

It takes many, many runs of input to output to begin to see some form of more-than-random improvement while prompt engineering. 

What more than likely takes place in general are the new models being trained on current agentic practices, and those practices work better over time.

At the end of the day, when you call an LLM, you pass it a system prompt, and a user prompt, and it returns a response. 

Everything else is just an idea turned into these strings. Lots of frameworks make working with this back and forth API easier, but ALL of them produce this single API call.

Once you understand that one LLM turn in a conversation is just a string in and a string out, everything else is just programming (tool calls, turns, subagents) - it's all just a wrapper on strings.

## Evals/Evaluations

An eval is a simple test that a known input produces a known output reliably. 

Evals are one of the most important concept for people wanting to put real agents in production.

LLMs are basically probability machines at the end of the day. That means that you will *never* be able to guarantee that an input will produce a correct output 100% of the time. 

Evals are simply re-running a set of known inputs, and judging whether or not you got known outputs. 

Do this a statistically significant number of times, and now you can say with confidence, "92% of the time, you should see proper behavior."

If Test Driven Development pushed developers towards more reliable code, then Eval Driven Development could be a real thing in the near future for all of us doing this work.

## Optimization

Once you have enough good / bad as input and output, then you can do lots of things with that information.

Not every framework has a set of optimizers built-in, but my favorite does. Regardless, these concepts can be applied to any prompt that can be templated. 

Optimizers in the world of Prompt Engineering are all about getting a bigger, better, smarter LLM to write the prompt for a smaller, faster, dumber LLM: a teacher/student cycle.

If you know what the LLM SHOULD produce, then you can judge the output when you tweak a few words in the prompt. 

If you template your prompts (Inputs go here, Examples go here, Outputs go here), then you can reliably tweak different chunks and sections of text to experiment with the output. 

In frameworks like [DSPy](https://dspy.ai/) that provide optimization tools, once you have the labeled data, you can have the optimizer tweak your prompt hundreds or thousands of times until you get the best results from your examples.

If you can *generate* labeled examples, then you have created yourself an optimization flywheel - where the more evals you run improve your optimizations, and on and on (eventually achieving diminishing returns).  

This is generally why I believe prompt engineering is dead - let the clankers do that work for us.

## Frontier Model

A Frontier Model is the LLM driving the likes of Grok, Claude, or ChatGPT.

The companies for these models keep their weights and training data under lock and key, hoping the capabilities of their models will keep customers paying for the pleasure of calling their APIs. 

Thus far as of writing (May 2026), that's mostly held true, but local LLMs are making a strong push as far as capability this year. 

Regardless of frontier vs local, the companies that build Frontier Models spend gargantuan amounts of money on massive amounts of compute resources to build these models. 

Generally, a FM is considered the most capable model available to developers.

## Local LLM

There's nothing magic about an LLM that requires unattainable levels of resources such that we couldn't build one ourselves. 

ANY capable LLM is going to generally take serious money to build from scratch - the training cycles being the most expensive parts. 

But as with the case of Qwen and Deepseek, we are starting to see capable models that anyone can run on their machines at home. 

And now with support for running LLMs on Apple's Unified Memory, we're seeing more and more people running models locally. 

But what does it mean? 

Running a model locally means you download a file that is often gigabytes in size to your computer, run software that uses that file (the model), and allows you to chat completely offline - no APIs, no servers recording your input and output. 

It is the ultimate way to have a completely private, protected LLM that you control completely. And you don't share the resources with anyone else.

## Agentic Framework

LangChain, AgentCore, DSPy, to name a few. 

Agentic Frameworks allow developers to get out of the weeds of passing prompts back and forth over an API, and instead code behavior and logic that ultimately turn into prompts the LLM uses.

These frameworks allow a developer to pass "tools" to their agent, to have multi-turn experiences, and to do more than just receive a string and produce a string.

The ideal framework in my opinion provides a way to build an agent, a way to evaluate an agent, and a way to optimize an agent. 

Sadly, NO framework afaik provides all three, but we can easily build our own. 

## Agent

An Agent in the context of AI is some specialized LLM-powered software that accomplishes tasks or goals, either with human-in-the-loop directing it or completely autonomously. 

At its simplest, it is a programmed for-loop, with LLM calls meant to get inputs, other calls to pass input to parameters of tools, other calls to interpret the responses of those tools, and other calls to validate whether the agent is done or not.

In the world of software, a prompt is more like procedural software - run this, and it will do it in this order each time. 

An agent has more freedom to choose what to do next typically, but has explicit goals with capabilities or tools to accomplish that goal.

## Subagent

A subagent is simply an agent that is called by another agent. Harness engineering often uses this to deal with context problems. 

One agent might be considered the "supervisor", and subagents could be in charge of several things - one subagent could summarize the current issue list for the supervisor, and then the supervisor can direct another subagent to complete a single task on that list, etc. 

When you have one agent drive the overall process, and another subagent handle the work, each agent can focus on it's own context. 

If you do all of this in a single agent, then that single agent will certainly have the full context, but a lot of that input/output may be pointless for making a decision on what to do next vs getting a task done.

Subagents are great as long as you can feed them enough context to get the thing done and produce an output that the parent agent can interpret and move forward with. 

## Harness

Hm. A harness is a general software engineering term. I first heard it along with "test harness".

In software development, if you have an object you want to test, but that object lives wrapped up inside of a big app that runs a webserver and UI and...

You generally don't care about all that other stuff - you just want to make sure that the duck object quacks like a duck. 

So a developer would write a very small program that loads only that duck object and enough code to ensure the duck quacks.

Fancy talk for a simple wrapper around a thing. 

In the world of LLMs and agentic development, a harness is a "wrapper" on top of that LLM call. 

A harness in my view can be anything that makes an LLM call in a loop. 

OpenCode, Claude Code, Codex, and others are all good examples of agentic development harness - wrappers of LLMs that are custom tailored to writing, debugging, and deploying software.

## Agentic Development

This is a term I've seen pop up in the last two years. 

Those who go whole hog on the AI train are using tools like Claude Code and friends to write software for them. 

As a developer, this might sound incredibly scary - what value do we provide then?

But these tools are not one-shot fire and forget. The software development lifecycle still exists. Good planning, good testing, good feedback loops all apply here. 

Good agentic developers are building markdown files and systems of these files that provide instructions to LLMs that make it use the harness effectively, often able to juggle 2 or more projects simultaneously between sessions.

Some developers are building systems that completely automate all of the SDLC end-to-end, but this developer is not among them. 

## Agentics

A catch-all term when you need a noun for "all this". 

This encompasses everything to do with running, maintaining, building, and observing agents. 

## Skills/AGENTS.md/CLAUDE.md

Agentic development harnesses like Claude Code or OpenCode use markdown as their lingua franca. 

The files AGENTS.md/CLAUDE.md are well known locations for developer harnesses to look for core instructions to follow.

Things like how to get back up to speed on a project, commit and push procedures, what NOT to do and what TO do. These files are typically loaded every time you send a message in the harness, and the LLM uses them almost like a SYSTEM prompt.

Skills are simply more markdown files like AGENTS.md, but loaded on-demand by the developer harness when needed (how to read an excel file, how to produce a powerpoint, etc). 

## OpenAI Compatible Endpoint

ChatGPT exploded onto the scene first, and thus, they have set the standard for how developers talk to a frontier model. 

Today, there is no inference server that doesn't support the OpenAI API. 

It is a simple way to ask a server "what models are available?" and to send and receive LLM responses.

## MCP/Model Context Protocol

Claude created this standard shortly after Claude Code exploded in popularity. 

This is a simple protocol for allowing an agentic development harness, or any agent, to be told about available tools, and for the harness or agent to be able to run those tools.

At it's core is a simple idea - the harness turns on a little server in the background. It announces to the harness all of the tool names, descriptions, and parameters. 

The harness feeds those tools and descriptions and parameters into the system prompt for every LLM call. 

Now, when the LLM realizes it needs to make a new Jira ticket, it can use the Atlassian MCP server. 

The server listens for input (just like you ran it on the terminal and typed into it and hit enter) constantly. 

It receives well-formed JSON payloads (typically), parses them, calls a tool based on those LLM-generated JSON payloads, and then responds back to the harness with a JSON response.

That JSON response is then fed back to an LLM by the harness, allowing it to know that the edit tool it just called worked.

MCP servers are just one mechanism by which LLMs can call a tool.

## GPU/Graphics Processing Unit

You've probably seen NVIDIA in the news, and Jenson becoming the god of AI. 

The main reason is that LLMs and most ML techniques require lots and lots and lots of math. 

While traditional CPUs and RAM are not particularly bad at the math, graphics cards (the same ones that let you play video games) are purpose built to handle the same math that LLMs need.

On top of this, the VRAM (video RAM) connected to the GPU allows that GPU to do insanely fast calculations on huge amounts of data. 

GPUs and RAM in general is exploding in demand due to the need to run these kinds of calculations.

## Context

Context is what you give to an agent to help it understand what's going on, either in the past turns or a list of files to know about or instructions.

Context is really just prompt engineering. Everything is a string at the end of the day. 

But, when we think of Context in the realm of agentics, we are talking about what that agent needs to know to produce a proper output or achieve a goal correctly.

There are a lot of tricks and practices that make context management a full-blown "Thing". 

## Compactions

This is what an agentic developers' harness will do when it runs out of context. 

It is another kind of LLM call - it takes the entirety of the discussion, ships it off to an LLM with a prompt like "Analyze this chat, summarize the content, list the key files, tasks completed, tasks in progress, and what needs to be done next."

Compactions absolutely suck for the developer - the LLM is more or less starting from scratch. It just spent 100k tokens grepping around and finding the right files, and now, if the compaction summary doesn't contain that information, you're starting from scratch.

Context size and compactions are the major limiter in most agentic developers' progress each day. 

This is why it is so important to have good docs, good task tracking, and a good AGENTS.md/CLAUDE.md file, pointing your agent in the right direction to remind itself when a compaction annhialates it's context.

## Inference

The actual raw act of providing an LLM input, and receiving output. 

Most people aren't dealing with things at this level. 

## Tokens

If you don't really care what they are, tokens are words. 

In the world of ML, tokens are the result of encoding a sentence into the things an LLM can receive as input.

LLMs don't actually receive input as ascii characters, like what you're reading here. 

They instead turn words into symbols, or numbers, or other mechanisms, that then can be churned through an AI model. 

Tokens are also how pricing is typically measured on frontier models. 

Input tokens and output tokens are typically measured in the millions before a fee is levied. 
