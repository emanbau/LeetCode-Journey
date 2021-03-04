var romanToInt = function(s) {
    let r = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
    let c = 0, p = 0, a = 0, i = s.length - 1;
    for ( ; i >= 0; i--) {
        c = r[s[i]];
        c < p ? a -= c : a += c
        p = c;
    }
    return a
};