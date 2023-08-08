const solution = (n) => {
  let a = 1;
  if (n === 1) return a;

  let b = 2;
  if (n === 2) return b;

  let count = 3;
  let result = 4;

  while (count < n) {
    const temp = result;
    result = a + b + result;
    a = b;
    b = temp;

    count += 1;
  }
  return result;
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
