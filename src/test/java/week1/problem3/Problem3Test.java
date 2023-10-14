package test.java.week1.problem3;

import main.java.week1.problem3.Problem3;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

class Problem3Test {

    Problem3 problem3 = new Problem3();

    @ParameterizedTest
    @CsvSource(value = {"0:0", "1:1", "2:10", "3:11", "4:100", "5:101", "6:110", "7:111", "8:1000"}, delimiter = ':')
    void 십진수를_이진수로_만든다_나머지_몫_정리(int input, String output) {
        Assertions.assertEquals(output, problem3.solution1(input));
    }
}
