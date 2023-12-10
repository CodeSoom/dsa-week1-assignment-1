// 1. 가장 익숙한 방법으로 문제를 해결해 주세요.
// const solution = (n) => parseInt(n, 2);

// 2. 이번에는 재귀 함수로 문제를 해결해 주세요.
// 3. 꼬리 재귀 함수로 바꿔보세요.
// 4. 꼬리 재귀 최적화를 통해서 최적화해 보세요.
const solution = (n) => {
  let result = 0;

  while (true) {
    if (n === '0') {
      return 0 + result;
    }

    if (n === '1') {
      return 1 + result;
    }

    const first = n[0];

    result += (2 ** (n.length - 1)) * Number(first);
    n = n.slice(1);
  }
};

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
