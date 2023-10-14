package main.java.week1.problem1;

import java.util.Arrays;

public class Problem1 {

    public Problem1() {
    }

    public int solution1(int[] input) {
        int output = 0;
        for (int i : input) {
            output += i;
        }
        return output;
    }

    public int solution2_1(int[] input) {
        if (input.length == 0) {
            return 0;
        }
        if (input.length == 1) {
            return input[0];
        }
        int mid = input.length / 2;
        return solution2_1(Arrays.copyOfRange(input, 0, mid)) + solution2_1(Arrays.copyOfRange(input, mid, input.length));
    }

    public int solution2_2(int[] input) {
        return plus_1(input, input.length - 1);
    }

    public int solution3(int[] input) {
        return plus_2(input, input.length - 1, 0);
    }

    public int solution4(int[] input) {
        return plus_3(input, input.length - 1);
    }

    private int plus_1(int[] input, int index) {
        if (index < 0) {
            return 0;
        }
        return input[index] + plus_1(input, index - 1);
    }

    private int plus_2(int[] input, int index, int output) {
        if (index < 0) {
            return output;
        }
        return plus_2(input, index - 1, output + input[index]);
    }

    private int plus_3(int[] input, int index) {
        int output = 0;
        while (true) {
            if (index < 0) {
                return output;
            }
            output += input[index];
            index--;
        }
    }
}