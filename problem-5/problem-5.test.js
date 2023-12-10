// 1. 가장 익숙한 방법으로 문제를 해결해 주세요.
// const solution = (a, b) => (b === 0 ? a : solution(b, a % b));

// 2. 이번에는 재귀 함수로 문제를 해결해 주세요.
// 3. 꼬리 재귀 함수로 바꿔보세요.
// 4. 꼬리 재귀 최적화를 통해서 최적화해 보세요.
const solution = (a, b) => {
  while (true) {
    if (a % b === 0) {
      return b;
    }

    const newA = a;
    a = b;
    b = newA % b;
  }
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
