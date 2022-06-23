# Flowers-Shop-Testing

NOTE: Unit tests on flowers shop function

JS Unit Tests using Mocha and Chai to test a variable named flowerShop, which represents an object containing functions.

The object have the following functionality: 
- calcPriceOfFlowers(flower, price, quantity) - A function that accepts three parameters (one string and two numbers). The function returns the multiplies price and quantity. There is a need for validation of the input, a flower, a price and a quantity mаy not always be valid. In case of submitted invalid parameters, throw an error. The result is rounded to the second digits after the decimal point.

- checkFlowersAvailable(flower, gardenArr) - A function that accepts two parameters (string and array). There is no need for validation for input, you will always be given a string and an array. The array (gardenArr) includes all available flowers (example: ["Rose", "Lily", "Orchid"]). The function checks whether the submitted string flower is present in the array gardenArr. If present in the array, the function return respective message. Otherwise, the function return a message for a mistake.

- sellFlowers(gardenArr, space) - A function that accepts two parameters (array and number). The gardenArr array will store the names of flowers. You must remove an element from the array that is located on the space specified as a parameter. There is a need for validation for the input, an array and space may not always be valid. In case of submitted invalid parameters, throw an error. Finally, return the changed array of flowers as a string, joined by " / ".


Unit tests: 
- Initialization:
test with types object and function;

- Calculation price method:
Throws errors for invalid arguments, returns correct result in normal cases, returns correct results for 0, works with empty strings, works with negative numbers, can be called multiple times;

- Sell flowers method:
Returns correct result with an array with 3+ elements, returns correct result with an array with 2 elements, returns correct result with an array of a single element, throws errors with invalid arguments;

- Check flowers available method:
Returns correct results, returns correct results, if not available;
