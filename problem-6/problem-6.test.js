// const solution = (n) => {
//  if (n < 0) {
//    return 0;
//  }
//
//  if (n === 0 || n === 1) {
//    return 1;
//  }
//
//  return solution(n - 3) + solution(n - 2) + solution(n - 1);
// };

// 하향식 다이내믹 프로그래밍 (메모이제이션)

// const solution = (n, memo = []) => {
//  if (n < 0) {
//    return 0;
//  }
//  if (n === 0 || n === 1) {
//    return 1;
//  }
//
//  if (!memo[n]) {
//    memo[n] = solution(n - 3, memo) + solution(n - 2, memo) + solution(n - 1, memo);
//  }
//
//  return memo[n];
// };

// 상향식 다이내믹 프로그래밍
const solution = (n, current = 2, a = 0, b = 1, c = 1) => {
  if (n < 0) {
    return 0;
  }

  if (n === 0 || n === 1) {
    return 1;
  }

  if (n === current) {
    return a + b + c;
  }

  return solution(n, current + 1, b, c, a + b + c);
};

test('계단에 오를 수 있는 가지 수를 반환한다', () => {
  expect(solution(1)).toBe(1);
  expect(solution(2)).toBe(2);
  expect(solution(3)).toBe(4);
  expect(solution(4)).toBe(7);
  expect(solution(5)).toBe(13);
  expect(solution(6)).toBe(24);
  expect(solution(7)).toBe(44);
  expect(solution(8)).toBe(81);
  expect(solution(9)).toBe(149);
  expect(solution(10)).toBe(274);
});

test('큰 입력이 주어져도 시간안에 실행된다', async () => {
  expect(solution(40)).toBe(23837527729);
});
