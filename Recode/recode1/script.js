   //// Primitive //// Pase by value

 // let x="sajib"
 // let y=x
  // console.log(x);
 // console.log(y);

 // let x="sajib"
 // let y=x
  // y="Nipa"
 // console.log(x);
 // console.log(y);


 ///// Non-Primitive //// Pase by refference

 let obj={
    name:"sajib"
 }
 let obj2={
    name:"mito"
 }

 obj.name=obj2.name
 console.log(obj.name);
 console.log(obj2.name);

        