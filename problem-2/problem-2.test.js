// const solutionRecursive = (n) => {
//   if (n <= 0) {
//     return 0;
//   }

//   if (n === 1) {
//     return 1;
//   }

//   return solutionRecursive(n - 2) + solutionRecursive(n - 1);
// };

// const solutionTailRecursive = (n, prv = 0, cur = 1) => {
//   if (n <= 0) {
//     return prv;
//   }

//   if (n === 1) {
//     return cur;
//   }

//   return solutionTailRecursive(n - 1, cur, prv + cur);
// };

const solution = (n) => {
  let prv = 0;
  let cur = 1;
  let tmp = 1;
  let counter = n;

  while (true) {
    if (counter <= 0) {
      return prv;
    }

    if (counter === 1) {
      return cur;
    }

    tmp = prv + cur;
    prv = cur;
    cur = tmp;
    counter -= 1;
  }
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
