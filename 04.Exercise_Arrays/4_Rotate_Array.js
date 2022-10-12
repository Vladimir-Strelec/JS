const solve = (arr, n) => {
    for (let index = 0; index < n; index++) {
        arr.unshift(arr.pop())
    }
    return arr
}

solve(['1',

'2',

'3',

'4'],

2)