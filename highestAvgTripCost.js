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