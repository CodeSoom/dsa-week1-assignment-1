// 가장 익숙한 방법으로 문제를 해결해 주세요.
function solution(numbers) {
  if (numbers.length === 0) return 0;
  return numbers.reduce((prev, cur) => ( prev + cur));
}

// 이번에는 재귀 함수로 문제를 해결해 주세요.
function solution(numbers) {
  if (numbers.length === 0) return 0;
  return numbers.shift() + solution(numbers);
}

// 꼬리 재귀 함수로 바꿔보세요.
// 꼬리 재귀 최적화를 통해서 최적화해 보세요.
