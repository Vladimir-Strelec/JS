function solve(arr) {
    let sorted = arr.sort((a, b) => a - b)
    let half = Math.ceil(sorted.length / 2 )
    let finish = sorted.slice(-half)
    return finish
}
console.log(solve([4, 7, 2, 5]))
