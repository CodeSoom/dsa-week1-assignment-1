// 1 // 1
// 2 : 1(2+'0') 1(1+'1') // 2
// 3 : 1(3+'0') 1(2+'1') 2(1+'2') // 4
// 4 : 1(3+'1') 2(2+'2') 4(1+'3') // 7
// 5 : 2(3+'2') 4(2+'3') 7(1+'4') // 13

// [재귀함수로]
// : 중복된 계산이 이뤄지기 때문에 비효율적임. -> 때문에 다이나믹 프로그래밍으로 바꿔야 함
// const solution = (n) => {
//   if (n < 0) {
//     return 0;
//   }
//   if (n === 0) return 1;
//   return solution(n - 3) + solution(n - 2) + solution(n - 1);
// };

// [다이나믹 프로그래밍 으로]
// : 큰 문제를 작은 문제로 나누어 해결하고 작은 문제의 결과를 재사용하면서 중복 계산을 피하며 작업을 줄여 효율적으로 문제를 해결하는 방법
const solution = (n, memo = {}) => {
  if (n < 0) {
    return 0;
  }
  if (n === 0) return 1;
  if (!memo[n]) {
    memo[n] = solution(n - 3, memo) + solution(n - 2, memo) + solution(n - 1, memo);
  }
  return memo[n];
};

test('계단에 오를 수 있는 가지 수를 반환한다', () => {
  expect(solution(1)).toBe(1); // {0:1}
  expect(solution(2)).toBe(2); // {0:1, 1:1}
  expect(solution(3)).toBe(4); // {0:1, 1:1, 2:2}
  expect(solution(4)).toBe(7); // {}
  expect(solution(5)).toBe(13);
  expect(solution(6)).toBe(24);
  expect(solution(7)).toBe(44);
  expect(solution(8)).toBe(81);
  expect(solution(9)).toBe(149);
  expect(solution(10)).toBe(274);
});

test('큰 입력이 주어져도 시간안에 실행된다', async () => {
  expect(solution(40)).toBe(23837527729);
});
