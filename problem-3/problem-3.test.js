/* eslint-disable comma-dangle */
/* eslint-disable no-plusplus */
/* eslint-disable quotes */
/* eslint-disable consistent-return */
/* eslint-disable spaced-comment */
/* eslint-disable no-unused-vars */
const solution1 = (n) => {
  //내가 생각한 방법
  let str = "";
  let flag = n;
  if (n === 0) return "0";

  while (flag > 0) {
    str += flag % 2;
    flag = Math.floor(flag / 2);
  }
  return str.split("").reverse().join("");
};
//재귀 함수
const solution = (n) => {
  const flag = n;
  if (n === 0) return "0";
  if (n === 1) return "1";
  if (flag > 0) {
    return `${solution(Math.floor(flag / 2))}${n % 2}`;
  }
};

// 재귀꼬리 함수

test("이진수 문자열을 반환한다", () => {
  expect(solution(0)).toBe("0");
  expect(solution(1)).toBe("1");
  expect(solution(2)).toBe("10");
  expect(solution(3)).toBe("11");
  expect(solution(4)).toBe("100");
  expect(solution(5)).toBe("101");
  expect(solution(6)).toBe("110");
  expect(solution(7)).toBe("111");
  expect(solution(8)).toBe("1000");
});

test("큰 입력이 주어져도 RangeError를 던지지 않는다", () => {
  const input = Number.MAX_VALUE;

  expect(() => solution(input)).not.toThrowError(
    new RangeError("Maximum call stack size exceeded")
  );
});
