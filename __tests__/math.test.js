import { add, multiply } from '../src/math';

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toEqual(3);
});

test.each([[2, 2, 4], [4, 4, 16], [2, 3, 6]])(
    'given %p and %p as arguments, returns %p',
    (firstValue, secondValue, expectedResult) => {
    expect(multiply(firstValue, secondValue)).toEqual(expectedResult);
});