// [1] 가장 익숙한 방법
// const solution = (n) => {
//   return parseInt(n, 2);
// };

// [2] 재귀 함수로
/*
const solution = (n, index = 0) => {
  if (n === '0') return 0;
  if (n === '1') return 1;
  let result = 0;

  if (index === n.length) {
    return result;
  }

  if (index > 0) {
    result += +n[index] ? 2 ** index : 0;
  } else {
    result = +n[index];
  }
  return solution(n, index + 1) + +result;
};
*/

// [3] 꼬리 재귀 함수로
// const solution = (n, sum = 0, idx = 0) => {
//   if (idx === n.length) {
//     return sum;
//   }
//   sum = sum * 2 + +n[idx];
//   idx += 1;

//   return solution(n, sum, idx);
// };

// [4] 꼬리 재귀 최적화
/*
const solution = (n) => {
  let sum = 0;
  let idx = 0;

  while (idx < n.length) {
    sum = sum * 2 + +n[idx];
    idx += 1;
  }
  return sum;
};
*/

// 강의 해설 --------------------------------------------------------------------------
// [재귀함수로]
// '10' : 2^1 *1 + 2^0 * 0 // (2)
// '11' : 2^1 *1 + 2^0 * 1 // (3)
// '100' : 2^2 *1 + 2^1 *0 + 2^0 * 0 // (4)
// '101' : 2^2 *1 + 2^1 *0 + 2^0 * 1 // (5)
// '110' : 2^2 *1 + 2^1 *1 + 2^0 * 0 // (6)
// '1000' : 2^3 *1 + 2^2 *0 + 2^1 *0 + 2^0 * 0 // (8)
/*
const solution = (n) => {
  if (n === '0') return 0;
  if (n === '1') return 1;

  const first = n[0];

  return (2 ** (n.length - 1) * Number(first)) + solution(n.slice(1));
};
*/

// [꼬리재귀함수로]
// const solution = (n, result = 0) => {
//   if (n === '0') return 0 + result;
//   if (n === '1') return 1 + result;

//   const first = n[0];

//   return solution(n.slice(1), result + (2 ** (n.length - 1) * Number(first)));
// };

// [최적화]
const solution = (n) => {
  let result = 0;

  while (true) {
    if (n === '0') return 0 + result;
    if (n === '1') return 1 + result;

    const first = n[0];
    result += (2 ** (n.length - 1) * Number(first));
    n = n.slice(1);
  }
};

test('10진수 숫자를 반환한다', () => {
  expect(solution('0')).toBe(0);
  expect(solution('1')).toBe(1);
  expect(solution('10')).toBe(2);
  expect(solution('11')).toBe(3);
  expect(solution('100')).toBe(4);
  expect(solution('101')).toBe(5);
  expect(solution('110')).toBe(6);
  expect(solution('111')).toBe(7);
  expect(solution('1000')).toBe(8);
});

test('큰 입력이 주어져도 RangeError를 던지지 않는다', () => {
  const input = Number.MAX_VALUE.toString(2);

  expect(() => solution(input)).not.toThrowError(
    new RangeError('Maximum call stack size exceeded'),
  );
});
