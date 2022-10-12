function shop(x) {
    return +x / 2;
}

function dice(x) {
    return Math.sqrt(x);
}

function spice(x) {
    return x + 1
}

function bake(x) {
    return x * 3
}

function fillet(x) {
    return x - 1.20
}

function controler(...params) {
    let result = params[0];
    for (let i = 1; i < params.length; i++) {
        switch (params[i]) {
            case "chop":
                result = shop(result)
                console.log(result);
                break;

            case "dice":
                result = dice(result)
                console.log(result);
                break;
            
            
            case "spice":
                result = spice(result)
                console.log(result);
                break;
            

            case "bake":
                result = bake(result)
                console.log(result);
                break;            
            
            case "fillet":
                result = fillet(result)
                console.log(result);
                break;
            default: break;
            }
    }

}


controler('9', 'dice', 'spice', 'chop', 'bake',

'fillet')

