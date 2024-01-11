// const solution = (binaryString) => {
//  let decimalNumber = 0;
//  for (let bitIndex = 0; bitIndex < binaryString.length; bitIndex += 1) {
//    const currentBit = parseInt(binaryString[bitIndex], 10);
//    const bitWeight = 2 ** (binaryString.length - 1 - bitIndex);
//
//    const currentBitValue = currentBit * bitWeight;
//    decimalNumber += currentBitValue;
//  }
//
//  return decimalNumber;
// };

// const solution = (
//  binaryString,
//  currentIndex = 0,
//  bitWeight = binaryString.length - 1,
// ) => {
//  if (binaryString === '0') {
//    return 0;
//  }
//
//  if (binaryString === '1') {
//    return 1;
//  }
//
//  if (bitWeight < 0) {
//    return 0;
//  }
//
//  const currentBit = parseInt(binaryString[currentIndex], 10);
//  const currentBitValue = (2 ** bitWeight) * currentBit;
//
//  return currentBitValue + solution(
//    binaryString,
//    currentIndex + 1,
//    bitWeight - 1,
//  );
// };

const solution = (
  binaryString,
  currentIndex = 0,
  bitWeight = binaryString.length - 1,
  decimalNumber = 0,
) => {
  if (binaryString === '0') {
    return 0;
  }

  if (binaryString === '1') {
    return 1;
  }

  if (bitWeight < 0) {
    return decimalNumber;
  }

  return solution(
    binaryString,
    currentIndex + 1,
    bitWeight - 1,
    decimalNumber + (2 ** bitWeight) * parseInt(binaryString[currentIndex], 10),
  );
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
