// 가장 익숙한 방법으로 문제를 해결해 주세요.
function solution(numbers) {
  // if (numbers.length === 0) return 0;
  return numbers.reduce((prev, cur) => ( prev + cur), 0);
}

// 이번에는 재귀 함수로 문제를 해결해 주세요.
function solution(numbers) {
  if (numbers.length === 0) return 0;
  return numbers.shift() + solution(numbers);
}

// 마이 버전
function solution(numbers) {
  if(numbers.length === 0 ){
    return 0;
  }
  let first = numbers[0]
  return solution(numbers.slice(1)) + first;
};

// 쌤 버전
function solution(numbers) {
  if (numbers.length === 0) return 0;
  const [first] = numbers;
  return first + solution(numbers.slice(1))
}

// 꼬리 재귀 함수로 바꿔보세요.
// 마이 버전
const solution = (numbers, sum = 0) => {
  if(numbers.length === 0 ){
    return sum;
  }
  let first = numbers[0];
  console.log('first', first);
  return solution(numbers.slice(1), sum + first);
}

// 쌤 버전
function solution(numbers, sum = 0) {
  if (numbers.length === 0) return sum;
  const [first] = numbers;
  return solution(numbers.slice(1), sum + first)
}

// 꼬리 재귀 최적화를 통해서 최적화해 보세요.
function solution(n) {
  let numbers = [...n]
  let sum = 0
  while(true){
    if (numbers.length === 0) return sum;
  
    const [first] = numbers;
    sum = sum + first;
    numbers = numbers.slice(1);
  }
}

// console.log(solution([1,2,3]));