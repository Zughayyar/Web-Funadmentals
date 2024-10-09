/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var nums = [0,1,2,2,3,0,4,2];
var val = 0;

console.log("Input: nums = " + nums + ", val = " + val )

var k = removeElement(nums,val);
nums.sort();
nums.reverse();
console.log("Output: " + k + ", nums = " + nums);

function removeElement(nums, val) {
    var count = 0;
    for (var i=0;i<nums.length;i++) {
        if (nums[i] == val) {
            nums[i] = "-";
            count++;
        }  
    }
    return nums.length - count;
};
