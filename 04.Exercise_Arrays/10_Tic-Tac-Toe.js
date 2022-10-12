let matrix = [];

for (let r = 0; r < 3; r++) {
    matrix.push([]);
    for (let c = 0; c < 3; c++) {
        matrix[r].push(false);  
        
    }
    
}

function ticTacToe(array) {
    let finish = true;
    for (let step = 0; step < 9; step++) {
        const row = array[step][0];
        const col = array[step][2];
        

        if (step % 2 == 0 && matrix[row][col] === false) {
            matrix[row][col] = 'X'
        } else if (step % 2 != 0 && matrix[row][col] === false) {matrix[row][col] = 'O'
    } else {
        console.log("This place is already taken. Please choose another!")
        array.splice(step, 1)
        step -= 1
    }
        
        if (chekGreat(matrix)) {
            console.log(step % 2 != 0 ? "Player O wins!" : "Player X wins!")
            finish = false
            break;}
    }
    
    chekGreat(matrix)
    
    function chekGreat(m) {
        let chr_X = '';
        let chr_O = '';
        let chr_X_V = '';
        let chr_O_V = '';
        
        
        let chr_X_L = '';
        let chr_O_L = '';
        
        for (let r = 0; r < m.length; r++) {
            if (m[r].filter(chr => chr === 'X').length == 3 || m[r].filter(chr => chr === 'O').length == 3) {
                return true
            }
            if (m[r][r] == 'X') {
                chr_X_L += 'X'
            } else if (m[r][r] == 'O') {chr_O_L += 'O'}
            if (chr_X_L.length === 3 || chr_O_L.length === 3) {
                return true
            }
            
            
            
            
            for (let c = 0; c < m.length; c++) {
                if (m[c][r] == 'X') {
                    chr_X_V += 'X'
                } else if (m[c][r] == 'O') {
                    chr_O_V += 'O'
                }
            }
            if (chr_X.length === 3 || chr_O.length === 3 || chr_X_V.length === 3 || chr_O_V.length === 3 || chr_X_L.length === 3 || chr_O_L.length === 3) {
                return true
            
            } else {
                chr_X_V = ''
                chr_O_V = ''
            }
        }
        return false
    }
    if (finish == true) {
        console.log("The game ended! Nobody wins :(")        
            }
    for (let rows = 0; rows < 3; rows++) {
        console.log(matrix[rows].join(' '));
    }
}






ticTacToe(["0 1",

"0 0",

"0 2",

"2 0",

"1 0",

"1 2",

"1 1",

"2 1",

"2 2",

"0 0"])