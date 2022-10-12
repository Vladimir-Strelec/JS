
function key(x) {
    let days = {Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5, Saturday: 6, Sunday: 7}
    if (x in days) {
        console.log(days[x])
    } else {
        console.log('error')
    }
    
}

key('Sund')