function superStack(operations) {
    let stack = []
    // for each operation in array of operations
    for (let i=0; i<operations.length; i++) {
        // if it is "pop", pop off the last element which is the top of the stack
        if (operations[i] === "pop") {
            stack.pop()
        }
        // otherwise, need to split the current element to get more params
        else {
            let opArr = operations[i].split(" ")
            let num = parseInt(opArr[1])
            let adder = parseInt(opArr[2])
            // if adder exists, we are in "inc", so add the adder amount to the first x elems of the array (bottom of the stack)
            if (adder) {
                for (let j=0; j<num; j++) {
                    stack[j] += adder
                }
            }
            // if it doesn't, we are in "push", so add the new number to the end of the array (top of the stack)
            else {
                stack.push(num)
            }
        }
        // print top element for all scenarios
        getTop(stack)
    }
}

// console logs the top of the stack (last element index) or "EMPTY" if it is empty
function getTop(stack) {
    let top = stack[stack.length - 1]
    if (top) {
        console.log(top)
    }
    else {
        console.log("EMPTY")
    }
}