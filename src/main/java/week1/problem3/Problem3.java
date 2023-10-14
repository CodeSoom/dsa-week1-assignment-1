package main.java.week1.problem3;

import java.util.ArrayDeque;

public class Problem3 {

    public Problem3() {
    }

    public String solution1(int input) {
        if (input == 0) {
            return "0";
        }
        ArrayDeque<Integer> stack = new ArrayDeque<>();
        while (input > 0) {
            stack.push(input % 2);
            input /= 2;
        }
        StringBuilder stringBuilder = new StringBuilder();
        while (!stack.isEmpty()) {
            stringBuilder.append(stack.pop());
        }
        return stringBuilder.toString();
    }
}
