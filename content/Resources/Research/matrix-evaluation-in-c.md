---
title: Matrix Evaluation in C - Analyzing Access Patterns and Performance
date: 2024-11-10
tags:
  - research
  - gamedev
  - C
draft: true
---
Understanding how memory access patterns affect performance is crucial in systems programming, especially in languages like #C where manual memory management is central. This post explores how different ways of traversing a matrix—either by rows or by columns—impact execution time, especially when matrices grow in size. This exploration provides insights into cache utilization and access efficiency in #C.
## The Problem

In computing, **matrix traversal** is a common operation in numerous applications, from graphics rendering to scientific computing. However, not all traversal methods yield the same performance, particularly on modern processors where **cache memory** plays a pivotal role. Cache memory, which sits between the CPU and the main memory, speeds up data access when it can predictably store and retrieve frequently accessed data. If our access pattern is unpredictable or inefficient, it may lead to frequent cache misses, slowing down the program.

In this exercise, we analyze two primary access patterns:

1. **Row-wise traversal**: Iterating over matrix elements by rows, where elements stored consecutively in memory are accessed sequentially.
2. **Column-wise traversal**: Iterating over matrix elements by columns, accessing non-consecutive elements in memory, potentially increasing cache misses.

## Analysis Goals

Through the next test, we aim to understand:

- **How access patterns influence performance**: Observing execution time when traversing by rows vs. columns.
- **The effect of matrix size on cache efficiency**: Determining if larger matrices lead to a noticeable difference in performance between row and column access.
- **Practical optimization insights**: Applying these findings to write more cache-efficient code, especially for performance-critical applications.

## Performance Evaluation

It's very important to know how to evaluate the performance of out codes. Know how much time out code takes. In my personal context ( #gamedev ) it is imperative since this defines the performance of our games.

Measuring the time it takes to execute a piece of code is relatively simple if we define a function `captureTime` that works as a stopwatch:

```c
t1 = captureTime();

// code to measure

t2 = captureTime();

time = t2 - t1; // time it takes to execute the code
```

The problem with this method is that the result and cost of this `captureTime` function is **hardware** and **operating system dependent**.

In addition to this problem, we have to have in mind that the same exact code doesn't always takes the same time to execute due to the complexity of the factors involved nowadays. The code to be measure does **not run directly on the architecture**, but rather there is an operating system and devices that **interrupt** the usual flow of execution. So what we do is run the same code several times and do a **statistical analysis** of the result to get a more accurate result.
## Evaluating arrays

> TODO add guide to program the tests and explain the classes

## Conclusions

> TODO add a conclusion to the made tests