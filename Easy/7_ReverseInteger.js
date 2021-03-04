var reverse = function(x) {
    let arrX = [];
    arrX = x.toString().split('');
    let reverse = arrX.reverse();
    let number = parseInt(reverse.join(''))
    if (x < 0) {
        number = number - (number * 2);
    }
    
    
    if (number > Math.pow(-2, 31) && number < (Math.pow(2, 31) - 1)) {
        return number
    } else {
        return 0
    }
};