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

function solution(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  const quentiant = Math.floor(n / 2);
  const remainder = `${n % 2}`;
  return solution(quentiant) + remainder;
}

// 꼬리 재귀 함수로 바꿔보세요.
function solution(n, result = '') {
  if (n === 0) return 0 + result;
  if (n === 1) return 1 + result;

  const quentiant = Math.floor(n / 2);
  const remainder = `${n % 2}`;

  return solution(quentiant, remainder + result);
}

// 꼬리 재귀 최적화를 통해서 최적화해 보세요.
function solution(n) {
  let result = '';
  while (true) {
    
    if (n === 0) return 0 + result;
    if (n === 1) return 1 + result;
    
    const remainder = `${n % 2}`;
    n = Math.floor(n / 2);
    result = remainder + result;
  }

}

console.log(solution(8));
