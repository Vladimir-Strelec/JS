function func(params) {
    for (let i =  0; +i < params.length; i++) {
        if (+params[i] < 0) {
            let x = params.splice(i, 1)
            params.unshift(x[0])
        }
    }
    console.log(params)
}

func([3, -2, 0, -1])
