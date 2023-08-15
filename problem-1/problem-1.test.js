// 1. 가장 익숙한 방법
// const solution = (numbers) => {
// return numbers.reduce((acc, cur) => acc + cur, 0);
// }

// 2.재귀함수로
// const solution = (numbers, cnt = 0, sum = 0) => {
//   if (cnt === numbers.length) {
//     return sum;
//   }

//   return sum + solution(numbers, cnt + 1, numbers[cnt]);
// };

// 3.꼬리 재귀 함수로
// const solution = (numbers, cnt = 0, sum = 0) => {
//   if (cnt === numbers.length) {
//     return sum;
//   }

//   return solution(numbers, cnt + 1, numbers[cnt] + sum);
// };

// 4. 꼬리 재귀 최적화
// const solution = (numbers) => {
//   let cnt = 0;
//   let sum = 0;

//   while (true) {
//     if (cnt === numbers.length) {
//       return sum;
//     }

//     sum += numbers[cnt];
//     cnt += 1;
//   }
// };

// 강의 해설 --------------------------------------------------------------------------
// [재귀함수로]
// : 실행해야 할 로직을 계속 쌓아두고 있어서 stack overflow가 발생. -> 따라서 꼬리재귀로 시도해봄
/*
const solution = (numbers) => {
  if (numbers.length === 0) {
    return 0;
  }
  const [first] = numbers;
  return first + solution(numbers.slice(1, numbers.length));
};
*/

// [꼬리재귀 최적화]
// : 이 방법도 stack overflow가 해결되지 않음. -> 따라서 꼬리재귀 최적화 시도해봄.
// : js는 꼬리재귀 최적화를 지원하지 않음. 따라서 반복문으로 직접 바꿔줘야 함
//  (꼬리재귀 최적화를 지원하는 언어는 tailrec을 함수명 앞에 붙이면 자동으로 최적화가 되된다 함.)
const solution = (n) => {
  let numbers = [...n]; // reference type이기 때문에 인자를 직접적으로 변경하는건 좋지x
  let sum = 0;

  while (true) {
    if (numbers.length === 0) {
      return sum;
    }
    const [first] = numbers;
    sum += first;
    numbers = numbers.slice(1);
  }
};

test('빈 배열은 0을 반환한다', () => {
  expect(solution([])).toBe(0);
});

test('배열의 합을 반환한다', () => {
  expect(solution([1, 2, 3, 4])).toBe(10);
  expect(solution([-1, 3, 8, 9, 10, 11])).toBe(40);
});

test('큰 배열이 입력으로 주어져도 RangeError를 던지지 않는다', () => {
  const input = Array.from({ length: 10000 }, (_, i) => i + 1);

  expect(() => solution(input)).not.toThrowError(
    new RangeError('Maximum call stack size exceeded'),
  );
});
