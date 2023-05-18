// Find object from Array

let info=[
    {
        name:"sajib",
        age:22,
        roll:01,
        address:"narsingdi"
    },
    {
        name:"tamim",
        age:27,
        roll:02,
        address:"dhaka"
    },
    {
        name:"riyad",
        age:44,
        roll:03,
        address:"barisal"
    },
    {
        name:"nipa",
        age:20,
        roll:04,
        address:"narsingdi"
    },
]
// console.log(info);
let search=info.findIndex((i)=>{
    // console.log(i);
    // return i.name=="tamim"
    return i.age==20

})
console.log(search);