// input: [10,2]
// output "210"

// input: [3,30,34,5,9]
// output: "9534330"

// 9534330

// [9,5]

function largestString(arr) {
    return arr.sort((a,b) => {
        let num1 = a.toString()
        let num2 = b.toString()
        // always make num1 the longest
        // let reversed = false
        if (num1.length < num2.length) {
            let temp = num1
            num1 = num2
            num2 = temp
            reversed = true
        }


        let lastNum2 = num2[0]
        for (let i=0; i<num1.length; i++) {
            // compare the first digit of num 1 and num 2
            // num2[i] could not exist
            // if num2[i] exists, want to compre the digits in num 1 and num2
            if (num2[i]) {
                lastNum2 = num2[i]
            }
            if (reversed) {
                if (num1[i] > lastNum2) {
                    return 1
                }
                else if (num1[i] < lastNum2) {
                    return -1
                }
            }
            else {
                if (num1[i] > lastNum2) {
                    return -1
                }
                else if (num1[i] < lastNum2) {
                    return 1
                }
            }

        }
    })
}