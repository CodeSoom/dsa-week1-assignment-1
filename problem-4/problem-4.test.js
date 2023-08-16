const solution4 = (n) => {
  return parseInt(n, 2);
};

const solution3 = (n) => {
  if(n === '0') {
    return 0;
  }
  if(n === '1') {
    return 1;
  }
  const first = n[0]
  return (2 ** (n.length - 1)) * Number(first) + solution(n.slice(1));
};

const solution2 = (n, result = 0) => {
  if(n === '0') {
    return 0 + result;
  }
  if(n === '1') {
    return 1 + result;
  }
  const first = n[0]
  return solution(n.slice(1), ((2 ** (n.length - 1)) * Number(first)) + result);
};

const solution = (n) => {
  let result = 0;

  while(true) {
    if(n === '0') {
      return 0 + result;
    }
    if(n === '1') {
      return 1 + result;
    }
    const first = n[0]
    result = ((2 ** (n.length - 1)) * Number(first)) + result;
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

  expect(() => solution(input))
    .not.toThrowError(new RangeError('Maximum call stack size exceeded'));
});
