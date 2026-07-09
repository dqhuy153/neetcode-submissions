class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s: string): number {
        //using js
        // const words = s.trim().split(' ');
        // return words[words.length - 1].length;

        //using count
        //s = "   fly me   to   the moon  "
        //count=0
        //lastCount=0
        //loop char in s
        //if meet empty string => set lastCount=count => reset count
        let count = 0;
        const trimed = s.trim();

        for(let i=0; i<trimed.length; i++) {
            if(trimed[i] === ' ') {
                count = 0;
            } else {
                count++
            }
        }

        return count;
    }
}
