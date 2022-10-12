const result = [];
let func = array => {for (let index = 0; index < array.length; index+=2) {
    result.push(array[index]);
    }
    console.log(result.join(' '))
}

func(['20', '30', '40',

'50', '60'])
