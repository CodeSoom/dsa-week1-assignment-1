/* eslint-disable comma-dangle */
/* eslint-disable no-plusplus */
/* eslint-disable quotes */
/* eslint-disable consistent-return */
/* eslint-disable spaced-comment */
/* eslint-disable no-unused-vars */

const solution = (n) => {
  //내가 아는 방법
  if (n <= 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 1;
  }
  const arr = [1, 1];
  for (let i = 2; i < n; i++) {
    const nextFib = arr[i - 1] + arr[i - 2];
    arr.push(nextFib);
  }
  return arr[n - 1];
};

const solution2 = (n) => {
  //재귀 함수
  if (n < 0) return 0;
  if (n === 1 || n === 2) return 1;
  return solution(n - 1) + solution(n - 2);
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

// test("큰 입력이 주어져도 RangeError를 던지지 않는다", () => {
//   const input = 100000;

//   expect(() => solution(input)).not.toThrowError(
//     new RangeError("Maximum call stack size exceeded")
//   );
// });
