// ASSESSMENT:
// Fill inside of the optimizeFunction function!

function doExpensiveTask(input) {
    const result = 2 * input;
    console.log("Doing expensive task...:", result);
    return result;
}

function optimizeFunction(func) {
    // You shouldn't need to edit anywhere else
    // Do your work inside this function
    // SOLUTION:

    /*********  MEMOIZATION ALGORITHM *********/

    // Initializing the cache.
    let cache = {};

    return (n) => {
        // If the input value is already memoized, read the value and skip the execution of expensive task.
        if (n in cache) {
            console.log("Same input, no need to calculate: " + cache[n]);
            return cache[n];
        /* If the input value is not memoized, execute the expensive task and insert the result in cache.
        Furthermore, the previous memoized value is removed from cache so that if the initial input
        occurs later in the code, expensive task is executed again. */
        } else {
            // Redirecting to the most inner function (doExpensiveTask or doAnotherExpensiveTask).
            let result = func(n);
            // Forgetting the older input
            delete cache[Object.keys(cache)[0]];
            // Inserting the calculated value to the cache.
            cache[n] = result;
            return result;
        }
    };
}

// anOptimizedFunc shouldn't execute the expensive task if new input is same as the previous one
const anOptimizedFunc = optimizeFunction(doExpensiveTask);
anOptimizedFunc(2); // Should print: Doing expensive task...: 4
anOptimizedFunc(2); // Should print: Same input, no need to calculate: 4
anOptimizedFunc(4); // Should print: Doing expensive task...: 8
anOptimizedFunc(4); // Should print: Same input, no need to calculate: 8
// It should forget the older input
anOptimizedFunc(2); // Should print: Doing expensive task...: 4

function doAnotherExpensiveTask(input) {
    const result = 10 * input;
    console.log("Doing another expensive task...:", result);
    return result;
}

// We can optimize another function, which should also behave similarly
const anotherOptimizedFunc = optimizeFunction(doAnotherExpensiveTask);
anotherOptimizedFunc(2); // Should print: Doing another expensive task...: 20
anotherOptimizedFunc(2); // Should print: Same input, no need to calculate: 20
anotherOptimizedFunc(4); // Should print: Doing another expensive task...: 40
anotherOptimizedFunc(4); // Should print: Same input, no need to calculate: 40
anotherOptimizedFunc(2); // Should print: Doing another expensive task...: 20
