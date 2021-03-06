var isValid = function(s) {
    let a = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }
    let o = ['(', '{', '[']
    let t = [];
    for (let i = 0; i < s.length; i++) {
    // For Open Bracket
        if (o.includes(s[i])) {
            t.unshift(a[s[i]]);
            continue;
        }
    
        
    // For Close Bracket
        if (t[0] !== s[i]) {
            return false;
        } else {
            t.shift();
            continue;
        }
    }
    return t.length == 0 ? true : false;
};