var climbStairs = function(n) {
    let map = [1, 2, 3]
    for (let i = 3; i < 45; i++) {
        map.push(map[i - 1] + map[i - 2]);
    }
    return map[n - 1];
};