function fruit(...params) {
    let fruct = params[0];
    let price = params[2];
    let kg = params[1] / 1000;

    let sum = price * kg;

    console.log(`I need $${Number(sum).toFixed(2)} to buy ${Number(kg).toFixed(2)} kilograms ${params[0]}.`)
}

fruit('orange', 2500, 1.80)