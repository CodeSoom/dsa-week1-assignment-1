
// 1. 가장 익숙한 방법으로 문제를 해결해 주세요.
const solution1 = (n) => {
  if(n <= 0) return 0;
  if(n === 1) return 1;

  let array = [0, 1];

  for(let i=2; i <= n; i+=1){
    array[i] = array[i - 2] + array[i - 1];
  }

  return array[n];
};

//2. 이번에는 재귀 함수로 문제를 해결해 주세요.
const solution2 = (n) => {
  if(n <= 0) return 0;
  if(n === 1) return 1;

  return solution2(n-2) + solution2(n-1);
}

//3. 꼬리 재귀 함수로 바꿔보세요.
const solution3 = (n, prev = 0, curr = 1) => {
  if(n <= 0) return prev;
  if(n === 1) return curr;

  return solution3(n-1, curr, prev + curr);

}

//4. 꼬리 재귀 최적화를 통해서 최적화해 보세요.
const solution = (n) => {
  let param = n,
      prev = 0,
      curr = 1,
      sumResult = 0;

  while(true){
    if(param <= 0) return prev;
    if(param === 1) return curr;

    sumResult = prev + curr;
    prev = curr;
    curr = sumResult;
    param -= 1;
  }
}


test('음수가 주어지면 0을 반환한다', () => {
  expect(solution(-1)).toBe(0);
});

test('0부터 1까지는 정해진 수를 반환한다', () => {
  expect(solution(0)).toBe(0);
  expect(solution(1)).toBe(1);
});

test('2이상 주어지면 앞 두 항의 합을 반환한다', () => {
  expect(solution(2)).toBe(1);
  expect(solution(3)).toBe(2);
  expect(solution(4)).toBe(3);
  expect(solution(5)).toBe(5);
  expect(solution(6)).toBe(8);
});

test('큰 입력이 주어져도 RangeError를 던지지 않는다', () => {
  const input = 100000;

  expect(() => solution(input))
    .not.toThrowError(new RangeError('Maximum call stack size exceeded'));
});
