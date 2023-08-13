/** n개의 계단이 있습니다. 
 * 계단은 한 번에 1개, 2개, 최대 3개 오를 수 있습니다.
 * 계단의 수 n이 주어졌을 때 계단을 오르는 방법에는 몇 가지가 있는지 
 * 계산하는 함수를 작성해 주세요.
 */ 

// 재귀 함수로 문제를 해결해 주세요.
function solution(n) {
  if (n === 0) return 1;
  if (n === 1 || n === 2) return n;

  return solution(n - 1) + solution(n - 2) + solution(n - 3);
}

// 다이나믹 프로그래밍으로 최적화 해주세요.
function solution(n) {
  if (n === 0) return 1;
  if (n === 1 || n === 2) return n;

  let stepArray = new Array(n + 1);
  stepArray[0] = 1;
  stepArray[1] = 1;
  stepArray[2] = 2;

  for (let i = 3; i <= n; i++) {
    stepArray[i] = stepArray[i - 1] + stepArray[i - 2] + stepArray[i - 3]
  }
  return stepArray[n]
}
