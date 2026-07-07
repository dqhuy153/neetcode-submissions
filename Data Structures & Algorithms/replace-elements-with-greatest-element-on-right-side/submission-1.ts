class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        // [2,4,5,3,1,2,1] => [5,5,3,2,2,1,-1]
        // Loop
        // 2 -> Nested Loop: 4,5,3,1,2,1 => 5
        // 4 ->  Nested Loop: 5,3,1,2,1 => 5
        // ..
        // => n2

        // Sort: [5,4,3,2,1,1]
        // sort: [1,2,3,4,5] //n log n
        // {5: 2, 4: 1, 2: 5, 1: 6}
        // sorted arr with indexes [[1, 6], [2, 5], [3, 3], [4, 1], [5, 2]] //n
        // results = []
        // Loop
        // 2, index 0 -> get last item of array {5: 2} -> 0<2 -> results push 5
        // 4, index 1 -> get last item of array {5: 2} -> 1<2 -> results push 5
        // 5, index 2 -> get last item of array {5: 2} -> 2<2 -> false -> pop {5: 2} 
        //            ->  get last item of array {4: 1} -> 2<1 -> false -> pop {4: 1}
        //            ->  get last item of array {3: 3} -> 2<3 -> result push 3
        // 2, index 5 -> array only has 1 item => result push last item
        // 1, index 6 -> current parent array last one => push -1

        //...
        // const sortedArr = [...new Set(arr.sort((a,b) => a-b))];
        
        // const map = new Map<number, number>()
        
        // arr.forEach((item, index) => {
        //     map.set(item, index);
        // })

        // const sortedArrayItem = sortedArr.map(item => ({item: map.get(item)}));

        // const resutl = arr.map((item, index) => {
        //     if(index === arr.length -1) return -1;
            
        //     const lastSortedValue = sortedArrayItem[sortedArrayItem.length-1];
        //     const lastValue = lastSortedValue[0];
        //     const lastIndex = lastSortedValue[1];

        //     if(sortedArrayItem.length === 1) return lastValue;

        //     if(index < lastIndex) return lastValue;

        //     sortedArrayItem.pop()


        // })

        // [2,4,5,3,1,2,1] => [5,5,3,2,2,1,-1]
        // [2,4,5,3,1,2, 1 ] => [-1]
        // [2,4,5,3,1, 2 ,1] => [1] => 2 > 1 => [2,4,5,3,1,2]
        // [2,4,5,3, 1 ,2] => [2] => 1 < 2 => [2,4,5,3,2]
        // [2,4,5, 3 ,2] => [2] => 3 > 2 => [2,4,5,3]
        // [2,4, 5 ,3] => [3] => 5 > 3 => [2,4,5]
        // [2, 4 ,5] => [5] => 4 < 5 => [2,5]
        // [2 ,5] => [5] => 2 < 5 => [5] -> length 1 => end
        
        // if(arr.length < 1) return [];

        // const result = [-1];

        // while(arr.length > 1) {
        //     const length = arr.length
        //     result.unshift(arr[length-1]);
        //     arr.splice( arr[length-2] > arr[length-1] ? length-1 : length -2, 1)
        // }


        // return result

        //[2,4,5,3,1,2]
        //maxRight = 0
        // result = [-1]
        // loop right -> left
        // 2 -> maxRight =2 
        // 1 => push 2 -> maxRight =2 
        // 3 -> => push 2 => maxRight =3
        // 5 -> push 3 -> maxRight =5
        // 4 -> push 5 -> maxRight =5 
        // 2 -> push 5 
        if(arr.length < 1) return [];

        const result = [];
        let maxRight = arr[arr.length-1];

        for(let i=arr.length -2;i>=0;i--) {
            result[i]= maxRight;
            maxRight = Math.max(maxRight, arr[i])
        }

        result.push(-1)

        return result;

    }
}


// [7, 1, 5, 3, 6, 4]
// 7 4
// 1 4 => Max 3
// 1 6 => Max 6
// 1 3 => Max 6
// 1 5 => Max 6



