function stringLength(...params) {
    let index_len = 0
    for (let index = 0; index < params.length; index++) 
        index_len += params[index].length;
    
    console.log(index_len);
    console.log(Math.floor(index_len /= params.length));


}
      




    
    



stringLength('chocolate', 'ice cream', 'cake')