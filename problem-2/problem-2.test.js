/* eslint-disable comma-dangle */
/* eslint-disable no-plusplus */
/* eslint-disable quotes */
/* eslint-disable consistent-return */
/* eslint-disable spaced-comment */
/* eslint-disable no-unused-vars */

const solution1 = (n) => {
  //내가 아는 방법
  if (n <= 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 1;
  }
  const arr = [1, 1];
  for (let i = 2; i < n; i++) {
    const nextFib = arr[i - 1] + arr[i - 2];
    arr.push(nextFib);
  }
  return arr[n - 1];
};

const solution2 = (n) => {
  //재귀 함수
  if (n < 0) return 0;
  if (n === 1 || n === 2) return 1;
  return solution(n - 1) + solution(n - 2);
};

// 코드숨 정답 

// f(0) = 0
// f(1) = 1
// f(2) = 1
// f(3) = 2
// f(4) = 3 // 이런식으로 먼저 결과값을 출력한다. 

//기존 주석처럼 베이스 케이스, 베케 이전, 베케 이전 이전... 식을 먼저 생각한다. 0일때, 1일때.... 
// 먼저 재귀호출, 그러나 콜스택 사이즈 부족 에러 발생
const solution3 = (n) => {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  //if (n === 2) return solution(0) + solution(1);
  //if (n === 3) return solution(1) + solution(2); // n-2 + n-1 패턴을 이런식으로 함수 결과값으로 바꿔서 풀어낸다. 

  return solution3(n-2) + solution3(n-1);
};
// 리턴값에 계산식이 들어가지 않도록 계산식을 없애고 파라미터로 값을 넘겨주는 형태로 변경한다.
// 여전히 꼬리재귀최적화 미지원 이슈로 콜스택 사이즈 에러 발생
const solution4 = (n, current = 2, a = 0, b = 1) => {
  if (n <= 0) return 0;
  if (n=== 1) return 1;
  if (n=== current) return a + b;
  return solution4(n, current + 1, b, a + b);
};

// 함수를 리턴하지 않고 반복문을 사용한 할당문으로 변경 #while(true)
const solution5 = (n) => {
  let current = 2;
  let a = 0;
  let b = 1;

  while (true) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    if (n === current) return a + b;

    current = current + 1;
    const temp = a;
    a = b;
    b = temp + b; //순서 안 헷갈리게....
  }
};

const solution6 = (n) => {
  let current = 2;
  let a = 0;
  let b = 1;
  
  // 미리 빼 버리면 더 최적화가 된다.
  if (n <= 0) return 0;
  if (n === 1) return 1;
  
  while (true) {
    if (n === current) return a + b;

    current = current + 1;
    const temp = a;
    a = b;
    b = temp + b; //순서 안 헷갈리게....
  }
};

test("음수가 주어지면 0을 반환한다", () => {
  expect(solution(-1)).toBe(0);
});

test("0부터 1까지는 정해진 수를 반환한다", () => {
  expect(solution(0)).toBe(0);
  expect(solution(1)).toBe(1);
});

test("2이상 주어지면 앞 두 항의 합을 반환한다", () => {
  expect(solution(2)).toBe(1);
  expect(solution(3)).toBe(2);
  expect(solution(4)).toBe(3);
  expect(solution(5)).toBe(5);
  expect(solution(6)).toBe(8);
});

test("큰 입력이 주어져도 RangeError를 던지지 않는다", () => {
  const input = 100000;

  expect(() => solution(input)).not.toThrowError(
    new RangeError("Maximum call stack size exceeded")
  );
});
