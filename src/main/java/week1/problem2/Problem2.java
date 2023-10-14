package main.java.week1.problem2;

public class Problem2 {

    public Problem2() {
    }

    public int solution1(int input) {
        if (input < 2) {
            return input;
        }
        int[] dp = new int[input + 1];
        dp[0] = 0;
        dp[1] = 1;
        for (int i = 2; i <= input; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }
        return dp[input];
    }

    public int solution2(int input) {
        if (input == 0 || input == 1) {
            return input;
        }
        return solution2(input - 1) + solution2(input - 2);
    }


    public int solution3(int input) {
        return plus_1(input, 0);
    }

    public int solution4(int input) {
        return plus_2(input, 0);
    }

    private int plus_1(int input, int output) {
        if (input == 0 || input == 1) {
            return input;
        }
        return output + plus_1(input - 1, output) + plus_1(input - 2, output);
    }

    private int plus_2(int input, int output) {
        while(true) {
            if (input == 0 || input == 1) {
                return input;
            }
            return output + plus_2(input - 1, output) + plus_2(input - 2, output);
        }
    }
}
