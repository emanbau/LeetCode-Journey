var longestCommonPrefix = function(strs) {
    let tS = '', i = 0, fin = '';
    if (strs.length > 1 && !strs.includes("")) {
        for ( ; i < strs[0].length; i++) {
            tS = strs[0][i]
            for (j = 0; j < strs.length; j++) {
                if (tS != strs[j][i]) {
                    return fin
                }
            }
            fin += tS;

        }
    } else if (strs.length == 1) {
        fin = strs[0];
    } else {
        fin = ''
    }
    return fin
};