---
title: "Smart Pointers in C++: how to manage memory safely in game engines"
date: 2025-02-13
tags:
  - research
  - gamedev
  - cpp
  - pointers
  - performance
  - Coffee-Engine
  - smart-pointers
  - memory-management
draft: true
---
![Coffee Engine Demo](https://raw.githubusercontent.com/Brewing-Team/Coffee-Engine/refs/heads/main/Resources/Release1/screenshot_2.png)  
*Screenshot from our custom game engine, [Coffee Engine](https://github.com/Brewing-Team/Coffee-Engine), built with C++ and OpenGL.*

Memory management is a critical challenge in game engines, where leaks, dangling pointers, and ambiguous ownership can lead to crashes or performance degradation. Over the past 5 months, I’ve collaborated with my teammate **[Hugo Planell Moreno](https://github.com/HugoPlacer)** to develop **[Coffee Engine](https://github.com/Brewing-Team/Coffee-Engine)**, a custom C++/OpenGL game engine. During this process, we faced these challenges head-on and implemented smart pointers extensively to ensure memory safety without compromising performance.

In this post, we’ll explore **smart pointers**—a modern C++ feature that automates memory management—while sharing practical insights from our engine’s development. We’ll compare raw pointers to `unique_ptr`, `shared_ptr`, and `weak_ptr`, and demonstrate their use in real-world scenarios, including examples directly from **Coffee Engine**.

## What Are Smart Pointers?
Smart pointers are wrapper classes that manage dynamic memory through RAII (Resource Acquisition Is Initialization). They automatically deallocate memory when objects go out of scope, preventing leaks.
## Types of Smart Pointers
There are 3 types of smart pointers, depending on the case bla bla bla... complete herer
1. **`unique_ptr`**  
   - Exclusive ownership. Cannot be copied.  
   - Use `std::move` to transfer ownership.  
   - Ideal for unique resources (e.g., textures, shaders).  
2. **`shared_ptr`**  
   - Shared ownership via reference counting.  
   - Use when multiple objects need access (e.g., 3D models).  
3. **`weak_ptr`**  
   - Breaks circular references in `shared_ptr`.  
   - Useful for non-owning references (e.g., entity targeting).
But are this kind of pointer less performance than a raw pointer?

## Raw Pointer vs Smart Pointer performance
Here i want to code a small program to compare the performance and if the smart pointers have to much overhead compared to manually managing the memory. Raw Pointer vs unique vs shared vs weak.

table or diagram with results here.

### Use cases in Coffee Engine
Some use cases in the engine.

## Conclusions
...
### Key Takeaways: