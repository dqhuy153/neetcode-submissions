class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s: string, t: string): boolean {
        // s = "node", t = "neetcode" => true
        // [n,o,d,e] => current: n
        // [n,e,e,t,c,o,d,e] 
        // loop
        // n === n => current: o
        // e != o
        // ...
        // o === o
        // d === d
        // e === e => current null => return true
        if(t.length ===0) return false;
        if(s.length === 0) return true;

        const sArr = s.split('');
        const tArr = t.split('');

        let current = 0;

        return tArr.some(char => {
            if(char === sArr[current]) {
                current++;
            } 

            if(!sArr[current]) return true;
        })
    }
}
