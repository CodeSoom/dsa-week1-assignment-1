/* eslint-disable comma-dangle */
/* eslint-disable no-plusplus */
/* eslint-disable quotes */
/* eslint-disable consistent-return */
/* eslint-disable spaced-comment */
/* eslint-disable no-unused-vars */
const solution = (binaryStr) => {
  //내가 아는 방법
  if (binaryStr === "0") return 0;
  if (binaryStr === "1") return 1;
  const splitArr = binaryStr.split("").reverse();
  let result = 0;
  for (let i = 0; i <= splitArr.length; i++) {
    if (splitArr[i] === "1") {
      result += Math.pow(2, i);
    }
  }
  return result;
};

const solution2 = (binaryStr) => {
  // 재귀호출
};

test("10진수 숫자를 반환한다", () => {
  expect(solution("0")).toBe(0);
  expect(solution("1")).toBe(1);
  expect(solution("10")).toBe(2);
  expect(solution("11")).toBe(3);
  expect(solution("100")).toBe(4);
  expect(solution("101")).toBe(5);
  expect(solution("110")).toBe(6);
  expect(solution("111")).toBe(7);
  expect(solution("1000")).toBe(8);
});

test("큰 입력이 주어져도 RangeError를 던지지 않는다", () => {
  const input = Number.MAX_VALUE.toString(2);

  expect(() => solution(input)).not.toThrowError(
    new RangeError("Maximum call stack size exceeded")
  );
});
