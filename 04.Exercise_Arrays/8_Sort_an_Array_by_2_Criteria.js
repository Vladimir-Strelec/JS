function solve(arr) {
    let sorted = arr.sort((a, b) => a.length - b.length || a.localeCompare(b))
return sorted.join(', ')
}
console.log(solve(['alpha', 'beta', 'gamma']))