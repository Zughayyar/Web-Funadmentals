var nums = [0,0,1,1,1,2,2,3,3,4]

console.log("Input: nums = " + nums)
var k = removeDuplicates(nums);
console.log( k + ", nums = " + nums)



function removeDuplicates(nums) {
    var count = 0;
   
    for (var i=0;i<nums.length;i++) {
        if (nums[i] == nums[i+1]) {
            nums[i+1] = "_"
            count++;

            var n = i + 2;
            while (nums[n] == nums[i]) {
                nums[n] = "_";
                count++;
            }

            
        }
    }
    nums.sort();
    return count - 1;
}
