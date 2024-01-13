/*
const solution = (num1, num2) => {
  let smallerNumber = num1;
  let largerNumber = num2;

  while (true) {
    const remainder = largerNumber % smallerNumber;

    if (remainder === 0) {
      return smallerNumber;
    }

    largerNumber = smallerNumber;
    smallerNumber = remainder;
  }
};
*/

const solution = (smallerNumber, largerNumber, remainder = largerNumber % smallerNumber) => {
  if (remainder === 0) {
    return smallerNumber;
  }

  return solution(remainder, smallerNumber);
};

test('최대 공약수를 반환한다', () => {
  expect(solution(4, 12)).toBe(4);
  expect(solution(3, 7)).toBe(1);
  expect(solution(16, 72)).toBe(8);
  expect(solution(9, 12)).toBe(3);
});

test('큰 입력이 주어져도 RangeError를 던지지 않는다', () => {
  const a = Number.MAX_VALUE;
  const b = 1213;

  expect(() => solution(a, b))
    .not.toThrowError(new RangeError('Maximum call stack size exceeded'));
});
