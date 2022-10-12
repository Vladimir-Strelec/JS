function timeToWalk(...params) {
    let count_steps = +params[0];
    let footprint = +params[1];
    let speed = +params[2] / 3.6;
    let count_minuts_breake = 0;

    let sum_km = count_steps * footprint

    let i = 0
    while (i < sum_km && i + 500 < sum_km) {
        i += 500
        count_minuts_breake += 1
    }
    let result = (sum_km / speed) + (count_minuts_breake / 60)
    console.log(new Date().getMilliseconds(result))

    
}

timeToWalk(4000, 0.60, 5)