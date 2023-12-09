// 1. 가장 익숙한 방법으로 문제를 해결해 주세요.
const solution = (n) => {
  const list = [1, 1];
  let count = 2;

  while (count <= n) {
    count += 1;
    const sum = list.slice(-2).reduce((a, b) => a + b, 0);
    list.push(sum);
  }

  return n > 0 ? list[n - 1] : 0;
};

// 2. 이번에는 재귀 함수로 문제를 해결해 주세요.
// 4번째 테스트 통과 못함
// const solution = (n) => {
//   if (n < 0) {
//     return 0;
//   }

//   if (n === 0 || n === 1) {
//     return n;
//   }

//   return solution(n - 1) + solution(n - 2);
// };

// 3. 꼬리 재귀 함수로 바꿔보세요.
// 4. 꼬리 재귀 최적화를 통해서 최적화해 보세요.
// 1번 풀이와 동일

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
