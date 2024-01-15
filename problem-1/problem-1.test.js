// 1. 가장 익숙한 방법으로 문제를 해결해 주세요.
// const solution = (numbers) => {
//  let answer = 0;
//
//  for (let i = 0; i < numbers.length; i += 1) {
//    answer += numbers[i];
//  }
//
//  return answer;
// };

// 2. 이번에는 재귀 함수로 문제를 해결해 주세요.
// const solution = (numbers) => {
//  // Base Case
//  if (numbers.length === 0) {
//    return 0;
//  }
//
//  // Recursive Case
//  return numbers.pop() + solution(numbers);
// };

// 3. 꼬리 재귀 함수로 바꿔보세요.
// -> Maximum call stack size exceeded 발생..
// const solution = (numbers, acc = 0) => {
//  if (numbers.length === 0) {
//    return acc;
//  }
//
//  // return solution(numbers.slice(0, numbers.length - 1), acc + numbers[numbers.length - 1]);
//  return solution(numbers, acc + numbers.pop());
// };

// 4. 꼬리 재귀 최적화를 통해서 최적화해 보세요.
const solution = (numbers) => {
  // 1) 계속해서 바뀌는 값을 변수로 선언한다.
  let acc = 0;
  let index = 0;

  // 3) 반복문을 만든다.
  while (index < numbers.length) {
    // 2) 재귀 함수 호출로 값을 변경하는 대신에 변수의 값을 할당해서 변경한다.
    acc = acc + numbers[index];
    index += 1;
  }

  return acc;
};

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
