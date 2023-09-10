/* eslint-disable comma-dangle */
/* eslint-disable no-plusplus */
/* eslint-disable quotes */
/* eslint-disable consistent-return */
/* eslint-disable spaced-comment */
/* eslint-disable no-unused-vars */
const solution1 = (numbers) => {
  //편한 방법
  if (numbers.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

const solution = (numbers) => {
  // 재귀 함수
  if (numbers.length === 0) return 0;
  const first = numbers[0];
  const sliceArr = numbers.slice(1);
  return first + solution(sliceArr); //콜 스택 사이즈를 벗어남.
};

const solution3 = (numbers) => {
  // 꼬리 재귀함수
  if (numbers.length === 0) return 0;
};

const solution4 = (numbers) => {
  // 꼬리 재귀함수 최적화
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
