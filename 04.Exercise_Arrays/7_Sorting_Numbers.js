function solve(arr) {
    arr.sort((a, b) => a - b)
    let result = []
    let len_arr = arr.length
    
    for (let index = 0; index < len_arr; index++) {
        if (index % 2 == 0) {result.push(arr.shift())
        } else {result.push(arr.pop())}
    }
    return result
    
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))
