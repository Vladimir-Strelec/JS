function pie(arr, s, e) {
    return arr.slice(arr.indexOf(s), arr.indexOf(e)+1)
}

console.log(pie(['Pumpkin Pie',

'Key Lime Pie',

'Cherry Pie',

'Lemon Meringue Pie',

'Sugar Cream Pie'],

'Key Lime Pie',

'Lemon Meringue Pie'))