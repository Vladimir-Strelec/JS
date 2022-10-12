function equalNeighbors(array) {
    let result = 0;
    
    
    for (let row = 0; row < array.length-1; row++) {
        for (let col = 0; col < array[row].length; col++) {
            if (array[row][col] == array[row+1][col]) {result += 1}
        }
        
    }
    
    let len_row = array[0].length

    for (let col = 0; col < len_row-1; col++) {
        for (let row = 0; row < array.length; row++) {
            if (array[row][col] == array[row][col+1]) {result += 1}
        }
        
    }
    console.log(result)
}

equalNeighbors([[2, 2, 5, 7, 4],
                [4, 0, 5, 3, 4],
                [2, 5, 5, 4, 2]])