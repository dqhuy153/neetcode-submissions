class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        // strs = ["bat","bag","bank","band"]
        // => "ba"
        // 0 -> "b", 1 -> "a", 2 -> "t"
        // store = ""
        // loop each word
        // i = 0 => store = "bat"
        // i = 1 => store = "ba"
        //...
        // "bat" <> "bag" => "ba"
        // store = ["b", "a", "t"]
        // current = ["b", "a", "g"]
        // store[i] = current[i]
        // store[i] !== curent[i] => store = store.slice(0,i);
        // if(strs.length === 0) return '';
        // if(strs.length === 1) return strs[0];

        // let prefix = strs[0];
        
        // for(let i=1; i<strs.length; i++) {
        //     prefix = this.findPrefix(prefix, strs[i])
        // }

        // return prefix;   
        const sortedStrs = strs.sort();
        return this.findPrefix(sortedStrs[0], sortedStrs[sortedStrs.length-1])
    }

    findPrefix(a: string, b: string) {
        const smaller = a.length > b.length ? b : a;
       
        for(let i=0; i<smaller.length; i++) {
            if(a[i] !== b[i]) return smaller.slice(0, i);
        }

        return smaller;
    }
}
