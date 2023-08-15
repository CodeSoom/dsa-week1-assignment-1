// [1] 가장 익숙한 방법으로
// const solution = (n) => n.toString(2);

// [2] 재귀 함수로 <- 모르겠음

// [3] 꼬리 재귀 함수로
/*
const solution = (n, cnt = 0, sum = "0") => {
  if (n === cnt) {
    return sum;
  }

  sum = `${+sum + 1}`;

  while (sum.includes("2")) {
    const arr = ["", ...sum];
    const twoIndex = arr.indexOf("2");
    arr[twoIndex] = "0";
    arr[twoIndex - 1] = +arr[twoIndex - 1] + 1;
    sum = arr.join("");
  }

  cnt += 1;
  return solution(n, cnt, sum);
};
*/

// [4] 꼬리 재귀 최적화
/*
const solution = (n) => {
  let sum = '0';

  for (let i = 0; i < n; i += 1) {
    sum = `${+sum + 1}`;

    while (sum.includes('2')) {
      const arr = ['', ...sum];
      const twoIndex = arr.indexOf('2');
      arr[twoIndex] = '0';
      arr[twoIndex - 1] = +arr[twoIndex - 1] + 1;
      sum = arr.join('');
    }
  }
  return sum;
};
*/

// 강의 해설 --------------------------------------------------------------------------
// [재귀함수로]
// const solution = (n) => {
//   if (n === 0) return '0';
//   if (n === 1) return '1';

//   const quentient = Math.floor(n / 2);
//   const remainder = `${n % 2}`;

//   return solution(quentient) + remainder;
// };

// [꼬리 재귀함수로]
// const solution = (n, result = '') => {
//   if (n === 0) return `0${result}`;
//   if (n === 1) return `1${result}`;

//   const quentient = Math.floor(n / 2);
//   const remainder = `${n % 2}`;

//   return solution(quentient, remainder + result);
// };

// [꼬리재귀 최적화]
const solution = (n) => {
  let remainder = '';

  while (true) {
    if (n === 0) return `0${remainder}`;
    if (n === 1) return `1${remainder}`;
    remainder = `${n % 2}${remainder}`;
    n = Math.floor(n / 2);
  }
};

test('이진수 문자열을 반환한다', () => {
  expect(solution(0)).toBe('0');
  expect(solution(1)).toBe('1');
  expect(solution(2)).toBe('10');
  expect(solution(3)).toBe('11');
  expect(solution(4)).toBe('100');
  expect(solution(5)).toBe('101');
  expect(solution(6)).toBe('110');
  expect(solution(7)).toBe('111');
  expect(solution(8)).toBe('1000');
});

test('큰 입력이 주어져도 RangeError를 던지지 않는다', () => {
  const input = Number.MAX_VALUE;

  expect(() => solution(input)).not.toThrowError(
    new RangeError('Maximum call stack size exceeded'),
  );
});
