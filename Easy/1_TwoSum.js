var twoSum = function(nums, target) {
    let arr = nums;
    let answer = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i !==j) {
                if (arr[i] + arr[j] === target) {
                    answer.push(i);
                    answer.push(j);
                    return answer;
                }
            }
        }
    }
};