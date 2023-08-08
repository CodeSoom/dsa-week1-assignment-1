//1. 가장 익숙한 방법으로 문제를 해결해 주세요.
//2. 이번에는 재귀 함수로 문제를 해결해 주세요.
const solution = (n) => {
  if (n <= -1) {
    return 0;
  } else if (n === 0 || n === 1) {
    return n;
  } else {
    return solution(n - 1) + solution(n - 2);
  }
};

test("음수가 주어지면 0을 반환한다", () => {
  expect(solution(-1)).toBe(0);
});

test("0부터 1까지는 정해진 수를 반환한다", () => {
  expect(solution(0)).toBe(0);
  expect(solution(1)).toBe(1);
});

test("2이상 주어지면 앞 두 항의 합을 반환한다", () => {
  expect(solution(2)).toBe(1);
  expect(solution(3)).toBe(2);
  expect(solution(4)).toBe(3);
  expect(solution(5)).toBe(5);
  expect(solution(6)).toBe(8);
});

test("큰 입력이 주어져도 RangeError를 던지지 않는다", () => {
  const input = 100000;

  expect(() => solution(input)).not.toThrowError(
    new RangeError("Maximum call stack size exceeded")
  );
});
