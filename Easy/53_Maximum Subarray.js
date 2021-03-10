var maxSubArray = function(nums) {
    let currentSum = 0;
    let largestSum = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + currentSum < nums[i]) { 
            currentSum = nums[i];
        } else {
            currentSum += nums[i];
        }
        
        if (currentSum > largestSum) {
            largestSum = currentSum;
        }
    }
    return largestSum;
};