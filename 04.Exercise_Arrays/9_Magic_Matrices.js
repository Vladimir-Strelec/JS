function countMatrix(matrix) {
    const number = matrix[0].reduce((previousValue, currentValue) => previousValue + currentValue)
    let resul_row = 0
    let resul_col = 0


    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix.length; col++) {
            resul_row += matrix[row][col];
            resul_col += matrix[col][row];
        }
        if (resul_row != resul_col) {return false}
    }
    
    return true
}


console.log(countMatrix([[11, 32, 45], [21, 0, 1], [21, 1, 1]]))