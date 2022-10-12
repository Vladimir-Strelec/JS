function sameNumbers(line) {
    let sum = 0;
    let input = String(line);
    let same_num = true;
    let first_chr_index = 0; 


    for (i = 0; i < input.length; i++) {
        sum += +input[i]
        if (input[first_chr_index] != input[i]) {
            same_num = false
        }
        
    }
    console.log(same_num)
    console.log(sum)
    

}

sameNumbers(222)

