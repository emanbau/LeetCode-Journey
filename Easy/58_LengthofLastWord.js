var lengthOfLastWord = function(s) {
    let arr = s.split(' ');
    if (arr.length < 1) {
        return 0
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr.includes('')) {
            arr.splice(arr.indexOf(''), 1);
            i = 0;
        }
    }
    return arr[arr.length - 1].length;
};