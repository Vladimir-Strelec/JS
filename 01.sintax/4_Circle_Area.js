function circle(x) {
    if (typeof(x) == "number") {
        let result = (x**2)*Math.PI
        console.log(result.toFixed(2))
    } else {
        console.log('We can not calculate the circle area, because we receive a ' + typeof(x) + '.')
    }
}


circle(5)
circle('ngjfd')



