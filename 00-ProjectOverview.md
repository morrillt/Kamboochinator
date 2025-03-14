# AI-Assisted Development Methodology

**Primary Goal:** Create a repeatable methodology for building applications as efficiently as possible with AI assistance. We will do this by building out the kambuchinator project. 

Secondary  Goal: The app dominates the Colombian internets and makes moneys selling kambucha while curing chrone's disease :)

## The Problem: with "Build Everything at Once" (YOLO) Instructions

When you ask AI to do too much too fast, you get poor results. I tried this approach first (because why not?). It simply doesn't work.

The effective alternative is providing step-by-step instructions that include:
1. Clear guidance for the AI
2. Instructions for you (the product designer) to efficiently QA what was built 

This approach appears to be the most efficient way to build non-trivial web applications with AI assistance.

## The Solution: Recursive Instruction Sets

The key insight that's blowing my mind: **prompts that generate prompts that generate prompts**. I call these "recursive instructions," and they're currently the critical element in effective AI-assisted coding.

What makes this work is the recursive nature - starting with high-level prompts, then drilling down to increasingly granular levels until you have instructions that both:
- Can be directly executed by AI
- Can be easily verified by humans ** we will automate this (obviously) later :)

Through this process of building interconnected instructions, I've created:
- A hierarchy of documentation that builds on itself
- Verifiable steps with built-in QA processes
- A step-by-step AI-build, human-verify-and-fix workflow

The end result? An executable set of instructions: [Milestone 1 Instructions](./07-Milestone1Instructions.md) that actually works. (I hope)

# Progress Log

## Creating Initial Instructions 
> **Note:** It took 2 days of work just to discover the sequence of prompts that actually produce usable instructions, but voilà! The effort paid off.

| Step Name                                                                    | Notes                                                                      | Requirements (other prompts used in generation of this step)                           |
| ---------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| Created [Master Plan](./01-MasterPlan.md)                                    | Done over multiple iterations of refinement with GPT-4 and Claude          | None                                                                                   |
| Generated [Packages](./03-Packages.md) list                                  | Reviewed and confirmed dependencies looked reasonable                      | Fed the Master Plan into Claude and asked to make all likely packages                  |
| Created [Directory Structure](./04-DirectoryStructure.md)                    | This was super helpful and non-trivial                                     | Fed `MasterPlan` into Claude and asked for variations on schemas that accomplish goals |
| Defined [Milestones](./02-Milestones.md)                                     | Super important and involved manual curation to ensure logical build order | `MasterPlan`                                                                           |
| Created detailed [Component Specifications](./05-ComponentSpecifications.md) | Defined core components and data structures                                | `MasterPlan`                                                                           |
| Established [Instruction Generator](./06-InstructionGenerator.md) approach   | May be the most important document. Details how to create instructions.    | NONE                                                                                   |
| Developed [Milestone 1 Instructions](./07-Milestone1Instructions.md)         | Broke down into manageable, verifiable steps                               | `MasterPlan`, `InstructionsGenerator`, `ComponentSpecifications` `DirectoryStructure`  |
| Reviewed implementation steps                                                | Amazing results                                                            | None                                                                                   |
| Received positive feedback on project structure                              | Made me laugh when I uploaded all files to GPT-4 and asked for feedback    | None                                                                                   |

## Notes
### 3.14
1. Now with all my instructions ready to go. Smooth is slow slow is fast?
2.Time to move to building.