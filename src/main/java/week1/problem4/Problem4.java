package main.java.week1.problem4;

public class Problem4 {

    public Problem4() {
    }

    public int solution1(String input) {
        int output = 0;
        String[] split = input.split("");
        for (int i = 0; i < split.length; i++) {
            output += Integer.parseInt(split[i]) * Math.pow(2, split.length - i - 1);
        }
        return output;
    }
}
