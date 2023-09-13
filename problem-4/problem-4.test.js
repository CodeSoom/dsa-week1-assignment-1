const solution = (input) => {
  if (!input) {
    throw new TypeError('올바른 2진수 문자열이 아닙니다.');
  }

  let result = 0;
  let number = 0;

  for (let index = input.length - 1; index >= 0; index -= 1) {
    result += parseInt(input.charAt(index), 10) * (2 ** number);
    number += 1;
  }

  return result;
};

test('올바른 2진수 문자열을 입력하지 않을 경우 TypeError를 던진다', () => {
  expect(() => solution(null)).toThrowError(new TypeError('올바른 2진수 문자열이 아닙니다.'));
  expect(() => solution('')).toThrowError(new TypeError('올바른 2진수 문자열이 아닙니다.'));
  expect(() => solution()).toThrowError(new TypeError('올바른 2진수 문자열이 아닙니다.'));
});

test('10진수 숫자를 반환한다', () => {
  expect(solution('0')).toBe(0);
  expect(solution('1')).toBe(1);
  expect(solution('10')).toBe(2);
  expect(solution('11')).toBe(3);
  expect(solution('100')).toBe(4);
  expect(solution('101')).toBe(5);
  expect(solution('110')).toBe(6);
  expect(solution('111')).toBe(7);
  expect(solution('1000')).toBe(8);
});

test('큰 입력이 주어져도 RangeError를 던지지 않는다', () => {
  const input = Number.MAX_VALUE.toString(2);

  expect(() => solution(input))
    .not.toThrowError(new RangeError('Maximum call stack size exceeded'));
});
