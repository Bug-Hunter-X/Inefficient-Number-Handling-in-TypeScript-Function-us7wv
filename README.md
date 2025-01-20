# Inefficient Number Handling in TypeScript

This repository demonstrates an example of inefficient number handling in a TypeScript function and provides a more efficient solution.

## Problem
The `printNumber` function uses a long if/else if chain to handle a small set of number inputs.  This approach is not scalable and lacks flexibility.  Numbers greater than 2 are incorrectly handled as 'Number is too large'.

## Solution
The improved solution uses a switch statement, offering a more concise and readable approach.  A default case is included to handle numbers outside the explicitly defined cases.  This makes the code more maintainable and flexible to adapt to future input requirements.