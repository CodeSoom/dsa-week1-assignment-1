// 1. 가장 익숙한 방법
// const solution = (numbers) => {
// return numbers.reduce((acc, cur) => acc + cur, 0);
// }

// 2.재귀함수로
// const solution = (numbers, cnt = 0, sum = 0) => {
//   if (cnt === numbers.length) {
//     return sum;
//   }

//   return sum + solution(numbers, cnt + 1, numbers[cnt]);
// };

// 3.꼬리 재귀 함수로
// const solution = (numbers, cnt = 0, sum = 0) => {
//   if (cnt === numbers.length) {
//     return sum;
//   }

//   return solution(numbers, cnt + 1, numbers[cnt] + sum);
// };

// 4. 꼬리 재귀 최적화
const solution = (numbers) => {
  let cnt = 0;
  let sum = 0;

  while (true) {
    if (cnt === numbers.length) {
      return sum;
    }

    sum += numbers[cnt];
    cnt += 1;
  }
};

test("빈 배열은 0을 반환한다", () => {
  expect(solution([])).toBe(0);
});

test("배열의 합을 반환한다", () => {
  expect(solution([1, 2, 3, 4])).toBe(10);
  expect(solution([-1, 3, 8, 9, 10, 11])).toBe(40);
});

test("큰 배열이 입력으로 주어져도 RangeError를 던지지 않는다", () => {
  const input = Array.from({ length: 10000 }, (_, i) => i + 1);

  expect(() => solution(input)).not.toThrowError(
    new RangeError("Maximum call stack size exceeded")
  );
});
