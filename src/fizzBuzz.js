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

export function convertNumbersTo100() {
    let convertedNumbersTo100 = [];
    for (let i = 1; i <= 100; i++) {
        convertedNumbersTo100.push(fizzBuzzConvertNumber(i));
    }
    return convertedNumbersTo100.join();
}