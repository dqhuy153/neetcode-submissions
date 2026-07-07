class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        // [1, 2, 3, 3]
        // Loop arrays set to Map {1: 1, 2: 1, 3: 1}
        // If map has key value -> contains duplicate
        const map = new Map<number, number>()

        const result = nums.some(num => {
            if(map.has(num)) return true;

            map.set(num, 1)
        })

        return result
    }
}
