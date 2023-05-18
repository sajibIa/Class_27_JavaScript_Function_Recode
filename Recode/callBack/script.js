// Call back

// function job1(){
//     console.log("this is job 1");     // Time Set
// }
// function job2(){
//     console.log("this is job 2");
// }

// setTimeout(job1,5000)
// job2()


// This is Call Back

function add(a,b,callback){     // akti funciton er bitore ar akti function pase kora
    console.log(a+b);
    callback()
}
function mass(){
    console.log("Addition End");
}

add(2,3,mass)
add(4,4,mass)
