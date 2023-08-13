// 2. 동적 프로그래밍
const solution = (n) => {
  const cache = [0];

  cache[1] = 1;
  cache[2] = 2;
  cache[3] = 4;

  // eslint-disable-next-line no-plusplus
  for (let index = 4; index <= n; index++) {
    cache[index] = cache[index - 3] + cache[index - 2] + cache[index - 1];
  }

  return cache[n];
};

test('계단에 오를 수 있는 가지 수를 반환한다', () => {
  expect(solution(1)).toBe(1);
  expect(solution(2)).toBe(2);
  expect(solution(3)).toBe(4);
  expect(solution(4)).toBe(7);
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
