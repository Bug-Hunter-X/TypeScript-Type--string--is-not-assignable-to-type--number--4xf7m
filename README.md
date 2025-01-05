# TypeScript Type 'string' is not assignable to type 'number'

This repository demonstrates an uncommon error in TypeScript: the type error 'Type 'string' is not assignable to type 'number'. This error typically occurs when performing arithmetic operations on variables with mismatched types, but the subtlety arises when dealing with dynamically generated or indirectly accessed values.

## The Bug
The bug is in `bug.ts`. The function `add` is defined to accept two numbers. However, we attempt to call it with a number and a string, leading to the type error. This situation can arise when dealing with data from external sources or when type checking isn't robust enough.