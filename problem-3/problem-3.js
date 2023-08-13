// 가장 익숙한 방법으로 문제를 해결해 주세요.
const solution = (n) => {
  return n.toString(2)
};

// 이번에는 재귀 함수로 문제를 해결해 주세요.
function solution(n) {
  let answer = '';
  const factorial = (num) => {
    if(num === 0) return;
    factorial(parseInt(num / 2));
    answer += num % 2;
  };
  factorial(n);
  return answer;
}

// 꼬리 재귀 함수로 바꿔보세요.
// 꼬리 재귀 최적화를 통해서 최적화해 보세요.
