const INITIALIZE_NUMBER = 0;
const SHOULD_CHUNK_SIZE = 20;

/*
1. 가장 익숙한 방법으로 문제를 해결해 주세요.
const solution = (n) => {
  if (n < 0) {
    return 0;
  }

  if (n <= 1) {
    return n;
  }

  let currentIndex = 0;
  let firstIndex = 1;
  let result = 0;

  // eslint-disable-next-line no-plusplus
  for (let index = 2; index <= n; index++) {
    currentIndex = firstIndex + result;

    result = firstIndex;

    firstIndex = currentIndex;
  }
  return currentIndex;
};
 */
/*
2. 이번에는 재귀 함수로 문제를 해결해 주세요
const solution = (n) => {
  if (n < 0) {
    return 0;
  }

  if (n <= 1) {
    return n;
  }

  if (n < SHOULD_CHUNK_SIZE) {
    // eslint-disable-next-line no-use-before-define
    return recursion(n);
  }

  // eslint-disable-next-line no-use-before-define
  const chunkNumbers = chunk(n, SHOULD_CHUNK_SIZE);

  // eslint-disable-next-line no-use-before-define
  return chunkNumbers.reduce((acc, current) => acc + recursion(current), INITIALIZE_NUMBER);
};

const recursion = (n) => {
  if (n < 0) {
    return 0;
  }

  if (n <= 1) {
    return n;
  }

  return solution(n - 2) + solution(n - 1);
};

const chunk = (data = 0, size = 1) => {

  if (data < size) {
    return data;
  }

  const arr = [];
  // eslint-disable-next-line no-shadow
  const chunk = [];
  for (let i = 0; i < data.length; i += size) {
    chunk.push(i);
    if (i % size === 0) {
      arr.push(chunk);
      chunk.length = 0;
    }
  }

  return arr;
};
 */

/*
3.꼬리 재귀 함수로 바꿔보세요.
4.꼬리 재귀 최적화를 통해서 최적화해 보세요.
 */
const solution = (n, prev = 0, result = 1) => {
  if (n < INITIALIZE_NUMBER) {
    return INITIALIZE_NUMBER;
  }

  if (n <= 1) {
    return result;
  }

  return solution(n - 1, result, prev + result);
};

test('음수가 주어지면 0을 반환한다', () => {
  expect(solution(-1)).toBe(0);
});

test('0부터 1까지는 정해진 수를 반환한다', () => {
  expect(solution(0)).toBe(0);
  expect(solution(1)).toBe(1);
});

test('2이상 주어지면 앞 두 항의 합을 반환한다', () => {
  expect(solution(2)).toBe(1);
  expect(solution(3)).toBe(2);
  expect(solution(4)).toBe(3);
  expect(solution(5)).toBe(5);
  expect(solution(6)).toBe(8);
});

test('큰 입력이 주어져도 RangeError를 던지지 않는다', () => {
  const input = 100000;

  expect(() => solution(input))
    .not.toThrowError(new RangeError('Maximum call stack size exceeded'));
});
