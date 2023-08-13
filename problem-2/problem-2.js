// 가장 익숙한 방법으로 문제를 해결해 주세요.
const solution = (n) => {
  if (n <= 0) return 0;
  if (n === 1) return n;
  
  let num1 = 0;
  let num2 = 1;
  let result;
  for (i = 1; i < n; i++){
    result = num1 + num2;
    num1 = num2;
    num2 = result;
  }
  return result;
};

// 이번에는 재귀 함수로 문제를 해결해 주세요.
function solution(n) {
  if (n <= 0) return 0;
  if (n === 1) return n;
  
  return solution(n - 1) + solution(n - 2);
}

// 꼬리 재귀 함수로 바꿔보세요.
function solution( n, current = 2, a = 0, b = 1 ) {
  if (n <= 0) return 0;
  if (n === 1) return n;

  if(n === current) {
    return a + b;
  }
  return solution(n, current+ 1, b, a + b);
}
// 꼬리 재귀 최적화를 통해서 최적화해 보세요.
function solution(n) {
  if (n <= 0) return 0;
  if (n === 1) return n;

  let current = 2;
  let a = 0; 
  let b = 1;

  while(true){
    if(n === current) {
      return a + b;
    }
    current = current + 1;
    const temp = a;
    a = b;
    b = temp + b;
  }
}