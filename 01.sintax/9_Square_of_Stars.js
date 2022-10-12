function stars(n) {
    let r = '';
    for (row = 1; row <= n; row++) {

        for (i=1; i <= n; i++) {
            if (i != n) {
                r += '* '
            } else {
                r += '*'
            }
            
        }
        console.log(r)
        r = ''
    }
}

stars(5)