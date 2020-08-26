import sum from '../src/sum';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toEqual(3);
});

const cases = [[2, 2, 4], [4, 4, 8], [2, -2, 0]]
test.each(cases)(
    'given %p and %p as arguments, returns %p',
    (firstArg, secondArg, expectedResult) => {
    expect(sum(firstArg, secondArg)).toEqual(expectedResult);
  });