var isPalindrome = function(x) {
    let arr = x.toString().split('');
    let comparisonArr = arr;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != comparisonArr.reverse()[i]) { return false }
    }
    return true
};