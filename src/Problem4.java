/*
주어진 2진수 문자열을 10진수 숫자로 변환하는 함수를 작성해 주세요.
 */

public class Problem4 {

    //가장 익숙한 방법으로 문제를 해결해 주세요.
    public int solution(String num) {
        if (num.equals("0")) {
            return 0;
        }
        if (num.equals("1")) {
            return 1;
        }
        int answer = 0;
        for (int i = 0; i < num.length(); i++) {
            int n = num.charAt(i) - '0';
            answer += n * Math.pow(2, num.length() - i - 1);
        }
        return answer;
    }

    //이번에는 재귀 함수로 문제를 해결해 주세요.
    public int solution2(String num) {
        if (num.equals("0")) {
            return 0;
        }
        if (num.equals("1")) {
            return 1;
        }
        if (num.equals("10")) {
            return 2*1 + 2*0;
        }
        if (num.equals("11")) {
            return 2*1 + 2 * 1;
        }
        if (num.equals("100")) {
            return 4;
        }
        int first =num.charAt(0) - '0';

        return (int)Math.pow(2,  num.length() - 1) * first * solution2(num.substring(1));
    }

    //꼬리 재귀 함수로 바꿔보세요.
    //꼬리 재귀 최적화를 통해서 최적화해 보세요.

    public static void main(String[] args) {
        Problem4 problem4 = new Problem4();
        System.out.println(problem4.solution("100"));
        System.out.println(problem4.solution2("100"));
    }
}
