function getMin(s) {
    // Write your code here
    let counter = 0
    // loop through the string and determine if we have balanced parens
    for (let i=0; i<s.length; i++) {
        // if we encounter an open paren, increment our counter
        if (s[i] === '(') {
            counter++
        }
        // if we encounter a closing paren, decrement our counter
        else if (s[i] === ')') {
            counter--
        }
    }
    // the number of mismatched parens should be the number of insertions required
    return Math.abs(counter)
}