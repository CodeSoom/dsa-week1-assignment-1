package main.java.week1.problem5;

public class Problem5 {

    public Problem5() {
    }

    public int solution1(int a, int b) {
        int max = Math.max(a, b);
        int min = Math.min(a, b);
        int r = max % min;
        if (r == 0) {
            return min;
        }
        return solution1(min, r);
    }
}
