const solution = (n) => {
  // 1. 가장 익숙한 방법으로 문제를 해결해 주세요.
  const solution1 = parseInt(n, 2);

  return solution1;
};

test("10진수 숫자를 반환한다", () => {
  expect(solution("0")).toBe(0);
  expect(solution("1")).toBe(1);
  expect(solution("10")).toBe(2);
  expect(solution("11")).toBe(3);
  expect(solution("100")).toBe(4);
  expect(solution("101")).toBe(5);
  expect(solution("110")).toBe(6);
  expect(solution("111")).toBe(7);
  expect(solution("1000")).toBe(8);
});

test("큰 입력이 주어져도 RangeError를 던지지 않는다", () => {
  const input = Number.MAX_VALUE.toString(2);

  expect(() => solution(input)).not.toThrowError(
    new RangeError("Maximum call stack size exceeded"),
  );
});
