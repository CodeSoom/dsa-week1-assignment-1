// [1] 가장 익숙한 방법
// [3] 꼬리 재귀 함수로
// const solution = (n, cnt = 2, a = 0, b = 1) => {
//   if (n === 0 || n < 0) {
//     return 0;
//   }

//   if (n === 1) {
//     return 1;
//   }

//   if (cnt === n) {
//     return a + b;
//   }

//   return solution(n, cnt+1, b, a + b);
// };

// [2] 재귀 함수로 <- 모르겠음

// [4] 꼬리 재귀 함수 최적화
// const solution = (n) => {
//   if (n === 0 || n < 0) {
//     return 0;
//   }

//   if (n === 1) {
//     return 1;
//   }

//   let cnt = 1;
//   let a = 0;
//   let b = 1;
//   let c = 0;

//   while (cnt !== n) {
//     c = a + b;
//     a = b;
//     b = c;

//     cnt += 1;
//   }

//   return b;
// };

// 강의 해설 --------------------------------------------------------------------------
// [재귀함수로]
/*
const solution = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return solution(n - 2) + solution(n - 1);
};
*/

// [꼬리재귀함수]
/*
const solution = (n, current = 2, a = 0, b = 1) => {
  if (n === 0 || n < 0) return 0;
  if (n === 1) return 1;
  if (current === n) {
    return a + b;
  }
  return solution(n, current + 1, b, a + b);
};
*/

// [꼬리재귀함수 최적화]
const solution = (n) => {
  if (n === 0 || n < 0) return 0;
  if (n === 1) return 1;

  let current = 2;
  let a = 0;
  let b = 1;

  while (true) {
    if (current === n) {
      return a + b;
    }
    const temp = a;
    a = b;
    b = temp + b;
    // [a, b] = [b, temp + b];

    current += 1;
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

  expect(() => solution(input)).not.toThrowError(
    new RangeError('Maximum call stack size exceeded'),
  );
});
