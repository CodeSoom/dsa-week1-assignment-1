/* eslint-disable comma-dangle */
/* eslint-disable no-plusplus */
/* eslint-disable quotes */
/* eslint-disable consistent-return */
/* eslint-disable spaced-comment */
/* eslint-disable no-unused-vars */

//편한 방법
const solution1 = (numbers) => {
  if (numbers.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};
// 재귀 함수 (jin)
const solution2 = (numbers) => {
  if (numbers.length === 0) return 0;
  const first = numbers[0];
  const sliceArr = numbers.slice(1);
  return first + solution2(sliceArr); //콜 스택 사이즈를 벗어남.
};

// 코드숨 문제 풀이 과정
// 1. 베이스 케이스를 찾기
// 2. 베이스 케이스 이전의 단계를 찾기 
// 3. 베이스 케이스 이전의 이전의 단계를 찾기 
// 4. 거꾸로 문제를 해결해 나가기

// 재귀 함수 정답 (codesoom), 그러나 큰 배열이 입력으로 주어지면 콜스택 사이즈 부족 에러가 발생한다.
const solution3 = (numbers) => {
  if (numbers.length === 0) return 0;

  const [first] = numbers;
  return first + solution3(numbers.slice(1));
};

// 꼬리재귀최적화 , 그러나 js는 kotlin(tailrec 쓰면 가능)과 달리 꼬리재귀최적화를 지원하지 않음.
const solution4 = (numbers, sum = 0) => {
  if (numbers.length === 0) {
    return sum;
  }
  const [first] = numbers;
  return solution4(numbers.slice(1), sum + first);
};

// 꼬리재귀최적화를 반복문으로 변경 #함수를 리턴하지 않고 할당한다
const solution = (n) => {
  let numbers = [...n]; //인자를 그대로 사용하지 않고 변수에 ...으로 풀어서 사용한다.
  let sum = 0;

  while(true) {
    if (numbers.length === 0) { //numbers가 없으면 break;
      return sum;
    }

    const [first] = numbers;
    sum = sum + first;
    numbers = numbers.slice(1);
  }
};



test("빈 배열은 0을 반환한다", () => {
  expect(solution([])).toBe(0);
});

test("배열의 합을 반환한다", () => {
  expect(solution([1, 2, 3, 4])).toBe(10);
  expect(solution([-1, 3, 8, 9, 10, 11])).toBe(40);
});

test("큰 배열이 입력으로 주어져도 RangeError를 던지지 않는다", () => {
  const input = Array.from({ length: 10000 }, (_, i) => i + 1);

  expect(() => solution(input)).not.toThrowError(
    new RangeError("Maximum call stack size exceeded")
  );
});
