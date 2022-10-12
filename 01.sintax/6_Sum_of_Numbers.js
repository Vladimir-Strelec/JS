function sumNumbers(m, n) {
    let result = 0
    for (let i = Number(m); i <= Number(n); i++) {
        result += i
    }
    console.log(result)
}

sumNumbers('-8', '20')
