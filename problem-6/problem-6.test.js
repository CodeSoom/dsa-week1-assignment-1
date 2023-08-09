//1. 재귀 함수로 문제를 해결해 주세요.
{
  /*const solution = (n) => {
  if (n === 1) {
    return 1;
  }

  if (n === 2) {
    return 2;
  }

  if (n === 3) {
    return 4;
  }

  return solution(n - 1) + solution(n - 2) + solution(n - 3);
};*/
}

//2. 다이나믹 프로그래밍으로 최적화 해주세요.
const solution = (n, memo = []) => {
  if (n === 1) {
    return 1;
  }

  if (n === 2) {
    return 2;
  }

  if (n === 3) {
    return 4;
  }

  if (!memo[n]) {
    memo[n] =
      solution(n - 1, memo) + solution(n - 2, memo) + solution(n - 3, memo);
  }

  return memo[n];
};

test("계단에 오를 수 있는 가지 수를 반환한다", () => {
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

test("큰 입력이 주어져도 시간안에 실행된다", async () => {
  expect(solution(40)).toBe(23837527729);
});
