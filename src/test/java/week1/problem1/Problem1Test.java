package test.java.week1.problem1;

import main.java.week1.problem1.Problem1;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

class Problem1Test {

    private final Problem1 problem1 = new Problem1();
    private final int[] input1 = {1, 2, 3, 4};
    private final int[] input2 = {-1, 3, 8, 9, 10, 11};
    private final int[] input3 = {};
    private final int output1 = 10;
    private final int output2 = 40;
    private final int output3 = 0;

    @Test
    void 숫자의_배열을_받아서_총합을_구한다_가장_익숙한_방법() {
        Assertions.assertAll(
                "총합 계산(for문)",
                () -> Assertions.assertEquals(output1, problem1.solution1(input1)),
                () -> Assertions.assertEquals(output2, problem1.solution1(input2)),
                () -> Assertions.assertEquals(output3, problem1.solution1(input3))
        );
    }

    @Test
    void 숫자의_배열을_받아서_총합을_구한다_재귀_분할_정복() {
        Assertions.assertAll(
                "총합 계산(재귀+분할 정복)",
                () -> Assertions.assertEquals(output1, problem1.solution2_1(input1)),
                () -> Assertions.assertEquals(output2, problem1.solution2_1(input2)),
                () -> Assertions.assertEquals(output3, problem1.solution2_1(input3))
        );
    }

    @Test
    void 숫자의_배열을_받아서_총합을_구한다_재귀_인덱스() {
        Assertions.assertAll(
                "총합 계산(재귀+인덱스)",
                () -> Assertions.assertEquals(output1, problem1.solution2_2(input1)),
                () -> Assertions.assertEquals(output2, problem1.solution2_2(input2)),
                () -> Assertions.assertEquals(output3, problem1.solution2_2(input3))
        );
    }

    @Test
    void 숫자의_배열을_받아서_총합을_구한다_꼬리_재귀() {
        Assertions.assertAll(
                "총합 계산(꼬리 재귀)",
                () -> Assertions.assertEquals(output1, problem1.solution3(input1)),
                () -> Assertions.assertEquals(output2, problem1.solution3(input2)),
                () -> Assertions.assertEquals(output3, problem1.solution3(input3))
        );
    }

    @Test
    void 숫자의_배열을_받아서_총합을_구한다_꼬리_재귀_최적화() {
        Assertions.assertAll(
                "총합 계산(꼬리 재귀 최적화)",
                () -> Assertions.assertEquals(output1, problem1.solution4(input1)),
                () -> Assertions.assertEquals(output2, problem1.solution4(input2)),
                () -> Assertions.assertEquals(output3, problem1.solution4(input3))
        );
    }
}
