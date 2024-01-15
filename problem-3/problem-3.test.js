// const solution = (n) => {
//  if (n === 0) {
//    return '0';
//  }
//
//  let number = n;
//  let binaryString = '';
//
//  while (number > 0) {
//    const remainder = number % 2;
//    binaryString = remainder + binaryString;
//    number = Math.floor(number / 2);
//  }
//
//  return binaryString;
// };

const solution = (n, binaryString = '') => {
  if (n === 0) {
    return '0';
  }

  if (n === 1) {
    return `1${binaryString}`;
  }

  return solution(Math.floor(n / 2), (n % 2).toString() + binaryString);
};

test('이진수 문자열을 반환한다', () => {
  expect(solution(0)).toBe('0');
  expect(solution(1)).toBe('1');
  expect(solution(2)).toBe('10');
  expect(solution(3)).toBe('11');
  expect(solution(4)).toBe('100');
  expect(solution(5)).toBe('101');
  expect(solution(6)).toBe('110');
  expect(solution(7)).toBe('111');
  expect(solution(8)).toBe('1000');
});

test('큰 입력이 주어져도 RangeError를 던지지 않는다', () => {
  const input = Number.MAX_VALUE;

  expect(() => solution(input))
    .not.toThrowError(new RangeError('Maximum call stack size exceeded'));
});
