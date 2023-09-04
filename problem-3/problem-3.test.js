const solution4 = (n) => {
  return n.toString(2)
};

const solution2 = (n, result = '') => {
  if(n === 0) {
    return '0' +  result;
  }
  if(n === 1) {
    return '1' + result;
  }
  const quentiant = Math.floor(n / 2);
  const remainder = `${n % 2}`;
  return solution(quentiant, remainder + result);

};

const solution = (n) => {
  let result = '';

  while(true){
    if(n === 0) {
      return 0 +  result;
    }
    if(n === 1) {
      return 1 + result;
    }
    const remainder = `${n % 2}`;
    n = Math.floor(n / 2);
    result = remainder + result;
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

  expect(() => solution(input))
    .not.toThrowError(new RangeError('Maximum call stack size exceeded'));
});
