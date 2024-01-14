/*
피보나치 수는 첫째 및 둘째 항이 1이며 그 뒤의 모든 항은 바로 앞 두 항의 합인 수열입니다.
n번째 피보나치 수를 구하는 함수를 작성해 주세요.
 */

//이번에는 재귀 함수로 문제를 해결해 주세요.
public class Problem2 {
    public int solution(int num){
        if (num == 0) {
            return 0;
        }
        if (num == 1) {
            return 1;
        }
        return solution(num - 2) + solution(num - 1);
    }

    //꼬리 재귀 최적화를 통해서 최적화해 보세요.
    public int solution2(int num) {
        return 0;
    }

    public static void main(String[] args) {
        Problem2 problem2 = new Problem2();
        System.out.println(problem2.solution(6));
    }
}