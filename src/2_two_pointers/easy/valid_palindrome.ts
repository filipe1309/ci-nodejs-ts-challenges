/*
https://leetcode.com/problems/valid-palindrome/description/

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.

*/

const isPalindromeTests = [
    [["A man, a plan, a canal: Panama"], true],
    [["race a car"], false],
    [[" "], true],
];

// My initial solution
// Runtime 81 ms (Beats 54.9%)
// Memory 45.5 MB (Beats 69.42%)
function isPalindrome(s: string): boolean {
    const cleanText = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    const cleanArray = cleanText.split('')
    for (let i = 0; i < cleanArray.length; i++) {
        if (cleanArray[i] !== cleanArray[cleanArray.length - i - 1]) return false
    }

    return true
};

// My solution improved
// Runtime 72 ms (Beats 83.55%)
// Memory 44.4 MB (Beats 98.96%)
function isPalindromeImproved(s: string): boolean {
    const cleanText = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    const cleanTextSize = cleanText.length
    const cleanTextSizeHalf = cleanTextSize/2
    for (let i = 0; i < cleanTextSizeHalf; i++) {
        if (cleanText.charCodeAt(i) !== cleanText.charCodeAt(cleanTextSize - i - 1)) return false
    }

    return true
};

// Community solution
// Runtime 68 ms (Beats 92.86%)
// Memory 45.8 MB (Beats 64.4%)
function isAlphanumeric(code: number) {
    // digits: 48-57
    // lowercase letters: 97-122 
    return ((code >= 48 && code <= 57) || (code >= 97 && code <= 122)) 
}
function isPalindromeCommunity(s: string): boolean {
    s = s.toLowerCase();
    let i = 0; 
    let j = s.length - 1;
    while (i < j) {
        let iCode = s.charCodeAt(i);
        let jCode = s.charCodeAt(j);

        while (!isAlphanumeric(iCode)) {
            i++
            if (i === j) return true
            iCode = s.charCodeAt(i);
        }
        while (!isAlphanumeric(jCode)) {
            j--
            if (i === j) return true
            jCode = s.charCodeAt(j);
        }

        if (iCode !== jCode) return false
        
        i++
        j--
    }

    return true
};

// NeetCode solution

export {isPalindrome, isPalindromeTests}
