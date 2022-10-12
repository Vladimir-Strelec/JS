function sumOperation(arr) {
    let firstOperation = 0;
    let lastOperation = 0;
    let otherOperation = '';

    for (num of arr) {
        firstOperation += num;
        lastOperation += (1 / num);
        otherOperation += String(num)

    }
    console.log(firstOperation)
    console.log(lastOperation)
    console.log(otherOperation)

}

sumOperation([1, 2, 3])
