function task(line) {
    const object = {}
    for (const iterator of line) {
        let data = iterator.split(' <-> ');
        let townName = data[0];
        let townPopulation = Number(data[1]);
        
        if (townName in object != true) {
            object[townName] = townPopulation
        } else {object[townName] += townPopulation}

    }
    for (const key in object) {
        console.log(`${key} : ${object[key]}`)
    }
    
    

}




task(['Istanbul <-> 100000',

'Honk Kong <-> 2100004',

'Jerusalem <-> 2352344',

'Mexico City <-> 23401925',

'Istanbul <-> 1000'])