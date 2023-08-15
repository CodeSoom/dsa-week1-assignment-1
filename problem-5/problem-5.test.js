// [1] 가장 익숙한 방법
// [3] 꼬리 재귀 함수로
// const solution = (a, b) => {
//   const rest = b % a;
//   if (rest === 0 || Number.isNaN(rest)) {
//     return a;
//   }

//   return solution(rest, a);
// };

// [2] 재귀 함수로
// 모르겠음

// [4] 꼬리 재귀 최적화
// const solution = (smaller, bigger) => {
//   let a = smaller;
//   let b = bigger;
//   let rest;

//   while (rest !== 0) {
//     rest = a % b;
//     a = b;
//     b = rest;
//   }

//   return a;
// };

// 강의 해설 --------------------------------------------------------------------------
// 나누는 수 % 나머지
// 93 % 155 // rest = 93
// 155 % 93 // rest = 62
// 93 % 62 // rest = 31
// 62 % 31 // rest = 0

// [꼬리재귀함수로]
// const solution = (a, b) => {
//   if (a % b === 0) {
//     return b;
//   }

//   return solution(b, a % b);
// };

// [꼬리재귀 최적화]
const solution = (a, b) => {
  while (true) {
    if (a % b === 0) {
      return b;
    }
    const rest = a % b;
    a = b;
    b = rest;
  }
};

test('최대 공약수를 반환한다', () => {
  expect(solution(93, 155)).toBe(31);
  expect(solution(4, 12)).toBe(4);
  expect(solution(3, 7)).toBe(1);
  expect(solution(16, 72)).toBe(8);
  expect(solution(9, 12)).toBe(3);
});

test('큰 입력이 주어져도 RangeError를 던지지 않는다', () => {
  const a = Number.MAX_VALUE;
  const b = 1213;

  expect(() => solution(a, b))
    .not.toThrowError(new RangeError('Maximum call stack size exceeded'));
});
