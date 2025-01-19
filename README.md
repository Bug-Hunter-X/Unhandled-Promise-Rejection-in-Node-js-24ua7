# Unhandled Promise Rejection in Node.js

This repository demonstrates a common error in Node.js applications: unhandled promise rejections.  Even with a `.catch` block, if a promise rejects and isn't properly handled, the application can crash unexpectedly. This example highlights the issue and provides a solution for robust error handling.

## Bug Description

The `bug.js` file contains a `Promise` that rejects after a 2-second delay. While a `.catch` block exists, Node.js might still crash if the rejection isn't handled properly.  This is especially problematic because there's often no clear error message in the console.

## Solution

The `bugSolution.js` file demonstrates the correct way to handle promise rejections using `process.on('unhandledRejection', ...)`.  This event listener catches all unhandled rejections and ensures the application gracefully handles errors without crashing.