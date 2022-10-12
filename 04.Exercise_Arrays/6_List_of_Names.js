function sortedName(arr) {
    arr.sort((a,b) => a.localeCompare(b))
    return arr.map((x, step, index) => {console.log(`${step+1}.${x}`)})
}

sortedName(["John",

"Bob",

"Christina",

"Ema"])