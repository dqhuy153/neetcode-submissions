class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s: string): number {
        //using js
        const words = s.trim().split(' ');
        return words[words.length - 1].length;
    }
}
