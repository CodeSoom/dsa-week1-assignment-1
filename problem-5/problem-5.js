// 가장 익숙한 방법으로 문제를 해결해 주세요.
const solution = (a, b) => {
    while(b > 0){
        let result = a % b;
        a = b;
        b = result;
    } 

    return a;
};

// 이번에는 재귀 함수로 문제를 해결해 주세요.

// 꼬리 재귀 함수로 바꿔보세요.
function solution(a, b) {
  const result = a % b;
  if (result === 0) return b; 
  return solution(b, result);
}
// 꼬리 재귀 최적화를 통해서 최적화해 보세요.
function solution(a, b) {
  while (true) {
    if (a % b === 0) {
      return b;

    }
    const temp = a;
    a = b;
    b = temp % b;
  }

}
