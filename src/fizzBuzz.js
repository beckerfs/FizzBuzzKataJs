export function fizzBuzzConvertNumber(numberToConvert) {
    if (numberToConvert % 3 === 0 && numberToConvert % 5 === 0) {
        return "FizzBuzz";
    }
    if (numberToConvert % 3 === 0) {
        return "Fizz";
    }
    if (numberToConvert % 5 === 0) {
        return "Buzz";
    }
    return `${numberToConvert}`;
}