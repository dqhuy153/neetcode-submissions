class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        //nums = [3,4,5,6], target = 7
        //map = {4: 0, 3: 1, 2: 2, 1: 3}
        const map = new Map();

        for(let i=0; i<nums.length; i++){
            const num = nums[i];
            const prevIndex = map.get(num)

            if(prevIndex !== undefined) {
                return [prevIndex, i]
            }

            map.set(target - num, i);
        };

        // 0 => num 3 => set (4, 0)
        // 1 => num 4 => get (4) => 0 => [0, 1]

        return []
    }
}
