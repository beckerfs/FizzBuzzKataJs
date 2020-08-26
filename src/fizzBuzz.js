export function fizzBuzzConvertNumber(numberToConvert) {
    if (numberToConvert % 3 === 0) {
        return "Fizz";
    }
    return `${numberToConvert}`;
}