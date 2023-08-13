/*
1. 가장 익숙한 방법으로 문제를 해결해 주세요.
const solution = (n = '') => parseInt(n, 2);
*/

/*
2. 재귀함수
const solution = (n, answer = 0, index = 0) => {
  if (index === n.length) {
    return answer;
  }
  // eslint-disable-next-line no-param-reassign
  answer = answer * 2 + Number(n[index]);

  // eslint-disable-next-line no-param-reassign
  index += 1;

  return solution(n, answer, index);
};
 */

/*
3.꼬리 재귀 함수로 바꿔보세요.
4.꼬리 재귀 최적화를 통해서 최적화해 보세요.
 */
const solution = (n, answer = 0, index = 0) => {
  if (index === n.length) {
    return answer;
  }
  return solution(n,answer * 2 + Number(n[index]), index + 1);
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

  expect(() => solution(input))
    .not.toThrowError(new RangeError('Maximum call stack size exceeded'));
});
