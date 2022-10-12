function resolve(purchase) {
    let engines = [{ power: 90, volume: 1800 }, { power: 120, volume: 2400 }, { power: 200, volume: 3500 }]
    let carriages = [{ type: 'hatchback', color: purchase.color }, { type: 'coupe', color: purchase.color }]
    let wheelsizes = purchase.wheelsize % 2 == 1 ? purchase.wheelsize: purchase.wheelsize - 1;

    return {
        model: purchase.model,
        engine: engines.filter(e => e.power >= purchase.power)[0], 
        carriage: carriages.filter(c => c.type == purchase.carriage)[0],
        wheels: [wheelsizes, wheelsizes, wheelsizes, wheelsizes] }
    }








console.log(resolve({ model: 'VW Golf II',

power: 90,

color: 'blue',

carriage: 'hatchback',

wheelsize: 14 }))