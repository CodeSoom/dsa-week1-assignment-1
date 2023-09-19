/* eslint-disable comma-dangle */
/* eslint-disable no-plusplus */
/* eslint-disable quotes */
/* eslint-disable consistent-return */
/* eslint-disable spaced-comment */
/* eslint-disable no-unused-vars */
const solution1 = (binaryStr) => {
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

//코드숨 정답 
const solution2 = (n) => {
  // 재귀호출
  if (n === '0') return 0;
  if (n === '1') return 1;

  const first = n[0];
  return (2 ** (n.length -1)) * Number(first) + solution2(n.slice(1));
};

// 꼬리재귀
const solution3 = (n, result = 0) => {
  if (n === '0') return 0 + result;
  if (n === '1') return 1 + result;

  const first = n[0];
  return solution3(n.slice(1), result + (2 ** (n.length -1)) * Number(first));
}

// 꼬리재귀 더 간략화 
const solution4 = (n, result = 0) => {
  if (n.length === 1) return result + Number(n); // 밑의 두 줄을 이 한 줄로 처리도 가능
  // if (n === '0') return 0 + result;
  // if (n === '1') return 1 + result;

  const first = n[0];
  return solution4(n.slice(1), result + (2 ** (n.length -1)) * Number(first));
}

// 꼬리재귀 최적화
const solution = (n) => {
  let numbers = [...n]; //문자열을 파싱해서 String[]로 만든다.
  let result = 0;

  while (true) {
    if (numbers === '0') return 0 + result;
    if (numbers === '1') return 1 + result;

    const first = numbers[0]; //문자열의 n번째 접근 방법
    result += (2 ** (numbers.length -1)) * Number(first);
    numbers.slice(1); //문자열의 0번째를 제외한 나머지를 자른다.
  }
}



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
