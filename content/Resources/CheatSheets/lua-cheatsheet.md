---
title: Lua Cheatsheet
date: 2024-11-26
tags:
  - cheatsheet
  - Lua
---
# Hello World
```lua
print("Hello, World!")
```
# Comments
```lua
-- This is a single-line comment

--[[
This is a 
multi-line comment
]]
```
# Data type
#Lua has the following basic data types:
```lua
nil       -- Represents the absence of a value
boolean   -- true or false
number    -- Real (double-precision) numbers
string    -- Immutable sequences of characters
table     -- Associative arrays (key-value pairs)
function  -- Blocks of reusable code
userdata  -- Used to represent C data
thread    -- For managing coroutines
```
# Constant
#Lua does not have explicit constant declarations, but it can be emulated using conventions:
```lua
local PI = 3.14159 -- Naming convention for constants is UPPER_CASE
```
# Operators
| Operator | Example                  | Same as                                        |
| -------- | ------------------------ | ---------------------------------------------- |
| `+`      | `x = 5 + 3`              | Addition `x = 8`                               |
| `-`      | `x = 5 - 3`              | Subtraction `x = 2`                            |
| `*`      | `x = 5 * 3`              | Multiplication `x = 15`                        |
| `/`      | `x = 6 / 3`              | Division `x = 2`                               |
| `%`      | `x = 5 % 3`              | Modulus `x = 2`                                |
| `^`      | `x = 2 ^ 3`              | Exponentiation `x = 8`                         |
| `==`     | `x == 5`                 | Compare if `x` equals `5`                      |
| `~=`     | `x ~= 5`                 | Compare if `x` does not equal `5`              |
| `<`      | `x < 5`                  | Compare if `x` is less than `5`                |
| `>`      | `x > 5`                  | Compare if `x` is greater than `5`             |
| `<=`     | `x <= 5`                 | Compare if `x` is less than or equal to `5`    |
| `>=`     | `x >= 5`                 | Compare if `x` is greater than or equal to `5` |
| `and`    | `x > 1 and x < 5`        | Logical AND between conditions                 |
| `or`     | `x < 1 or x > 5`         | Logical OR between conditions                  |
| `not`    | `not x == 5`             | Logical NOT of condition                       |
| `..`     | `"Lua " .. "is awesome"` | Concatenates strings into `"Lua is awesome"`   |
| `#`      | `#t`                     | Returns the  length of a string or table `t`   |
# If else
```lua
local x = 10

if x > 5 then
    print("x is greater than 5")
elseif x == 5 then
    print("x is equal to 5")
else
    print("x is less than 5")
end
```
# Switch
#Lua has not built-in switch statement. Instead we can use `if-elseif`.
```lua
local choice = 2

if choice == 1 then
    print("Option 1 selected")
elseif choice == 2 then
    print("Option 2 selected")
elseif choice == 3 then
    print("Option 3 selected")
else
    print("Invalid option")
end
```
# Loops
## While loop
```lua
local count = 0 
while count < 5 do 
	print("Count is:", count) 
	count = count + 1 
end
```
## For loop
```lua
for i = 1, 5 do
	print("i is:", i)
end
```
## Repeat Until loop
```lua
local value = 0 
repeat 
	print("Value is:", value) 
	value = value + 1 
until value > 5
```
## Iterating over a table
```lua
local fruits = {"Apple", "Banana", "Cherry"} 
for index, fruit in ipairs(fruits) do 
	print(index, fruit) 
end
```
# Variables and Scope
Variables in #Lua are dynamically typed
```lua
local x = 10 -- Local variable
y = 20       -- Global variable (avoid unless necessary)
```
#Lua uses block scoping
```lua
do
	local z = 30 -- Scope limited to this block
	print(z)     -- Outputs: 30
end
print(z)         -- Error: z is not defined
```
# Tables
Tables are the primary data structure in #Lua.
```lua
-- Tables are the primary data structure in Lua.
local t = {}            -- Create an empty table
t["key"] = "value"      -- Key-value pair
t[1] = "First Element"  -- Numeric index (arrays)
t.name = "Lua Table"    -- Shortcut for string keys

-- Iterating over a table
for k, v in pairs(t) do
    print(k, v)
end

-- Multi-dimensional tables
local matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
}
print(matrix[1][2])  -- Outputs: 2
```
# Functions
```lua
-- Defining a function
function greet(name)
    return "Hello, " .. name
end

-- Calling a function
print(greet("World"))  -- Outputs: Hello, World

-- Anonymous functions
local add = function(a, b)
    return a + b
end
print(add(3, 5))  -- Outputs: 8

-- Varargs (Variable number of arguments)
function sum(...)
    local s = 0
    for _, v in ipairs({...}) do
        s = s + v
    end
    return s
end
print(sum(1, 2, 3, 4))  -- Outputs: 10
```
# Coroutines
Coroutines allow cooperative multitasking in #Lua.
```lua
co = coroutine.create(function()
    for i = 1, 3 do
        print("Coroutine iteration:", i)
        coroutine.yield()
    end
end)

coroutine.resume(co)  -- Outputs: Coroutine iteration: 1
coroutine.resume(co)  -- Outputs: Coroutine iteration: 2
coroutine.resume(co)  -- Outputs: Coroutine iteration: 3
```
# Error Handling
Using `pcall` (protected call) for error handling.
```lua
local status, err = pcall(function()
    error("An error occurred!")
end)
if not status then
    print("Error:", err)
end
```