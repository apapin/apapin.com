---
title: "product management hats"
description: "A comprehensive if somewhat abstract description of the different roles of product management in early stage startups."
pubDate: "November, 2022"
revDate: "February, 2023"
---

I care a lot about product management. Learning and thinking about it, as well as doing it. It calls on traits that I value: being a generalist, communicating well and talking to people, a good mix of rationality & intuition… In fact, by my own standards, I care about it too much. I got attached to the label at some point along the way.

So I thought I'd take to the hammer and deconstruct what it is exactly I mean by product management, a fuzzy and amorphous discipline, and what it is I really like. Hopefully, this can serve as an evolving reference on my product management practice.

It will feel idealized, but it’s grounded in my experience as a founder or first product person in small companies, which won't match everyone else's. Nonetheless, it's not exacly a job listing. These hats are distributed, among a product management team, and sometimes among people who are not formally doing product management.

I'm also aiming for comprehensiveness over depth, at the risk of being overly abstract. But I'd rather focus on the why and what rather than the how, which I find is rarely the issue in practice and always an ad-hoc combination of the plentiful jungle of frameworks that exist.

## As mental model making

In my mind, the core job of a PM is to build and maintain mental models of everything around and inside the product. It's taking an incredibly complex reality and trying to fit it in a neat shareable description that has some explanatory power, can be operationalized for planning and predicting, and used as a guide for product work.

What kind of mental models? A lot of them, and whatever works for the particular circumstances. Product management usually have borrowed them from other disciplines.

(TODO)

- Personas are mental models for your otherwise incredibly diverse customers.
- You build a model of a market, your competition and where you are compared to them.
- A product strategy is a mental model of a series of problems you're aiming to tackle in order, with a resoning for that order.
  - strategy => strategic impediments => thesis for how to overcome them => incremental work
- a product vision is..
- Roadmaps are mental models of the messy engineering work.
- PRDs are mental models of features. User stories are mental models of user journeys.
- Through discovery, you're building a mental model of how you users act.
- you're double diamanting it up and making 2 mental models
- A theory of what the markets lack, of what your competitors aren't doing well, of why something you're doing differently is radically better at something.
- ethnography. Observing users in their... and then deriving patterns of commonality.
- Market dynamics & laws: Porter / Disruption / Commodifying your competitors / etc.

The simplest instance of this is building a vocabulary. I care a lot about naming things. This has immediate benefits, a shared vocabulary makes things like documentation, talking to your customers, or UI writing 200% easier. If it gets a name it can be explained, internally or to the outside. If it doesn't, then things can get confusing or bloated very fast. It's deceptively hard. As the saying goes, there are only two hard things in computer science and one of them is naming things.

The building of these mental models requires leaps of abstraction, and ability to separate the signal from the noise. The most glorious moments of managing product is realizing that issues that you've been seeing separately for a long time can be considered as symptomes of a single cause or otherwise unified in single model. The retrospectively obvious was there all along, it only took an update to the mental model to see it. Getting there requires deliberate efforts to try to reduce everything to first principles and root causes rather than stop along the way.

The archetypal example of this is getting invaluable product feedback. Users or stakeholders will tell you to fix or add something, and sometimes you just do it and that's fine fine. But product management isn't just doing triage. Often, it's a case of Henry Ford's "If I had asked people what they wanted, they would have said faster horses." In fact you don't really need to ask, people will intuitively turn their problems into solutions, losing some precious information in the process. You need systematic effort to understand what's behind it, what it reveals about their preferences, needs, or ways they use the product. Elegant solutions lie there, a little beyond. Construction of the proper mental model is how you get there. It means a form of structuralist approach, where you get enough symptoms or surface-level facts to infer the underlying infrastructure, hidden behind layers of second and third order effects. Once you have that model, exploring the solution space becomes much easier, and you get novel ideas.

To build these models, you gather information, either qualitative by talking to people or doing research, quantitative by looking at hard data, or somewhere in between, like doing a thematic analysis of 100s of customer feedbacks or tickets created at a particular moment of their interactions with the product.
You look at different industries or products that have tackled similar problems, try to understand how they did it, and apply a bit of lateral thinking to work out the implications of their solutions to your own context. Everything looks different from close up, but when you manage to abstract it in a mental model, you can start seeing commonality.

A lot of time, these mental models are around, perhaps just not formally described. In particular in early startups, decision-making is intuitive and founder-led, which a quick feedback loop. These models change fast. If anything, documenting stuff might be counter-productive. At some point, to scale up and organize a team, you'll have to have someone dedicated to maintaning them and be more deliberate. The first months of a product manager, when they're yet to be an expert on the customers or the market, are often spent talking to specialists, internal and external, and trying to fit everything in models and document them explicitly.

## As systems thinking

Once you have models, you need to build relationships. Manage to fit them into a bigger hollistic system. Whatever models you have will interact in non-trivial ways, but you have to find flows, and coherent narratives you can organize product work around.

A lot of this is numbers-based. You know that this feature usage here by this type of customers there impacts this conversion rate there and has that impact on the bottom line or overall company mission. You have a CAC and an LTV in mind for a given customer segment, and a rough estimate of efforts needed to implement something. Value, effort, and money have flows that you can map, as blackboxes of inputs and outputs. At the very least, you'll learn a lot attempting to map this. The answers you achieve are rarely exact. Sometimes you can A/B test something to scientific precision or do a proper root cause analysis, but in general it's more about useful heuristics.

The priorization & roadmapping decisions will often be derived from that approach, as bet between expected effort and expected impact flowing through these heuristics. The faster you can update and validate them the better.

From systems thinking comes the very important skill of being able to "zoom-in, zoom-out". You need to maintain the threads between a very granular feature or work increment, what it unlocks, why we think it's important, and how that fits in a bigger (necessarily fuzzy) multi-year strategy. It pans a wide spectrum across timescales or levels of abstraction, and is a big part of what makes product management interesting and hard. Steve Jobs' levels of attention to details and precision on the subject matter need to cohabit with big picture views. You have to be able to hold all of these in your mind, and present them in a coherent fashion.

You also have to know where you should direct your attention and work at any given time. Product management is spread thin, and "what should I work on" has few obvious answers. A lot of the work is speculatory, and tasks in isolation are hard to gauge. You have to juggle these different timelines, your mental models should be "suitably detailed" - certain answers have to be dealt with just-in-time when some engineering time is available, or some marketing opportunity open up. Properly directing those efforts means understanding the product system well enough, and what you should get for pushing what lever.

Visual thinking or other tools for thought associated tooling can be helpful there, in order to paint a constantly changing map, and not trivially project it into too simple a representation like a powerpoint slide.

## As nay-saying

A PM's job is often to bring context or perspective when the team as a whole gets too much in the weed and lose the plot. There can be many reasons for that. A common one is trying to please everyone, and getting your product pulled apart in a ton of directions to try and satisfy multiple contradictory needs from different customers. The person who chases two rabbits catches neither. It happens a lot in sales or customer support driven companies, who have tactical considerations to win a deal or satisfy a customer but might not have a more strategic perspective on the product. A PM has to maintain actively a bit of deliberateness, a _design_. Always start with the why and then proceed from a top-down motion into features & increments with a goal in mind. Product management is also responsible for mixing that kind of attitude with the necessary continuous iterative improvement, and potentially purely technical "invisible" work.

Maintaining coherence is bound to make some people unhappy, or else it's you aren't doing it strictly enough. You can neatly illustrate it by saying that "product strategy is about saying no". Everything is worth it in the abstract, you can always find reasons for why another feature might be useful. But the world of software, which allows for quick change and iteration, is a world of opportunity and other hidden costs that trying to be too many things at once incur. The worst state to be in is to hear "that's already in the backlog" for about everything you can imagine that's tangentially related to what your product does. And before you know it, your product does everything, has a configuration page the size of the moon, and you're unable to cleanly articulate its value proposition to any prospective user. A fate Salesforce or Microsoft might be fine with for the greater good of expanding total addressable market, but deadly to any startup needing a clean value proposition to get adopted.

The role is to define clear borders & criteria for inclusion of product work. Market positioning is important in that respect, it provides a good test. You should be able to explain what your (even direct) competitors do better than you, and even be comfortable sending users to them. That's also an attitude that might be counter-intuitive, the default mode is "we're better", but clear thinking about your product and its place yields something more valuable.

## As outcome-driven culture building

In the same vein of going against the grain: features or work can get a life of its own. Your backlog & features, the output, means to an end, becomes the outcome, the end in itself. I'd say it's an inevitable byproduct of getting things done and deeply focusing on them. An engineer work may be done when a feature is done, but a PM's work by nature can only be done when a specific outcome is achieved, an obstacle is removed, a problem is solved. It pairs well with the versatility and cross-discipline nature of product management: don't make excuses, whatever is preventing reaching the desired outcome is your problem, and you should work on that.

"A sense of responsibility" and "the buck stops with you attitude" sure are important, but it goes beyond the personal level, and is largely an organization-level question. Product management is responsible for setting a culture of ownership and spreading it around. Everyone in the extended product team should feel empowered and responsible. No one should think their job is done because it's "technically done", but didn't actually achieve much or what was intended. No-one should be pursuing side-quests only tangentially related to making the product better in the end.

Generalized ownership is personally fulfilling for everyone, as nobody likes being just a cog, but it's also the most efficient way of creating products. When everyone is conscious of why they do something, hopefully because of the PM's articulation of the why and underlying logic, then they tend to build the right thing, have better ideas, and contribute their own unique perspective on how to achieve the goal.

One of the way to do it is through OKR-like approaches. If you can rally people behind a "north star metric" that is a proxy for a product goal, that's a good start. You know your job is done when you have managed to move the needle one way or the other. It's most easily done in big corps, with a product big enough than you can slice it in tranches and have squads focus on one metric. Measurability is important, but more fundamentally, it's about always focusing on a combination of user-centricism and business outcomes, rather than internal artifacts or intermediates.

It's about closing the feedback loop, making sure the impact of what the team is doing is measured and judged against the right criteria, so that the product can improve correctly. What does it do for the user, and what does it do for the business? Are they really better off with this new release? It sounds trite but teams & orgs often collectively lose the plot in the complicated business of making software. As an engineer by training, I have my own bias, usually around the subconscious idea of "if it was hard to do, it's probably valuable", when something 10x easier to do might deliver equal value. Depending on culture, these personal bias whatever they are sometimes get blown up and contagious. Product management has an entire toolbox and agenda of steering that in the right direction.

## As aligning

Once you've got your mental models, you have to peddle them around. This serves a double function.

First, of validating these models. You might have ideas, but as a jack-of-all-trades-master-of-none, the engineers will out-engineer you, the designers will out-design you, the sales people will out-sell you, the users will out-us.. You get the idea. If you've come to a conclusion and it resonates alarmingly badly with a primary person of interest, you've probably goofed and that's an important information.

Second, sharing these models is how you do anything. A cool part of product management is that it usually has its own hierarchy somewhere in the corner. Engineering or marketing will listen to you as closely as you can influence them. This, I find, is more interesting than frustrating. It has its failcases but ideally it keeps you honest and efficient - your good mental models are the most convincing and the easiest to share - incentives are well aligned in that regard.

Basically anything that relates to a mental model misalignment is on product management, and they are dime a dozen. For example, let's say there is a mismatch between the mental model of the users, as mapped by the designer, and the mental model of the developers of a given feature. The resulting work is going to be very confusing to the end-user at best, or maybe the feature will get no usage because users will miss the point. Or maybe it will cause regular bugs as what users think is standard is edge-case material or out of scope viewed from engineering. An entire class of these problems might get flagged as something else than product management not doing its job. A deficit in product management, I find, can be sneaky.

I like this way of describing a PM, slightly reworded from John Cutler: first, they must have a high **sensitivity to incoherence**. Meaning they must spot these misalignments. Maybe the stated company objective or priority is not getting worked concretely by the team. Maybe the architecture the dev team is thinking about represents an overinvestment of effort compared to how certain the value delivered by it is at this stage. Second, they must have a high **urgency to resolve**. Some people might see the incoherence, but either thrive in the resulting chaos or be resigned to the idea of inefficiency caused by working in multiple contradictory directions. In the other quadrant, some people are pragmatists, fixers, that want to fix but might not necessarily be thinking strategically and have the holistic view to paint the incoherence. The combination of both makes someone good at product management.

Alignment is also where product management can get a justifiable bad rep in my mind. Big companies with giant bloated bureaucracies have a lot of product managers acting strictly as relays and parroting information without added value. In effect, they patch leaks and extinguish fires caused by broken communication lines and culture, without ever fixing the underlying cause.

## As cheerleadering & evangelization

One of the most important mental models you can share is what your ideal product is, where you want to end up eventually. The idea is to describe it in the most vivid colors possible. The role of having a product vision, and a strategy to get there, is two-fold.

First, it's useful for external perception. Al Ries' and Jack Trout famous book about positioning has the idea that some companies would be better off if they just scrapped their advertising and ran the internal strategy powerpoint instead. In product companies, you should be able to just roll out the product strategy more or less unchanged, and it should speak for itself. Strong mental models make compelling narratives. Strong meaning well researched and well formulated.

There is a push-pull with marketing people on these subjects, as they're the primary users of these outputs of product management, which can neatly be turned into content marketing. They also have, by their activites, very important insights into the market or prospective customers. The reverse engineering of other companies' own narratives provide useful inputs for building your own mental models.

For communicating inside the company, I think you have two important things to juggle as a product manager. First, depending on personalities, a lot of people need a strategy as input. They want a narrative to make sense of what they're doing, a coherent direction and a plan. I find that these people often get burned out or quit jobs when there is a product management deficit, even in an otherwise perfectly healthy company. "We're making the product better" or "we're making sure we can handle more customers" aren't satisfactory narratives, for how often they're all you might hear. Product management is in charge of sense-making, in a more concrete way than the level the CEO or other executives carrying the general vision might be at.

The other part is managing the unknown, and reassuring people who have less of a tolerance for it. Part of the stances of startups is one of discovery, you can't be 100% sure of what you're building before the fact. But that makes the need to know and articulate what the product stands for and where the limits of the flexibility and acceptal pivots are.
Often, it's about communicating your learnings. Something changed in the roadmap because something was realized that broke priors. You have to explain it, or else at face value, it just looks like you're making things up as you go along, which should only be partly true.

These parts of the product management role can be make or break for the morale and general well-being of a team.

## As cheap science

When you are making your mental models, you make a lot of assumptions. Each of them should come labelled with a confidence level. At the start, confidence will be incredibly low. If it wasn't, someone would probably already have done what you're trying to do. Product management is about working to increase the confidence levels of your modelisation over time.

To do that, experiments are a central concept. You have a hypothesis, you test it, you learn. You get an idea in front of an expert and see how it resonates. You imagine a landing page and see if you can present some feature deep in the future in a compelling way. You're trying to refine your assumptions and enhance your confidence levels that your mental models are, in fact, meaningful.

The art of the Minimum Viable Product - but that extends downards from a product to the smallest of features - is to find the smallest amount of work necessary to validate an assumption you've made. There is a cool resourcefulness to it, engineers and designers are often very good at it, as a PM you are the one who has to make sure it happens by constantly proding along the line of "do we really need this?" or "would this radically different, simpler and temporary way of doing it be worth it to validate the assumption a bigger work usefulness is riding on?".

In order for it to happen, you also have to frame it right. This is my mental model of the thing, this is what we're validating. Product assumptions must follow all the basics of the scientific method, you have to find some way to make them falsifiable so you can design experiments to match. They need predictive power to be useful, and predictions are verifiable.

## As product risk management

In a closely related view popularized by Marty Cagan, product management is responsible for minimizing risks before something is worked on. I like that model a lot in startups. Often considered as upside machines, as baby unicorns, they really are more about constrained resources and doing the most with the least. You have to be supremely prudent, because any mistep, including any sort of product management fuckup, is death, whereas your friendly neighborhood big corp can spend dozens of millions on a failed project with it barely registering. This is probably not the dimension Google's PMs are best at, what incentives would they have to be? It's an unintuitive conception of risk where the biggest risk is the opportunity cost of making a product nobody actually wants or not doing anything, the default state of startups with a finite runway.

Cagan lists different categories of risk that make a useful taxonomy:

- Value risk, or does this actually bring value to the users
- Usability risk, or can we make it easy enough to use
- Feasibility risk, or do we have the technology to make it real
- Business viability risk, or is this compatible with our business model and capabilities

I also like this view particularly if you scope down the role of product management on any given feature or project. These are the components most individual PMs are responsible for in a product org. At that scale, it's nice to think about the work with a checklist like that.
Each type of risk fits nicely with a different toolbox you have, or a privilieged interlocutor specialized in clearing that risk. Each feature or job has its own arc where you start somewhere in these different dimension, fixate the problem you're tackling, and then attempt to explore the solution space to minimize these different risks.
