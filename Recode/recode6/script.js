// Rest Operator

// function number(...a){
//     console.log(a);
// }
// number(1,2,3,5,4,5,6,7,8,8,9,6)



function number(x,y,z,...a){  /// Note rest operator er pore paramiter neye jave na
    let saikat=0
    a.map((i)=>{
        saikat+=i
    })
    console.log(saikat);
    console.log(x,y,z);
    
}
number("MD","sajib","Khan",3,34,4,6,7,8,9,0,5,6,65)

