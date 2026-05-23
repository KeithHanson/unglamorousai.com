---
title: "AI wants to be local"
type: OPINION
date: 2026-05-23
tags: [agents, opinion]
excerpt: "Models themselves aren't the moat. Capable local LLMs are here, and this is the worst they'll ever be."
draft: false
---

What do I mean by the clickbaity title, "AI wants to be local"?

In my world, remote is usually talking about a system on the internet that I am communicating with. 

Local means it is running on *my* device. 

## What is the value provided by the [Frontier Model](/writing/glossary#frontier-model) companies?

Arguably, the largest value proposition of any of the [Frontier Model](/writing/glossary#frontier-model) companies is the obvious one: the [LLM](/writing/glossary#llmlarge-language-model). 

The proprietary training, weights, and the model inference infrastructure itself.

There are a LOT of other value propositions that Anthropic, Grok, Open AI, and Gemini provide - but all of those other value propositions rely on their [LLM](/writing/glossary#llmlarge-language-model).

The *other* value propositions are becoming more and more important for these companies - we see it most with Anthropic. 

Anthropic is building a walled garden of vendor lock-in, creating the entire infrastructure for their [agents](/writing/glossary#agent) to operate within. 

But, I digress. That is a post for another time. 

## Where is the value of an [LLM](/writing/glossary#llmlarge-language-model)?

Ah. The existential stuff already? Ok. 

The largest market right now for [LLM](/writing/glossary#llmlarge-language-model) usage fees are software developers. Hands down, by far, those of us burning [tokens](/writing/glossary#tokens) every day (and thus paying the companies for that privilege) are software developers.

The other heavy users that are starting to trend upwards are analysts, researchers, and people like creators who run multiple loops or 24/7 research bots (see [good night have fun](https://github.com/kunchenguid/gnhf)) to get to their conclusions.

Ignoring my obvious heavy bias, we'll focus on developers.

## An [LLM](/writing/glossary#llmlarge-language-model) takes in strings, and returns strings.

As a developer, is the [LLM](/writing/glossary#llmlarge-language-model) the value? Not at all. I can't code with an [LLM](/writing/glossary#llmlarge-language-model). An [LLM](/writing/glossary#llmlarge-language-model) can only receive and emit strings. Not useful.

The [harness](/writing/glossary#harness) itself is the value for me - it is the arms and legs of the [LLM](/writing/glossary#llmlarge-language-model). It can do the things I want done. It turns strings that represent a tool the [LLM](/writing/glossary#llmlarge-language-model) wants to call, and calls the tool. That's the job of the [harness](/writing/glossary#harness) - turn strings into actions.

So very, very quickly, for one of the heaviest power users and loyal subscribers, the LLM becomes entirely secondary (though still critical since, without it, these companies wouldn't have ANY differentiation other than their tools).

Using OpenCode, switching between models has literally zero switching cost. I type /models, hit enter, select another model, and keep going. 

## Where's the moat?

How in the world are these companies going to continue differentiating when:

1. There are open source alternatives that can do everything their tools can do
1. There are open source models that are getting better and better

The shortest answer, since there's a whole post I could write about how these emperors have no clothes, is that there isn't any moat.

The only real moat right now is the developer opinion on the quality of the code that an [LLM](/writing/glossary#llmlarge-language-model) produces, and vendor lock-in. 

But this post isn't about moats or vendor lock-in. This post is about [Local LLMs](/writing/glossary#local-llm). 

## No moat. So why doesn't everyone build a [Frontier Model](/writing/glossary#frontier-model)?

There are a LOT of people doing just that. The limiting factor is generally the money required to rent or buy GPUs for training these models, but even that doesn't have to be the limiting factor, with many GPU hosting companies sponsoring talented model creators.

If you've never heard of it, HuggingFace is a very weird company name. But HF is the Github of the AI Model world. 

Anything and everything you could want to do with an AI, someone has likely already tried something either in a similar vein or that exact thing.

These models aren't always hosted on HF with everything required to retrain them from scratch, so they aren't truly open source, but many of them are freely available for download and running on your own hardware. 

When there are models in the world that can be cheaply run in all sorts of ways, and some of those models (Qwen3, Deepseek, Llama, Nemotron, and so many finetunes, distillations, quants...) are capable enough to do the work... 

## Developers are a terrible market for Frontier Model companies

I am sorry to speak ill of my colleagues, but we are. Most of us would rather build it ourselves because we can. 

Ok, that's reductionist. Here's a good quote from [Together.ai](https://www.together.ai/blog/the-frontier-is-open) about the absurdity of locking all this down in proprietary landscapes:

> Because AI is a relatively new and immature technology, we’re understandably compelled to run towards the frontier to reduce our risk of failure. Proprietary AI developers want to believe the frontier can only progress from closed labs working around a magic cauldron sitting on a pyre of GPU’s. But building a future on proprietary AI is betting that success is best secured by the sum of the smart people working at just one lab. As Bill Joy once said: “no matter who you are, most of the smartest people work for someone else.”

That is a delicious quote to me because I love the analogy of snake oil and witchcraft being the real thing these companies are trying to convince us they're selling.

In reality, it's just not so magical that many humans on Earth can't figure this out.

## Developers yearn for control, and businesses need reliability

So eventually, all these developers are going to wake up and realize they can control their [LLM](/writing/glossary#llmlarge-language-model) deployment just like they can control their [API](/writing/glossary#apiapplication-programmers-interface) routes.

And every developer who has had to deploy an [agent](/writing/glossary#agent) into the wild knows the feeling of having your [agent](/writing/glossary#agent) perform well one day, and then the next it doesn't, only to realize the model has obviously changed. 

Everyone who has felt THAT pain has yearned to be in control.

So if the power users of your products are going to buck you and also have all the capabilities to switch to other products or build it themselves (which we have a penchant to do), these types of users will quickly stop being the focus.

We'll all just eventually build something we like better that does the specific thing we need done better. 

> Side note: most businesses also want to operate on their data using an [LLM](/writing/glossary#llmlarge-language-model) safely. Private, controlled deployments in hyperscaler clouds are becoming the norm, and setting up any model (FM or open source) is a few clicks.

## Eventually, all users will go through this cycle

Developers were just the early adopters. We're notorious for it. We hand over our credit cards and corporate charge cards any time we can short circuit our workflows to get things done better/faster/stronger.

The real targets for the FM companies is the Mom and Pops who will pay for a subscription and use a tiny fraction of that capability. 

But eventually, even those targets will use the tools baked into their devices. 

Apple and Google will eventually and already are going to bake an [LLM](/writing/glossary#llmlarge-language-model) into the OS itself, running on the device (our phones today are incredibly capable devices and have good [GPUs](/writing/glossary#gpugraphics-processing-unit) to make use of).

The smartest things for them to do would be to give us control over those models and to control the quality of those models ourselves.

If they get out of the model game completely, they can allow US to make those mistakes! :D 

Inevitably one of these FM companies will get hacked, will do something stupid in the media, will have a massive outage that causes major pain for end users, or some other equally unavoidable situation. 

Once these models are a simple dropdown selection and download away, there's not going to be a lot stopping people from leaving. 

## Isn't this just open source vs proprietary?

Absolutely. At the end of the day, some companies will have the stomach to manage the infrastructure and code, and some will not. 

This isn't a black pill doomsday post. We will see these companies in existence for a long time. 

But to think they will be the only option, or even the most popular option, is absurd. 

There will always be a "build vs buy" decision in this space, just like every single other IT-related function. 

But that is my general point writ large, it is my main thesis for this blog: the [LLM](/writing/glossary#llmlarge-language-model) isn't as revolutionary as people are blowing it up to be. 

The [LLM](/writing/glossary#llmlarge-language-model) will quickly become just another tool in the toolbox for developers and creators to use, as boring as implementing a REST [API](/writing/glossary#apiapplication-programmers-interface).

## [LLMs](/writing/glossary#llmlarge-language-model) are the new REST [APIs](/writing/glossary#apiapplication-programmers-interface)

For [LLMs](/writing/glossary#llmlarge-language-model) to do anything useful, code and developers are required to create something that can solve the problem or achieve the goal - consistently and reliably.

[LLMs](/writing/glossary#llmlarge-language-model) are quickly shifting from this magical land of opportunity, to a tool we need to control as a developer.

Our bosses aren't so accepting of 80% accuracy, or [context](/writing/glossary#context) limits, or any of the many things we need to deal with when building [agents](/writing/glossary#agent). 

The world will never really be accepting of this until everyone acclimates to the probabalistic nature of all this new tech. The world is very used to a deterministic world. 

## The pressure for consistency and reliability isn't going away any time soon

[LLMs](/writing/glossary#llmlarge-language-model) will more and more often get tied into aiding or completely automating critical processes. 

No one operating even small businesses will tolerate low accuracy for critical things in their business.

This pressure will not disappear - it is why we are seeing a rising demand for better and better observability and testing tools for LLM work. 

It is my belief, then, that such pressure will push most people who are building this new world towards controlled deployments.

And as open source models and [finetuning](/writing/glossary#trainingfine-tuning) techniques get better and better, eventually these open-source [LLMs](/writing/glossary#llmlarge-language-model) and controlled deployments will become the defacto choice. 

## But won't Foundation Models just keep getting better and better?

No, I don't think this will happen. Not without some fundamental shift in the underlying tech. Not as they are today.

As we've seen model release after model release, we are starting to see small steps in capability vs leaps in capability.

Going from ChatGPT 3 to 4 was an insane leap in capability. Going from 4 to 5 felt very incremental. Using 5 vs Codex is even more incremental.

We are definitely seeing the leaps in the open source models, but they are playing catch up on the capability level, so this is expected. 

Just because we feed more parameters into a model, or we dump more data, doesn't make it fundamentally better at a task. 

To move into another leap, we're going to need more than just [LLM](/writing/glossary#llmlarge-language-model) tech as it is today. Fundamental tech shifts like what the transformers and pytorch libraries did for [LLMs](/writing/glossary#llmlarge-language-model), something that bakes how the world works into these algorithms (world models).

## So how do you try this out?

The absolute dead simplest way to run large models is to use a Macbook with lots of RAM, download something like Ollama or LMStudio, and click the buttons and start chatting.

Both of those tools work on Macs, and if you're a Windows or Linux (&lt;3) user and have a GPU, these tools can offload onto your GPU (fast!) and CPU (so sloooow) for token generation.

It's not much more complicated than that. 

You CAN get way down deep in it, running vllm or llamacpp and tweaking every parameter, but if you're just looking to take an open source model for a spin, try out one of those two, point your harness at the OpenAI API compatible endpoints they create, and start building.

If you don't want to run things locally but still try an open source model, a good and affordable option I've used in the past is [Chutes.ai](https://chutes.ai/) or using an [OpenRouter](https://openrouter.ai/) subscription. 

You won't be getting the stability of a FM company per se, but you won't be paying $20/hr or paying $6k for the hardware to try out the very large open source models (which come closest to FM capability).

I highly recommend trying out Qwen3 variants, GLM variants, and Deepseek variants. 

They are not the same vibe you're going to have with Codex or Claude, but they are very capable LLMs. 

## Who wins?

NVIDIA. They win. Without them, none of this is possible, everyone needs them, and they will continue pushing this whole frontier.

[FM](/writing/glossary#frontier-model) companies or hyperscalers or enterprises or even solo developers cannot proceed without those [GPUs](/writing/glossary#gpugraphics-processing-unit). 

Hyperscalers also win. Even if an enterprise won't use all the capacity they buy, they'll buy it anyways for the privacy aspects. 

Once [local LLMs](/writing/glossary#local-llm) get small enough and capable enough to run on the edge, device makers enabling this also benefit from all this pressure, but this will happen much later (3-5 years out imo - the average time where anything is possible in tech :D).
