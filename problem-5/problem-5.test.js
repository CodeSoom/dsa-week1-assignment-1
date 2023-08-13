/*
1. 가장 익숙한 방법
const solution = (a = 0, b = 0) => {
  let result = 0;
  while ((a % b) > 0) {
    result = a % b;
    // eslint-disable-next-line no-param-reassign
    a = b;
    // eslint-disable-next-line no-param-reassign
    b = result;
  }
  return b;
};
 */

// 2. 재귀 => 모르겠음

/*
3. 꼬리 재귀 함수로 바꿔보세요.
4. 꼬리 재귀 최적화를 통해서 최적화해 보세요.
 */
const solution = (a = 0, b = 0) => (b ? solution(b, a % b) : Math.abs(a));

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
