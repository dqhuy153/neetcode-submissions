class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s: string): number {
        // code
        // c 99
        // o 111
        // d 100
        // e 101
        let i = 0;
        let score = 0;
        
        while(i<s.length-1) {
            score += Math.abs(s.charCodeAt(i+1) - s.charCodeAt(i));
            i++;
        }

        return score
    }
}
