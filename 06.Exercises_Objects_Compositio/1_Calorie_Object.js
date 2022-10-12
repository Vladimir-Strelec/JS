function resolve(array) {
    const result = {}
    const key = array.filter((chr, index) => { if(index % 2 == 0) return chr})
    const value = array.filter((chr, index) => { if(index % 2 != 0) return chr})
    
    for (let index = 0; index < key.length; index++) {
        result[key[index]] = Number(value[index]);
        
    }
    console.log(result)
}


resolve(['Yoghurt', '48', 'Rise', '138',

'Apple', '52'])
