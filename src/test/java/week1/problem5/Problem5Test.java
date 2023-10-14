package test.java.week1.problem5;

import main.java.week1.problem5.Problem5;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

class Problem5Test {

    private Problem5 problem5 = new Problem5();

    @ParameterizedTest
    @CsvSource(value = {"4:12:4", "3:7:1", "16:72:8", "9:12:3"}, delimiter = ':')
    void 유클리드_호제법을_사용하여_최대_공약수를_구한다_재귀(int a, int b, int output) {
        Assertions.assertEquals(output, problem5.solution1(a, b));
    }
}
