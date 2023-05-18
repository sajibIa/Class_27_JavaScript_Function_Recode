// Call Back

/* 1/call back function holo akti function er bitore ar akti function paramiter hishabe pase kora
   2/orthart akti function er pori ar akti call deya
*/

function mas(output){                  // Functon two
    console.log(output);
}
let sum=0
function add(callBack,...number){     // Functon One
    // console.log(number);
    number.map((i)=>{
        sum+=i
    })
    callBack(sum)
    

}

add(mas,2,3,4,5,65,6,7,7,8,3,5,56,6,5)