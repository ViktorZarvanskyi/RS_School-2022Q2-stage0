module.exports = function reverse (n) {
    if (n > 0) {
        return Number(n.toString().split('').reverse().join(''));
    } else {
        let newN = n * -1;
        return Number(newN.toString().split('').reverse().join(''));
    }
}