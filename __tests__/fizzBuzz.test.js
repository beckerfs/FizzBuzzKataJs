import { fizzBuzzConvertNumber } from "../src/fizzBuzz";

test.each([[1, "1"], [2, "2"], [4, "4"], [7, "7"], [8, "8"]])(
    'given %p (a number not divisible by 3 or 5) as argument, returns %p (number as string)', (numberToConvert, expectedValue) => {
    
    expect(fizzBuzzConvertNumber(numberToConvert)).toEqual(expectedValue);
});

test.each([3, 6, 9, 12])(
    'given %p (a number divisible by 3) as argument, returns "Fizz"', (numberToConvert) => {
    
    expect(fizzBuzzConvertNumber(numberToConvert)).toEqual("Fizz");
});

test.each([5, 10, 20, 25])(
    'given %p (a number divisible by 5) as argument, returns "Buzz"', (numberToConvert) => {
    
    expect(fizzBuzzConvertNumber(numberToConvert)).toEqual("Buzz");
});

test.each([15, 30, 45, 60])(
    'given %p (a number divisible by 3 and 5) as argument, returns "FizzBuzz"', (numberToConvert) => {
    
    expect(fizzBuzzConvertNumber(numberToConvert)).toEqual("FizzBuzz");
});
