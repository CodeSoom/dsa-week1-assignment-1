/** 이진수를 십진수로
 * '0', 0
 * '1', 1
 * '10', 2
 * '11', 3
 * '100', 4
 * '101', 5
 * '110', 6
 * '111', 7
 * '1000', 8
 */

// 가장 익숙한 방법으로 문제를 해결해 주세요.
const solution = (n) => {
  return parseInt(n, 2);
};

// 이번에는 재귀 함수로 문제를 해결해 주세요.
function solution(n) {
  if (n === '0') {
    return 0;
  }
  if (n === '1') {
    return 1;
  }

  const first = n[0];
  return (2 ** (n.length - 1)) * Number(first) + solution(n.slice(1));
}

// 꼬리 재귀 함수로 바꿔보세요.
function solution(n, result = 0) {
  if (n === '0') {
    return 0 + result;
  }
  if (n === '1') {
    return 1 + result;
  }

  const first = n[0];
  return solution(n.slice(1), result +((2 ** (n.length - 1)) * Number(first)));
}

// 꼬리 재귀 최적화를 통해서 최적화해 보세요.
function solution(n) {
  let numbers = [...n];
  let result = 0;

  while (true) {
    
    if (n === '0') {
      return 0 + result;
    }
    if (n === '1') {
      return 1 + result;
    }
    
    const first = numbers[0];
    
    result = result + ((2 ** (numbers.length - 1)) * Number(first));
    numbers = numbers.slice(1)
  }
}
