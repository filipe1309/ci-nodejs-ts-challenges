/*
https://leetcode.com/problems/two-sum/

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

*/

const twoSumTests = [
    [[2,7,11,15], [9, [0,1]]],
    [[3,2,4], [6, [1,2]]],
    [[3,3], [6, [0,1]]],
];

// My solution
// Runtime 107 ms (Beats 44.27%)
// Memory 44.5 MB (Beats 68.80%)
function twoSum(nums: number[], target: number): number[] {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            if ((nums[i] + nums[j]) == target) return [i, j]
        }
    }
    return []
};

// Community solution
// Runtime 74 ms (Beats 71.61%)
// Memory 45.8 MB (Beats 20.3%)
function twoSumCommunity(nums: number[], target: number): number[] {
    let numMap = new Map()
    for (let i = 0; i < nums.length; i++) {
        let number = nums[i]
        let diff = target - number
        if (numMap.has(diff)) return [numMap.get(diff), i]
        numMap.set(number, i)
    }
    return []
};

export {twoSum, twoSumTests}
