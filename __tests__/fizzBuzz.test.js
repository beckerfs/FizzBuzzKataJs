import { fizzBuzzConvertNumber, convertNumbersTo100 } from "../src/fizzBuzz";

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

test('returns converted numbers up to 100', () => {
    let expected = "1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz,16,17,Fizz,19,Buzz,Fizz,22,23,Fizz,Buzz,26,Fizz,28,29,FizzBuzz,31,32,Fizz,34,Buzz,Fizz,37,38,Fizz,Buzz,41,Fizz,43,44,FizzBuzz,46,47,Fizz,49,Buzz,Fizz,52,53,Fizz,Buzz,56,Fizz,58,59,FizzBuzz,61,62,Fizz,64,Buzz,Fizz,67,68,Fizz,Buzz,71,Fizz,73,74,FizzBuzz,76,77,Fizz,79,Buzz,Fizz,82,83,Fizz,Buzz,86,Fizz,88,89,FizzBuzz,91,92,Fizz,94,Buzz,Fizz,97,98,Fizz,Buzz";

    expect(convertNumbersTo100()).toEqual(expected);
});