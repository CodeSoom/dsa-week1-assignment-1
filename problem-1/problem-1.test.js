const EMPTY_ARRAY_LENGTH = 0;
const SHOULD_CHUNK_SIZE = 20;
const INITIALIZE_NUMBER = 0;

/*

1. 가장 익숙한 방법으로 문제를 해결해 주세요.
const solution = (numbers) => {
  if (numbers.length === EMPTY_ARRAY_LENGTH) {
    return EMPTY_ARRAY_LENGTH;
  }
  return numbers.reduce((acc, current) => acc + current, INITIALIZE_NUMBER);
};
*/

/*
2. 이번에는 재귀 함수로 문제를 해결해 주세요
const solution = (numbers) => {
  if (numbers.length === EMPTY_ARRAY_LENGTH) {
    return EMPTY_ARRAY_LENGTH;
  }

  if (numbers.length <= SHOULD_CHUNK_SIZE) {
    // eslint-disable-next-line no-use-before-define
    return recursion(numbers);
  }

  // eslint-disable-next-line no-use-before-define
  const chunkNumbers = chunk(numbers, 10);

  // eslint-disable-next-line no-use-before-define
  return chunkNumbers.reduce((acc, current) => acc + recursion(current), INITIALIZE_NUMBER);
};

const recursion = (numbers) => {
  if (numbers.length === EMPTY_ARRAY_LENGTH) {
    return EMPTY_ARRAY_LENGTH;
  }

  return numbers[0] + solution(numbers.slice(1));
};

const chunk = (data = [], size =1) => {
  const arr = [];

  for (let i = 0; i < data.length; i += size) {
    arr.push(data.slice(i, i + size));
  }

  return arr;
};
 */

/*
3. 꼬리 재귀 함수로 바꿔보세요.
4. 꼬리 재귀 최적화를 통해서 최적화해 보세요.
 */
const solution = (numbers) => {
  if (numbers.length === EMPTY_ARRAY_LENGTH) {
    return EMPTY_ARRAY_LENGTH;
  }

  // eslint-disable-next-line no-use-before-define
  return recursion(numbers, INITIALIZE_NUMBER);
};

const recursion = (numbers, acc, index = 0) => {
  if (index === numbers.length) {
    return acc;
  }

  return recursion(numbers, acc + numbers[index], index + 1);
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
