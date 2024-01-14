import java.util.Arrays;

//숫자의 배열을 받아서 총합을 구하는 함수를 구현해 주세요.

public class Problem1 {

    //가장 익숙한 방법으로 문제를 해결해 주세요.
    public int solution1(int[] nums) {
        int answer = 0;
        for (int num : nums) {
            answer += num;
        }
        return answer;
    }

    //이번에는 재귀 함수로 문제를 해결해 주세요.
    public int solution2(int[] nums) {
        if(nums.length == 0) {
            return 0;
        }
        int[] nums2 = Arrays.copyOfRange(nums, 1, nums.length);
        return solution2(nums2) + nums[0];
    }


    //꼬리 재귀 함수로 바꿔보세요.

    //꼬리 재귀 최적화를 통해서 최적화해 보세요.

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6};
        Problem1 problem1 = new Problem1();
        int hap = problem1.solution1(arr);
        System.out.println(hap);
        int hap2 = problem1.solution2(arr);
        System.out.println(hap2);
    }
}
