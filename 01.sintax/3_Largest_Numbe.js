function large_num(...params) {
    let current_num;
    for (let index = 0; index <= params.length; index++) {
        if (params[index] > 0 && params[index] > current_num) {
            current_num = params[index];
        } else {
            if (current_num == undefined) {
                current_num = params[index];
            } else {
                if (params[index] > current_num) {
                    current_num = params[index]
                }
            }
        }

    }
    console.log(`The largest number is ${current_num}.`)
}
large_num(3, 5)