var addBinary = function(a, b) {
    let arr1 = a.length >= b.length ? a.split('').reverse() : b.split('').reverse();
    let arr2 = a.length < b.length ? a.split('').reverse() : b.split('').reverse()
    let stack = []
    let final = []
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] == '1' && arr2[i] == '1' && stack.length == 0) {
            stack.unshift('1')
            final.unshift('0')
        }
        else if (arr1[i] == '1' && arr2[i] == '1' && stack.length > 0) {
            final.unshift('1')
        }
        else if (((arr1[i] == '1' && (arr2[i] == '0' || arr2[i] == undefined)) || ((arr1[i] == '0' || arr1[i] == undefined) && arr2[i] == '1')) && stack.length > 0) {
            final.unshift('0');
        }
        else if (((arr1[i] == '1' && (arr2[i] == '0' || arr2[i] == undefined)) || ((arr1[i] == '0' || arr1[i] == undefined) && arr2[i] == '1')) && stack.length == 0) {
            final.unshift('1');
        }
        else if ((arr1[i] == '0' || arr1[i] == undefined) && (arr2[i] == '0' || arr2[i] == undefined) && stack.length > 0) {
            stack = [];
            final.unshift('1');
        }
        else if ((arr1[i] == '0' || arr1[i] == undefined) && (arr2[i] == '0' || arr2[i] == undefined) && stack.length == 0) {
            final.unshift('0');
        }
    }
    if (stack.length > 0) final.unshift('1');
    return final.join('');
};