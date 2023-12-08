// 1. 가장 익숙한 방법으로 문제를 해결해 주세요.
const solution = (numbers) => {
  numbers.reduce((a, b) => a + b, 0);
};

// 2. 이번에는 재귀 함수로 문제를 해결해 주세요.
// 3번째 테스트 통과 못함
// const solution = (numbers, index = 0) => {
//   if (index === numbers.length) {
//     return 0;
//   } else {
//     return numbers[index] + solution(numbers, index + 1);
//   }
// }

// 3. 꼬리 재귀 함수로 바꿔보세요.
// 4. 꼬리 재귀 최적화를 통해서 최적화해 보세요.
// 1번 풀이와 동일

test('빈 배열은 0을 반환한다', () => {
  expect(solution([])).toBe(0);
});

test('배열의 합을 반환한다', () => {
  expect(solution([1, 2, 3, 4])).toBe(10);
  expect(solution([-1, 3, 8, 9, 10, 11])).toBe(40);
});

test('큰 배열이 입력으로 주어져도 RangeError를 던지지 않는다', () => {
  const input = Array.from({ length: 10000 }, (_, i) => i + 1);

  expect(() => solution(input))
    .not.toThrowError(new RangeError('Maximum call stack size exceeded'));
});
