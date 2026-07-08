class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s: string, t: string): number {
        // s = "coaching", t = "coding"
        // => "ding" => find first t char missing in s => "d" => "ding"
        // s = "coachingd", t = "coding"
        // => "ing" => end of s => find last char that t match s => d => "ing"
        // s = "abcde", t = "a"
        // => 0 => end of t => t is subsequence of s
        // s = "z", t = "abcde"
        // => "abcde" => end of s => no first match => "a" => "abcde"
        let i=0;
        let j=0;

        while (i < s.length && j < t.length) {
            if(s[i] === t[j]) {
                j++;
            }
            
            i++;
        }
        
        return t.length - j;
    }
}
