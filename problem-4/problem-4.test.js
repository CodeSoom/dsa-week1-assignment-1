//1. 가장 익숙한 방법으로 문제를 해결해 주세요.
const solution1 = (binaryString) => {
  let result = 0;

  for(let i = 0; i < binaryString.length; i++){
    const binaryNumber = parseInt(binaryString[i], 10),
          index = binaryString.length - (i + 1);

    result += binaryNumber * (2 ** index);
  }
 
  return result;
 };

// 2. 이번에는 재귀 함수로 문제를 해결해 주세요.
const solution2 = (binaryString, binaryIndex = 0, stringIndex = binaryString.length - 1) => {
  if (binaryString === '0' || stringIndex < 0) return 0;
  if (binaryString === '1') return 1;

  const binaryNumber = parseInt(binaryString[binaryIndex], 10),
        result = binaryNumber * ( 2 ** stringIndex);

  return result + solution2(binaryString, binaryIndex + 1, stringIndex - 1);
};

// 3. 꼬리 재귀 함수로 바꿔보세요.
const solution3 = (binaryString, binaryIndex = 0, stringIndex = binaryString.length - 1, result = 0) => {
  if (binaryString === '0') return 0;
  if (binaryString === '1') return 1;
  if (stringIndex < 0) return result;

  return solution3(binaryString, binaryIndex + 1, stringIndex - 1, result + (2 ** stringIndex) * parseInt(binaryString[binaryIndex], 10));
};

// 4. 꼬리 재귀 최적화를 통해서 최적화해 보세요.
const solution = (binaryString) => {
  let result = 0,
      stringIndex = binaryString.length - 1,
      binaryIndex = 0;

  while (true) {
    if (binaryString === '0' || stringIndex < 0) {
      return 0 + result;
    }

    if (binaryString === '1') {
      return 1 + result;
    }
    result += (2 ** stringIndex) * parseInt(binaryString[binaryIndex], 10);

    stringIndex--;
    binaryIndex++;
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
