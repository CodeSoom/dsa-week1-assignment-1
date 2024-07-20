// 1. 가장 익숙한 방법으로 문제를 해결해 주세요.
const solution1 = (numbers = []) => {
  if(numbers.length === 0) return 0;

  return numbers.reduce((acc, cur) => acc + cur, 0);
};

// 2. 이번에는 재귀 함수로 문제를 해결해 주세요.
// Maximum call stack size exceeded 오류나는데 왜 나는지 모르겠습니다
const solution2 = (numbers = []) => {
  if(numbers.length === 0) return 0;
  
  return numbers[0] + solution2(numbers.slice(1));
};

// 3. 꼬리 재귀 함수로 바꿔보세요.
// Maximum call stack size exceeded 오류나는데 왜 나는지 모르겠습니다
const solution3 = (numbers = [], acc = 0) => {
  if(numbers.length === 0) return acc;

  return solution3(numbers.slice(1), acc + numbers[0]);
}

// 4. 꼬리 재귀 최적화를 통해서 최적화해 보세요.
const solution = (numbers = []) => {
  if(numbers.length === 0) return 0;

  let acc = 0;
  for(let number of numbers){
    acc += number;
  }

  return acc;
}

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
