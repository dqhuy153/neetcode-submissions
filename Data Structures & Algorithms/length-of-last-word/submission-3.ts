class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s: string): number {
        //using js
        // const words = s.trim().split(' ');
        // return words[words.length - 1].length;
        // return s.trim().split(' ').pop().length;

        //using count
        //s = "   fly me   to   the moon  "
        //count=0
        //lastCount=0
        //loop char in s
        //if meet empty string => set lastCount=count => reset count
        // let count = 0;
        // const trimed = s.trim();

        // for(let i=0; i<trimed.length; i++) {
        //     if(trimed[i] === ' ') {
        //         count = 0;
        //     } else {
        //         count++
        //     }
        // }

        // return count;

        //iterate from bottom
        //s = "   fly me   to   the moon  "
        //skip spaces of last word
        //loop right to left, if empty space, move i
        //keep count length while not empty space
        //next time hit empty space, stop loop, return length
        let length = 0;
        let i = s.length - 1;

        while(s[i]===' ' && i>=0) {
            i--
        }

        while(s[i] !== ' ' && i>=0) {
            length++;
            i--;
        }

        return length;

    }
}
