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
const solution2 = (n) => {
  const flag = n;
  if (n === 0) return "0";
  if (n === 1) return "1";
  if (flag > 0) {
    return `${solution2(Math.floor(flag / 2))}${n % 2}`;
  }
};

//코드숨 정답 
//재귀호출
const solution3 = (n) => { 
  if (n === 0) return '0';
  if (n === 1) return '1';

  const quentient = Math.floor(n / 2); //소숫점 뒷자리를 꼭 버려야 함
  const remainder = `${n % 2}`;
  return solution3(quentient) + remainder;
};

//계산식 없애고 꼬리재귀최적화 하기 (꼬리재귀하면 파라미터 개수가 늘어남)
// 꼬리재귀는 작은 값부터 더한다. vs. 재귀는 마지막에 스택이 풀어지며 베이스 케이스의 값들이 더해진다. 
const solution4 = (n, result = '') => {
  if (n === 0) return '0' + result;
  if (n === 1) return '1' + result;

  const quentient = Math.floor(n / 2);
  const remainder = `${n % 2}`;
  // return solution(quentient, result  + remainder); // 5일 때 동작하지 않는다. remainder를 뒤에 붙이면
  return solution(quentient, remainder + result); // remainder를 앞에 붙이면 성공!
};

// 꼬리재귀 최적화 
const solution = (n) => {
  let result = '';
  let number = n;
  
  while (true) {
    if (number === 0) return '0' + result;
    if (number === 1) return '1' + result;

    const remainder = `${number % 2}`;
    number = Math.floor(number / 2);
    result = remainder + result;
  }
}



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
