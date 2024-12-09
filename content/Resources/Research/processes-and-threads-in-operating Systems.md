---
title: Processes and Threads in Operating Systems
date: 2024-12-08
tags:
  - research
  - threads
  - processes
draft: true
---

Understanding how processes and threads function is central to effective operating system design and programming. This post provides an overview of process management, threading, and examples using **SDL threads**, offering insights into key concepts and implementation details.

## What are Processes?

A **process** is a program loaded into memory for execution. Programs reside on disk, but they become processes when executed. Processes can operate in various ways:
- **Independent** or **Cooperating**: Processes may execute independently or interact with others to share data and resources.
- **Multi-user vs. Multi-process**: Multi-user environments don't necessarily imply multi-process execution, but modern systems support both **sequential**, **concurrent**, and **parallel** processing.

### Goals of Process Management

The main goals are:
- **Maximizing CPU usage**: Ensuring high efficiency through effective scheduling and management.
- **Quality of Service**: Maintaining responsiveness and reliability under varying workloads.

## Process Lifecycle and Management

### Process Control Block (PCB)

Each process is represented by a **Process Control Block (PCB)**, which contains:
- **Identity**: Unique process identifiers.
- **Context**: Information for scheduling and management.
- **Memory addressing space**: Defining the allocated resources.
- **Queues**: Tracking the process state (e.g., **READY**, **RUN**, or **WAIT**).

### Process Creation and Termination

1. **Process Creation**:
   - Allocating memory for **Code**, **Data**, **Stack**, and optionally **Heap**.
   - Initializing a new **PCB** for the process.

2. **Process Termination**:
   - Releasing resources such as memory and PCBs.
   - Managing signaling with parent processes and scheduling the next task.

### Scheduling Concepts

Scheduling policies define how processes share CPU time, focusing on:
- **Execution time**: Optimizing throughput.
- **Response time**: Ensuring responsiveness.
- **Priority**: Prioritizing tasks based on importance.

Time-dependent scheduling policies, such as **Round Robin**, use fixed time slices (**quantum**) to ensure fair distribution of CPU time.

## Introduction to Threads

Threads, often referred to as **lightweight processes**, offer an efficient alternative to full process creation. Threads allow for:
- **Partial sharing of memory and resources**: Only sharing what is needed.
- **Efficient cooperation**: Ideal for tasks requiring frequent communication.

In **SDL**, threading is implemented via functions like:
- `SDL_CreateThread`
- `SDL_WaitThread`
- `SDL_DetachThread`

### Single Thread vs Parallel Processing

With SDL, we can create a simple program that moves rectangles in a graphical window using a single thread or multiple threads and see how the performance changes.

#### Single Thread Approach

In the **Single Thread** approach (as demonstrated in `SingleRectangle.cpp`), a single thread handles the update logic for all rectangles sequentially. 

**Advantages**:
- Simplicity: Easier to implement and debug, as there are no concerns about synchronization.
- Low overhead: Only one thread is created, avoiding additional resource usage for thread management.

**Disadvantages**:
- Limited scalability: Performance may degrade with an increased number of rectangles or computational workload, as all updates must be handled serially.
- Less responsive: Time-consuming tasks can block the main thread, potentially affecting the frame rate.

#### Parallel Processing with Threads

In the **Parallel Processing** approach (as demonstrated in `ParallelRectangle.cpp`), the workload is distributed across multiple threads. Each thread is responsible for updating a subset of rectangles, allowing updates to occur concurrently.

**Advantages**:
- Scalability: Dividing tasks among multiple threads allows for better utilization of multi-core CPUs.
- Improved responsiveness: Heavy computation is distributed, reducing the load on the main thread and maintaining smoother frame rates.

**Disadvantages**:
- Complexity: Requires proper synchronization mechanisms to avoid race conditions or data inconsistencies.
- Overhead: Managing multiple threads incurs some additional cost in terms of memory and CPU usage.

#### Performance Comparison

To illustrate the performance difference, consider the following scenario:

- **Test Case**: Moving 2500 rectangles across the screen.
	- Screen Width 1024
	- Screen Height 768
- **Environment**: A octa-core CPU running at 3.6 GHz.
	- AMD Ryzen 7 3700X
	- 8 cores
	- 16 threads


| Metric              | Single Thread | Parallel (2 Threads)                     | Parallel (4 Threads)                                                                 | Parallel (8 Threads)                                                                                                                                                         | Parallel (16 Threads)                                                                                                                                                                                                                                                                                                                                               |
| ------------------- | ------------- | ---------------------------------------- | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Frame Rate (FPS)    | ~1665         | ~1471                                    | ~3087                                                                                | ~5303                                                                                                                                                                        | ~8186                                                                                                                                                                                                                                                                                                                                                               |
| CPU Utilization (%) | ~95%          | **thread 1**: ~67%<br>**thread 2**: ~67% | **thread 1**: ~67%<br>**thread 2**: ~67%<br>**thread 3**: ~67%<br>**thread 4**: ~67% | **thread 1**: ~67%<br>**thread 2**: ~67%<br>**thread 3**: ~67%<br>**thread 4**: ~67%<br>**thread 5**: ~67%<br>**thread 6**: ~67%<br>**thread 7**: ~67%<br>**thread 8**: ~67% | **thread 1**: ~37%<br>**thread 2**: ~37%<br>**thread 3**: ~37%<br>**thread 4**: ~37%<br>**thread 5**: ~37%<br>**thread 6**: ~37%<br>**thread 7**: ~37%<br>**thread 8**: ~37%<br>**thread 9**: ~37%<br>**thread 10**: ~37%<br>**thread 11**: ~37%<br>**thread 12**: ~37%<br>**thread 13**: ~37%<br>**thread 14**: ~37%<br>**thread 15**: ~37%<br>**thread 16**: ~37% |

## Conclusions

Processes and threads are fundamental to multitasking operating systems. Processes provide isolation and robustness, while threads enable lightweight, efficient multitasking within a shared memory space. Tools like **SDL threads** simplify multithreading for applications like games, making them a valuable resource for developers.

### Key Takeaways:
- **Processes** are independent execution units with isolated resources, suitable for isolated tasks.
- **Threads** are lightweight and enable shared memory, ideal for high-performance multitasking.
- **Parallel Processing** significantly improves performance but requires careful synchronization.
- **SDL threads** provide a straightforward API for multithreading in applications like games.

If you've made it this far, thank you for reading! I hope this post provides a clearer understanding of process and thread management in modern operating systems.

