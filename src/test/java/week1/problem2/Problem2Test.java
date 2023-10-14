package test.java.week1.problem2;

import main.java.week1.problem2.Problem2;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

class Problem2Test {

    private final Problem2 problem2 = new Problem2();

    @ParameterizedTest
    @CsvSource(value = {"0:0", "1:1", "2:1", "3:2", "4:3", "5:5", "6:8"}, delimiter = ':')
    void 피보나치_수를_구한다_상향식_동적_프로그래밍(int input, int output) {
        Assertions.assertEquals(output, problem2.solution1(input));
    }

    @ParameterizedTest
    @CsvSource(value = {"0:0", "1:1", "2:1", "3:2", "4:3", "5:5", "6:8"}, delimiter = ':')
    void 피보나치_수를_구한다_재귀(int input, int output) {
        Assertions.assertEquals(output, problem2.solution2(input));
    }

    @ParameterizedTest
    @CsvSource(value = {"0:0", "1:1", "2:1", "3:2", "4:3", "5:5", "6:8"}, delimiter = ':')
    void 피보나치_수를_구한다_꼬리_재귀(int input, int output) {
        Assertions.assertEquals(output, problem2.solution3(input));
    }

    @ParameterizedTest
    @CsvSource(value = {"0:0", "1:1", "2:1", "3:2", "4:3", "5:5", "6:8"}, delimiter = ':')
    void 피보나치_수를_구한다_꼬리_재귀_최적화(int input, int output) {
        Assertions.assertEquals(output, problem2.solution4(input));
    }
}