function lineArr(array) {
    let result;
    for (const iterator of array) {
        let x = +Math.max(...iterator)
        if (x > result || result == undefined) {result = x}
    }
    return result
}

console.log(lineArr([[-3], [-1], [-4]]))    