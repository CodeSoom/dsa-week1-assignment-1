// 베이스 케이스를 찾는다.
// 베이스 케이스 이전의 단계를 찾는다.
// 베이스 케이스 이전의 이전 단계를 찾는다.
// 거꾸로 문제를 해결한다.

const solution = (numbers) => {
  if (!numbers.length) return 0;
  // 1. 가장 익숙한 방법으로 문제를 해결해 주세요.
  const solution1 = numbers.reduce((prev, cur) => prev + cur, 0);
  return solution1;

  // 2. 이번에는 재귀 함수로 문제를 해결해 주세요.
  const solution2 = (arr, idx = 0) => {
    if (idx >= arr.length) return 0;
    return arr[idx] + solution2(arr, idx + 1);
  };
  return solution2(numbers);

  // 3. 꼬리 재귀 함수로 바꿔보세요.
  // 4. 꼬리 재귀 최적화를 통해서 최적화해 보세요.
  const solution3 = () => {
    let sum = 0;
    let arr = [...numbers];
    while (true) {
      if (!arr.length) return sum;
      const first = arr[0];
      sum += first;
      arr = arr.slice(1);
    }
  };
  return solution3(numbers);
};

test("빈 배열은 0을 반환한다", () => {
  expect(solution([])).toBe(0);
});

test("배열의 합을 반환한다", () => {
  expect(solution([1, 2, 3, 4])).toBe(10);
  expect(solution([-1, 3, 8, 9, 10, 11])).toBe(40);
});

test("큰 배열이 입력으로 주어져도 RangeError를 던지지 않는다,", () => {
  const input = Array.from({ length: 10000 }, (_, i) => i + 1);

  expect(() => solution(input)).not.toThrowError(
    new RangeError("Maximum call stack size exceeded"),
  );
});
