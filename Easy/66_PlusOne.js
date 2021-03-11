var plusOne = function(digits) {
    let int = BigInt(digits.join(''));
    int++
    return int.toString().split('');
};