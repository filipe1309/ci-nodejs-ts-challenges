
/** 
    Given an integer array nums, return true if any value appears at least twice in the array, 
    and return false if every element is distinct.

    Example 1:

    Input: nums = [1,2,3,1]
    Output: true
    Example 2:

    Input: nums = [1,2,3,4]
    Output: false
    Example 3:

    Input: nums = [1,1,1,3,3,4,3,2,4,2]
    Output: true


    Constraints:

    1 <= nums.length <= 10ˆ5
    -10^9 <= nums[i] <= 10^9
*/

const containsDuplicateTests = [
    [[1,2,3,1], true],
    [[1,2,3,4], false],
    [[1,1,1,3,3,4,3,2,4,2], true],
];

function containsDuplicateV1(nums: number[]): boolean {
    if (nums.length < 1 || nums.length > 10**5) {
        return false;
    }
    nums.sort()
    return nums.some(
        (el, i, arr) => (arr[i+1] !== undefined) ? el == arr[i+1] : false
    )
};

// Neetcode solution
function containsDuplicateV2(nums: number[]): boolean {
    const set = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) return true;
        else set.add(nums[i]);
    }

    return false;
}


// Time complexity: O(n)
// Space complexity: O(n)
var containsDuplicate = function(nums: number[]): boolean {
    const s = new Set(nums); 
    return s.size !== nums.length
};

export {containsDuplicate, containsDuplicateTests}
