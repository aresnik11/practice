// input = [[John,80], [Mark,60], [John,50], [Brian,90]]
// output: Brian

function highestAverageTripCost(arr) {
    // space: O(n)
    let patientObj = {}
    // // {
        // John: [80, 50]
    // }
    // creating an object aggregating patient names and their trips
    // O(n)
    for (let i=0; i<arr.length; i++) {
        let name = arr[i][0]
        let cost = arr[i][1]
        // if patient name is in our object, add cost to array
        if (patientObj.hasOwnProperty(name)) {
            patientObj[name].push(cost)
        }
        // if patient is not in our object, create a key with name 
        else {
            // space: O(m)
            patientObj[name] = [cost]
        }
    }

    let patientNames = Object.keys(patientObj)
    let maxAvgCost = 0
    let maxAvgCostPerson = ""
    // O(m)
    for (let j=0; j<patientNames.length; j++) {
        let patientName = patientNames[j]
        // array of costs
        let averageCost = findAverage(patientObj[patientName])
        if (averageCost > maxAvgCost) {
            maxAvgCost = averageCost
            maxAvgCostPerson = patientName
        }
    }
    return maxAvgCostPerson
}

function findAverage(arr) {
    let sum = 0
    // O(p)
    for (let i=0; i<arr.length; i++) {
        sum += arr[i]
    }
    let average = sum / arr.length
    return average
}

// time: O(n) 
// space: O(n)


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
        if (num1.length < num2.length) {
            let temp = num1
            num1 = num2
            num2 = temp
        }

        let lastNum2 = num2[0]
        for (let i=0; i<num1.length; i++) {
            // compare the first digit of num 1 and num 2
            // num2[i] could not exist
            // if num2[i] exists, want to compre the digits in num 1 and num2
            if (num2[i]) {
                lastNum2 = num2[i]
            }
            if (num1[i] > lastNum2) {
                return -1
            }
            else if (num1[i] < lastNum2) {
                return 1
            }

        }


    })
}