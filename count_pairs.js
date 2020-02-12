function countPairs(numbers, k) {
    // reduce numbers array to object with count of each element
    const numElems = numbers.reduce((obj, item) => {
        if (!obj.hasOwnProperty(item)) {
            obj[item] = 1
        }
        else {
            obj[item]++
        }
        return obj
    }, {})

    let counter = 0
    const keys = Object.keys(numElems)
    // loop through all of the keys from our object
    for (let i=0; i<keys.length; i++) {
        // if our target number (current num + k) is also in our object
        let target = parseInt(keys[i]) + k
        if (numElems.hasOwnProperty(target)) {
            // we found a pair, so increment counter and delete the current num so we don't get dupes
            counter++
            delete numElems[keys[i]]
        }
    }
    return counter
}