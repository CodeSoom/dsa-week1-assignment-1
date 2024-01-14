/*
주어진 10진수 숫자를 2진수 문자열로 변환하는 함수를 작성해 주세요.
 */


public class Problem3 {

    //가장 익숙한 방법으로 문제를 해결해 주세요.
    public String solution(int num) {
        if (num == 0) {
            return "0";
        }
        if (num == 1) {
            return "1";
        }
        StringBuilder stringBuilder = new StringBuilder();
        while (num > 0) {
            int nameoji = num % 2;
            stringBuilder.append(nameoji);
            num /= 2;
        }
        return stringBuilder.reverse().toString();
    }

    //이번에는 재귀 함수로 문제를 해결해 주세요.
    public String solution2(int num) {
        if (num == 0) {
            return "0";
        }
        if (num == 1) {
            return "1";
        }
        int mok = num / 2;
        String nameoji = solution2(num % 2);

        return solution2(mok) + nameoji;
    }

    //꼬리 재귀 함수로 바꿔보세요.
    //꼬리 재귀 최적화를 통해서 최적화해 보세요.

    public static void main(String[] args) {
        Problem3 problem3 = new Problem3();
        System.out.println(problem3.solution(13));
        System.out.println(problem3.solution2(13));
    }
}
