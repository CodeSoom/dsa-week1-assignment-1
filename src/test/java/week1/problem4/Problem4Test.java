package test.java.week1.problem4;

import main.java.week1.problem4.Problem4;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

class Problem4Test {

    private Problem4 problem4 = new Problem4();

    @ParameterizedTest
    @CsvSource(value = {"0:0", "1:1", "10:2", "11:3", "100:4", "101:5", "110:6", "111:7", "1000:8"}, delimiter = ':')
    void solution(String input, int output) {
        Assertions.assertEquals(output, problem4.solution1(input));
    }
}