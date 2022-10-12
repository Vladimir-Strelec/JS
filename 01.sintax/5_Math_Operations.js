function colkulation(...params) {
    switch (params[2]) {
        case '-': result = params[0] - params[1]; break;
        case '+': result = params[0] + params[1]; break;
        case '/': result = params[0] / params[1]; break;
        case '*': result = params[0] * params[1]; break;
        case '**': result = params[0] ** params[1]; break;
        case '%': result = params[0] % params[1]; break;
    }
    console.log(result)
    
}

colkulation(1, 2, '+')