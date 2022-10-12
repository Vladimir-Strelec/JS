function oddNums(arr) {
    const result = [];
    for (let index = 1; index < arr.length; index+= 2) {
        result.push(+arr[index] * 2);       
    }
    return result.reverse()

}

console.log(oddNums([3, 0, 10, 4, 7, 3]))