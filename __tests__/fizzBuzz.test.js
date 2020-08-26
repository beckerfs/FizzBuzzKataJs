import { fizzBuzzConvertNumber } from "../src/fizzBuzz";

test.each([[1, "1"], [2, "2"], [4, "4"], [6, "6"], [8, "8"]])(
    'given %p (a number not divisible by 3 or 5) as argument, returns %p (number as string)', (numberToConvert, expectedValue) => {
    
    expect(fizzBuzzConvertNumber(numberToConvert)).toEqual(expectedValue);
});

test.each([3, 6, 9, 12])(
    'given %p (a number divisible by 3) as argument, returns "Fizz"', (numberToConvert) => {
    
    expect(fizzBuzzConvertNumber(numberToConvert)).toEqual("Fizz");
});
