function roadRadar(...params) {
    let plate = {motorway: 130, interstate: 90, city: 50, residential: 20};
    let current_speed = +params[0];
    let current_plate = params[1];

    let difference = current_speed - plate[current_plate];
    let status = '';

    if (difference <= 20) {
        status = 'speeding'
    } else if (20 < difference && difference <= 40) {
        status = 'excessive speeding'
    } else {
        status = 'reckless driving'
    }

    console.log((current_speed <= plate[current_plate] ? `Driving ${current_speed} km/h in a ${plate[current_plate]} zone` : `The speed is ${current_speed - plate[current_plate]} km/h faster than the allowed speed of ${plate[current_plate]} - ${status}`))
}

roadRadar(200, 'motorway')