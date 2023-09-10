const solution1 = (a, b) => {
  //내가 아는 방법
  let n = 0;
  let tmp = 0;

  if (a < b) {
    tmp = a;
    a = b;
    b = tmp;
  }

  while (b != 0) {
    n = a % b;
    a = b;
    b = n;
  }
  return a;
};

const solution = (a, b) => {
  //재귀호출
  if (b == 0) {
    return a;
  } else {
    return solution(b, a % b);
  }
};

test("최대 공약수를 반환한다", () => {
  expect(solution(4, 12)).toBe(4);
  expect(solution(3, 7)).toBe(1);
  expect(solution(16, 72)).toBe(8);
  expect(solution(9, 12)).toBe(3);
});

test("큰 입력이 주어져도 RangeError를 던지지 않는다", () => {
  const a = Number.MAX_VALUE;
  const b = 1213;

  expect(() => solution(a, b)).not.toThrowError(
    new RangeError("Maximum call stack size exceeded")
  );
});
