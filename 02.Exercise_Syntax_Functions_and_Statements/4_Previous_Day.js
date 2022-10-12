function data(...params) {
    d = new Date(params)
    d.setDate(d.getDate()-1);
    console.log(`${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`)
}

data(2016, 1, 1)